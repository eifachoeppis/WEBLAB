import Head from "next/head";
import Link from "next/link";
import { Navigation } from "./navigation";
import styles from "./layout.module.css"

interface LayoutProps {
  children: React.ReactNode,
  home: boolean
}

export default function Layout({ children, home }: LayoutProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="container">
        <Navigation />
      </header>
      <main className="container">{children}</main>

      <footer className={`${styles.footer} container`}>
        {!home ? (
          <Link href="/">← Back to home</Link>
        ) :
          (
            <Link href="/administration">→ Administration</Link>
          )}
      </footer>
    </>
  );
}
