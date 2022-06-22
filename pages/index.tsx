import React, {useState} from "react";
import Head from 'next/head'
import {convertToRoman} from "../utils/calculatorHelper";
import {number} from "prop-types";

export default function Home() {
  const [calculatedRomanNumber, setCalculatedRomanNumber] = useState<string>('');
  const [userInput, setUserInput] = useState<string>('');

  function handleUserInputChange(e: React.ChangeEvent<HTMLInputElement>) {
   setUserInput(e.target.value);
  }

  function handleConvert(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCalculatedRomanNumber(convertToRoman(userInput));
  }

  return (
    <div>
      <Head>
        <title>Roman Numeral Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <form onSubmit={handleConvert}>
          <label htmlFor="user-input">Your Number
            <input type="text" id="user-input" value={userInput} onChange={handleUserInputChange}/>
          </label>
          <input type="submit" value="Convert"/>
        </form>

        <section>
          <p>Your Roman Numeral</p>
          <p>{calculatedRomanNumber}</p>
        </section>

      </main>
    </div>
  )
}
