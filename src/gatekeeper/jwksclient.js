const assert = require('assert');
const jwks = require('jwks-rsa');

class JWKSClient {
  constructor(jwksUri, client) {
    assert.ok(jwksUri, 'JWKS URI is required');

    this.jwksClient =
      client ||
      jwks({
        strictSsl: true,
        jwksUri,
      });
  }

  getSigningKey(keyId) {
    return new Promise((resolve, reject) => {
      this.jwksClient.getSigningKey(keyId, (err, key) => {
        if (err) return reject(err);
        const signingKey = key.getPublicKey();
        return resolve(signingKey);
      });
    });
  }
}

module.exports = JWKSClient;
