import crypto from "crypto-js";
export const CRYPTO_KEY = "secretKey123456789";
export const decrypt = (cipherText) => {
  try {
    const bytes = crypto.AES.decrypt(cipherText, CRYPTO_KEY);
    const decryptedData = JSON.parse(bytes.toString(crypto.enc.Utf8));
    return decryptedData;
  } catch (error) {
    return undefined;
  }
};
