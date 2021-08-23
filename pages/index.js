/* eslint-disable react/react-in-jsx-scope */
import Head from "next/head"
// import Registration from "../components/Registration"
import ArrayForm from "../components/FieldArrayForm"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>James' Journey Registration</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-auto">
        {/* <Registration /> */}
        <ArrayForm />
      </main>
    </div>
  )
}
