import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Mr.Kalumian | Home</title>
        <meta name="keywords" content="kalumian"></meta>
      </Head>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      <Link href="/fields/">
        <a className={styles.btn}>See Fields</a>
      </Link>
    </div>
  )
}