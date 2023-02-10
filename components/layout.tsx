import Head from "next/head";
import Link from "next/link";
import { Navigation } from "./navigation";

export default function Layout({ children, home }) {
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
      {!home && (
        <div>
          <Link href="/">← Back to home</Link>
        </div>
      )}
      <footer className="container">&copy; 2023</footer>
    </>
  );
}
