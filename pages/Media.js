import Image from "next/image";
import Heading from "../components/Heading";
import Layout from "../components/Layout";

export default function Media(){
        return(
                <Layout>
                   
                      <article className="container my-12 lg:flex gap-8 space-y-10 items-center">
                        <aside className="flex-1 py-8">
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

                     <section className="container bg-col-blk text-white py-8 my-12">
                        <h2 className="uppercase font-bold"><span className="bg-col-gold w-4 h-4 mx-2 inline-block rounded-full"></span>key components of seeds to success</h2>

                        <div className="my-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:space-x-10 lg:space-y-0 space-y-10 px-8 ">
                                <article className="flex-1">
                                        <h2 className="capitalize flex gap-4 items-center text-lg font-bold py-6"><Image src="/assets/noteIcon.png" alt="note icon"  width={40} height={40}/>microfinance services</h2>   
                                        <p>We offer a range of microfinance products, including loans, savings, by partnering with microfinance banks in these communities.</p>
                                </article>

                                <article className="flex-1">
                                        <h2 className="capitalize flex gap-4 items-center text-lg font-bold py-6"><Image src="/assets/noteIcon.png" alt="note icon"  width={40} height={40} />financial literacy</h2>   
                                        <p>Educate beneficiaries on financial management and budgeting.</p>
                                </article>
                                <article className="flex-1">

                                        <h2 className="capitalize flex gap-4 items-center text-lg font-bold py-6"><Image src="/assets/noteIcon.png"  alt="note icon" width={40} height={40} />entrepreneurship training</h2>    
                                        <p>Provide business skills training, including market analysis, financial management, and marketing.</p>
                                </article>
                        </div>
                        
                     </section>

                     <section className="container my-12">

                     <Heading headingText={"projects we have done"}/>
                        <h2 className=" font-bold text-4xl ml-8 py-8">Together we can plant a seed and watch it grow.</h2>
                        
                        <div  className="relative" >

                        <Image src="/assets/currency.webp" alt="currency" width={250} height={250}/>
                        </div>

                        <p className="absolute ">Micro-loan disbursement and repayment management.</p>
                     </section>


                </Layout>
        )
}