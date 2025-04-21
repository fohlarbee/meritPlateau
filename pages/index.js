import Head from "next/head";
import Home from "./Home";
import Footer from "../components/Footer";

export default function App() {
  return (
    <div>
      <Head>
        <title>MeritPlateau</title>
        <meta name="description" content="a non-proft organization" />
        <link
        ></link>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      
   <Home/>
   <Footer/>
   
    </div>
  );
}
