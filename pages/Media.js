import Image from "next/image";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";

export default function Media(){
        return(
                <section>
                   <Navbar />
                      <article className="container my-12 flex gap-20">
                        <aside className="flex-1">
                                <Heading headingText={"our future plan"}/>
                                <h1 className="text-2xl lg:text-4xl py-4">Seed to Success</h1>
                               
                                <div className="py-2"> 
                                  <h3 className="text-purp-dark">Seed to Success:</h3>
                                  <p className="text-lg">Livelihood support for individuals and communities affected by religious and ethnic crises.</p>
                                </div>

                                <div className="py-2"> 
                                  <h3 className="text-purp-dark">Problem:</h3>
                                  <p className="text-lg">Lack of economic Opportunities and social cohesion within the communities who have suffered from religious and ethnic crises in Plateau State, Nigeria.</p>
                                </div>


                                <div className="py-2"> 
                                  <h3 className="text-purp-dark">Core Objective:</h3>
                                  <p className="text-lg">To provide financial and business support to give support to aspiring entrepreneurs within these disadvantaged communities to get them self-reliant.</p>
                                </div>
                        </aside>

                        <aside className="flex-1">
                                <Image src="/assets/seedSuccess.webp" width={400} height={400} alt="seeds to success bakground"/>
                        </aside>

                     </article>

                     {/* other component section */}

                     <div className="bg-col-blk flex text-col-white">
                        <Heading headingText={"key components of seeds to success"}/>
                     </div>

                     <Footer />
                </section>
        )
}