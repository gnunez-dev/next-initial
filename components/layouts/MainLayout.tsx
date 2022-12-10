import Head from 'next/head';
import Navbar from '../Navbar';

import styles from './MainLayout.module.css';

type MainLayout = {
  title: string;
  children : React.ReactNode;
}

const MainLayout = ({title, children} : MainLayout) => {
  return (
    <div className={styles.container}>
    <Head>
      <title>{title}</title>
      <meta name="description" content={`${title} page`} />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navbar/>
    <main className={styles.main}>
      {children}
    </main>
  </div>
  )
}

export default MainLayout;