import Head from "next/head";
import { Inter } from "@next/font/google";
import Layout from "@/components/layout";
import Radar from "@/components/radar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Tech-Radar Lukas</title>
      </Head>
      <Radar/>
    </Layout>
  );
}
