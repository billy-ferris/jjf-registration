import Head from "next/head"
import RegisterForm from "../components/RegisterForm"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>James' Journey Registration</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-auto">
        <RegisterForm />
      </main>
    </div>
  )
}
