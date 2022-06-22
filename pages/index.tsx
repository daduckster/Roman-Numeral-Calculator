import {useState} from "react";
import Head from 'next/head'

export default function Home() {
  const [calculatedRomanNumber, setCalculatedRomanNumber] = useState<string>('');

  return (
    <div>
      <Head>
        <title>Roman Numeral Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <form>
          <label htmlFor="user-input">Your Number
            <input type="text" id="user-input"/>
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
