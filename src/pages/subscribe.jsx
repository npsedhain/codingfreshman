import Head from 'next/head'

import { Newsletter } from '@/components/NewsLetter'
import { Container } from '@/components/Container'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Subscribe - Anup Sedhain</title>
        <meta
          name="description"
          content="Thanks for subscribing to my newsletter."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="m-auto max-w-[500px]">
          <Newsletter />
        </div>
      </Container>
    </>
  )
}
