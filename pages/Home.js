import Hero from "../components/Hero";
import Team from "../components/Team";
import Values from "../components/Values";
import Mission from "../components/Mission";
import JoinUs from "../components/JoinUs";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      
        <Hero/>
        <Mission />
        <Values/>
        <Team/>
        <JoinUs/>
   
    </Layout>
  );
}