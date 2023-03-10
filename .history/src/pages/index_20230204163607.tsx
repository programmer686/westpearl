import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
const str = 'https://media.giphy.com/media/iHD88spVFkL7mZakwa/giphy.gif'
export default function Home() {
  return (
    <>
      <Head>
        <title>Westpearl</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/westpearl.png" />
      </Head>
      <main className={styles.main}>
         <section className={styles.hero}></section>
         <section className={styles.MSContainer}>

         </section>
      </main>
    </>
  )
} 
