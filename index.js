const fetch = require('node-fetch');

function domain_from_url(url) {
    var result
    var match
    if (match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im)) {
        result = match[1]
        if (match = result.match(/^[^\.]+\.(.+\..+)$/)) {
            result = match[1]
        }
    }
    return result
}

class Client {
    constructor(apiKey = null) {
        if (apiKey === null) {
            // console.log("No API Key Provided (Some API Requests Require This)")
        } else {
            // console.log("API Key Provided")
        }
    }

    async fetchDomain(domain) {
        domain = domain_from_url(domain);
        const response = await fetch(`https://phish.sinking.yachts/v2/check/${domain}`, {
            method: 'GET'
        });
        const body = await response.text();
        return body;
    }

    async fetchAllDomains() {
        const response = await fetch('https://phish.sinking.yachts/v2/all', {
            method: 'GET'
        });
        const body = await response.text();
        return body;
    }

    async fetchRecentDomains(dt = 604800) {
        const response = await fetch(`https://phish.sinking.yachts/v2/recent/${dt}`, {
            method: 'GET'
        });
        const body = await response.text();
        return body;
    }

    async DBSize() {
        const response = await fetch('https://phish.sinking.yachts/v2/dbsize', {
            method: 'GET'
        });
        const body = await response.text();
        return body;
    }
}

module.exports.Client = Client;
