import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

// Component imports
import Menu from './menu'
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
        <Info />
      </main>
    </>
  )
}
