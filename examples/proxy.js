var HttpsProxyAgent = require('https-proxy-agent');
const agent = new HttpsProxyAgent("http://localhost:8888");
let Wit = null;
try {
  Wit = require('../').Wit;
} catch (e) {
  Wit = require('node-wit').Wit;
}

const accessToken = (() => {
  if (process.argv.length !== 3) {
    console.log('usage: node examples/basic.js <wit-access-token>');
    process.exit(1);
  }
  return process.argv[2];
})();

const client = new Wit({ accessToken, agent });
client.message('Monday', {})
  .then((data) => {
    console.log('Yay, got Wit.ai response: ' + JSON.stringify(data));
  })
  .catch(console.error);