const CryptoJS = require("crypto-js");
const CRYPTO_KEY = "secretKey123456789";
function encrypt(data) {
  // Encrypt
  const ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    CRYPTO_KEY
  ).toString();

  return ciphertext;
}
module.exports = { encrypt };
