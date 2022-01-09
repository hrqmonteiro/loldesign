import Head from 'next/head'
import { Hero } from '../components'

export default function Index() {
  return (
    <>
      <Head>
        <title>Telzir</title>
      </Head>

      <Hero />
    </>
  )
}
