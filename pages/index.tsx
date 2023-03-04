import Head from "next/head";
import Layout from "@/components/layout";
import Radar from "@/components/radar";
import { getTechnologies } from "@/technology-service";
import { GetStaticProps } from "next";
import Technology from "@/models/technology";

export const getStaticProps: GetStaticProps = async (context) => {
  let technologies = await getTechnologies();
  technologies = technologies.filter(t => t.publish);
  technologies.sort((a, b) => a.category - b.category || a.ring - b.ring);
  technologies.forEach((t, i) => t.order = i + 1);
  return {
    props: {
      technologies: JSON.parse(JSON.stringify(technologies)),
    }
  }
}

export default function Home({technologies}: {technologies: Technology[]}) {
  return (
    <Layout home>
      <Head>
        <title>Tech-Radar Lukas</title>
      </Head>
      <Radar technologies={technologies}/>
    </Layout>
  );
}
