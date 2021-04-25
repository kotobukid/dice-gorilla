let options = {};
const fs = require('fs')
let use_ssl = false;
const path = require('path');
const data = fs.readFileSync(path.resolve('config/ssl.json'));

const SSL_CERT = JSON.parse(data.toString());

try {
    options = {
        key: fs.readFileSync(SSL_CERT.production.privkey),
        cert: fs.readFileSync(SSL_CERT.production.fullchain),
    }
    use_ssl = true;
    console.log('production https')
} catch (e) {
    try {
        options = {
            key: fs.readFileSync(SSL_CERT.develop.privkey),
            cert: fs.readFileSync(SSL_CERT.develop.fullchain),
        }
        use_ssl = true;
        console.log('dev https');
    } catch (e2) {
    }
}

module.exports = {use_ssl, options};
