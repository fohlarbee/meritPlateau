import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Team from "../components/Team";
import Values from "../components/Values";
import Mission from "../components/Mission";
import JoinUs from "../components/JoinUs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MeritPlateau</title>
        <meta name="description" content="a non-proft organization" />
        <link
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    <Hero/>
    <Mission />
    <Values/>
    <Team/>
    <JoinUs/>
   <Footer/>
   
    </div>
  );
}
