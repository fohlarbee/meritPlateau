import Head from "next/head";
import Image from "next/image";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MoreInfoModal from "../components/MoreInfoModal";
import Student from "../components/Student";
import Teacher from "../components/Teachers";
import Values from "../components/Values";
import Mission from "../components/Mission";

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
    <Teacher/>
    <Student/>
   <MoreInfoModal/>
   <Cta/>
   <Footer/>
   
    </div>
  );
}
