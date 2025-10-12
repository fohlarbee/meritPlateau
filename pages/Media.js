import Image from "next/image";
import Heading from "../components/Heading";
import Layout from "../components/Layout";

export default function Media(){
        return(
                <Layout>
                   
                      <article className="container my-12 flex gap-8 items-center">
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
                                <Image src="/assets/seedSuccess.webp" width={800} height={800} alt="seeds to success bakground"/>
                        </aside>

                     </article>

                     {/* other component section */}

                     <div className="container bg-col-blk flex text-white py-4 my-4">
                        <h2 className="uppercase font-bold"><span className="bg-col-gold w-4 h-4 mx-2 inline-block rounded-full"></span>key components of seeds to success</h2>

                        <div></div>


                     </div>

                     <Heading headingText={"projects we have done"}/>

                </Layout>
        )
}