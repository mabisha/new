import CryptoJS from "crypto-js";

const SECRET_KEY = "rosebudschoolnepal.org";
const FIXED_IV = CryptoJS.enc.Hex.parse("00000000000000000000000000000000"); // 16 bytes (32 hex characters)

// Encryption function
function encryptEmail(email) {
  const key = CryptoJS.enc.Utf8.parse(SECRET_KEY);
  const encrypted = CryptoJS.AES.encrypt(email, key, {
    iv: FIXED_IV,
  }).toString();
  return encrypted;
}

// Decryption function (if needed)
function decryptEmail(encryptedEmail) {
  const key = CryptoJS.enc.Utf8.parse(SECRET_KEY);
  const bytes = CryptoJS.AES.decrypt(encryptedEmail, key, { iv: FIXED_IV });
  const originalEmail = bytes.toString(CryptoJS.enc.Utf8);
  return originalEmail;
}

export { encryptEmail, decryptEmail };
