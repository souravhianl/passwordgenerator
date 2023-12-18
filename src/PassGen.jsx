import React, { useState } from "react";
import "./PassGen.css";

function PassGen() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);

  const generatedPassword = () => {
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let characters = "";
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;
    if (includeLowercase) characters += lowercase;
    if (includeUppercase) characters += uppercase;

    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }
    setPassword(generatedPassword);
  };
  return (
    <div className="container">
      <div>
        <label>
          Password Length:
          <input
            type="number"
            value={passwordLength}
            onChange={(e) => {
              setPasswordLength(Number(e.target.value));
            }}
            min={6}
            max={20}
          />
        </label>
      </div>
      <div>
        <label>
          Include Numbers:
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => {
              setIncludeNumbers(e.target.checked);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Include Symbols:
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => {
              setIncludeSymbols(e.target.checked);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Includes Lowercase Characters:
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={(e) => {
              setIncludeLowercase(e.target.checked);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Include Uppercase Characters:
          <input
          type="checkbox"
          checked={includeUppercase}
          onChange={(e)=>{
            setIncludeUppercase(e.target.checked)
          }}
           />
        </label>
      </div>
      <button className="generate-button"
      onClick={generatedPassword}
      >
        Generate Password
      </button>
      <input type="text"
      className="input-field"
      value={password}
      readOnly />
    </div>
  );
}

export default PassGen;
