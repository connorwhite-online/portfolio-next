import Head from 'next/head'
import styles from '@/styles/Home.module.css'

// Component imports
import Work from './work'
import Info from './info'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Connor White" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Work />
      </main>
    </>
  )
}
