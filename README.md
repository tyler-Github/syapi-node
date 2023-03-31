# syapi-node

[![npm dependents](https://badgen.net/npm/dependents/syapi-node)](https://www.npmjs.com/package/syapi-node?activeTab=dependents)
[![install size](https://packagephobia.com/badge?p=syapi-node)](https://packagephobia.com/result?p=syapi-node)
[![Downloads](https://badgen.net/npm/dt/syapi-node)](https://www.npmjs.com/package/syapi-node)
[![NPM Version](https://img.shields.io/npm/v/code-example.svg)](https://www.npmjs.com/package/syapi-node)
[![run on repl.it](https://img.shields.io/badge/Run_on_Replit-f26207?logo=replit&logoColor=white)](https://replit.com/github/tyler-github/syapi-node-example)
------------

syapi-node is a Node.js package for detecting phishing websites. It uses a combination of machine learning algorithms and blacklist checks to determine if a given URL is likely to be a phishing website.

## Installation

To install syapi-node, simply use npm:

```bash
npm install syapi-node
```


## Usage

To use syapi-node, first import the Client class:

```javascript
const { Client } = require('syapi-node');
```

Then, create a new instance of the Client class:

```javascript
const api = new Client();
```

To check if a URL is a phishing website, use the fetchDomain method:

```javascript
api.fetchDomain("https://example.com").then(function (response) {
console.log(response);
});
```

The fetchDomain method returns a Promise that resolves with an object containing the following properties:

- **isPhishing**: A boolean value indicating whether or not the URL is a phishing website.
- **confidence**: A number between 0 and 1 indicating the confidence level that the URL is a phishing website. Higher values indicate higher confidence.
- **blacklist**: An array of strings containing the names of any blacklists that the URL appears on. If the URL does not appear on any blacklists, this property will be an empty array.

## License

syapi-node is licensed under the MIT License. See the LICENSE file for more information.
