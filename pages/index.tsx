import Head from 'next/head'

export default function Home() {
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

      </main>
    </div>
  )
}
