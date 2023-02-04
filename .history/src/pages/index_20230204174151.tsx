import Head from 'next/head'
import Image from 'next/image'
import logo from '../images/wp.png'
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
         <section className={styles.MSContainer}>
         <Image alt='' src={logo} width={600} height={200} className={styles.logo}/>
            <p>
              <span className={styles.MSBPoints}>West Pearl</span> empowers <span className={styles.MSBPoints}>healthy aging</span> and <span className={styles.MSBPoints}>active lifestyles</span> through pure and potent world-class supplements via the Latin American <span className={styles.MSBPoints}>ecommerce</span> market.
            </p>
            
         </section>
      </main>
    </>
  )
} 