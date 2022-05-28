import "./styles.css";
import CryptoJS from "crypto-js";

export default function App() {
  const secretkey = "1232qweqwq";
  const test = "6";

  // Encrypt
  const ciphertext = CryptoJS.AES.encrypt(test, secretkey).toString();

  // Decrypt
  const bytes = CryptoJS.AES.decrypt(ciphertext, secretkey);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);

  console.log(originalText); // 'my message'

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>{test}</p>
      <p>{secretkey}</p>
      <p>{ciphertext}</p>
      <p>{originalText}</p>
    </div>
  );
}
