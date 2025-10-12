import Image from "next/image";
import Heading from "../components/Heading";
import JoinUs from "../components/JoinUs";
import Card from "../components/Card";
import Layout from "../components/Layout";
export default function About() {

        return (
            <Layout className="">

                <div className="container my-16 gap-8 flex flex-col lg:flex-row "> 

                  <aside className="flex-1">
                        <Heading headingText={"know about us"}/>
                        <h1 className="font-headerFont text-2xl py-4 lg:text-5xl  w-full"> We are a community-based non-governmental organization</h1>
                  </aside>

                  <aside className="flex-1">
                        <h1 className="font-bold text-xl pl-8"> We are a community-based non-governmental organization</h1>
                        <p className="py-4 text-lg">
                                Merit Plateau is dedicated to uplifting underpriviledged individuals and communities through sustainable development initiatives. We focus on addressing social and economic challenges by providing education, skill-building, and empowerment programs. Our work is rooted in collaboration, ensuring that local voices and needs shape our initiatives. By fostering resilience and self-sufficiency, we create Opportunities for lasting change. Together, we are building a future where adversity becomes a stepping stione to success.
                        </p>
                  </aside>
                </div>

                <div className="container bg-col-blk my-36 py-20">
                  <Image src="/assets/aboutBg.webp" className="mt-[-200px] mx-auto " width={1200} height={500} alt="background image of children smilling"/>

                  <article className="flex flex-col lg:flex-row gap-20 mt-16">

                  <aside className="flex-1">
                  <Heading headingText={"our mission"} />
        <h2 className=" text-2xl lg:text-4xl font-headerFont text-white mt-3 py-2">
        Empowering Lives, 
        Transforming Communities: 
        Tackling Poverty and Education for a Sustainable Future
      </h2>
      <p className=' font-bodyFont text-white text-xl py-4'>
      Our mission at Merit Plateau is to empower underprivileged individuals and communities by addressing critical social and economic challenges, such as poverty and education, through regular engagement and empowerment programs, ultimately creating sustainable and equitable communities.
      </p>
                  </aside>
                    <aside className="flex-1">
                      
                    <Heading headingText={"our vision"} />
              
                    <h2 className=" text-2xl lg:text-4xl font-headerFont text-white mt-3 py-2">
                      Empowering the Underprivileged: 
                      Transforming Adversity into Opportunity in Plateau State
                    </h2>
                    <p className=' font-bodyFont text-white text-xl py-4'>
                    We at Merit Plateau envisage a Plateau where underprivileged individuals in Plateau State, Nigeria are well-equipped 
                    with the necessary tools to transform adversity into a springboard for reaching their full potential.
                    </p>


                    </aside>
                    
                  </article>


                </div>


                  <article className="flex flex-col items-center px-4">
                    <Heading headingText={"key objectives"} />

                  <div className="mx-auto mb-8  mt-12 grid md:grid-cols-2 lg:grid-cols-3 lg:flex-row gap-20 items-center flex-1 ">

                    <Card cardInfo={"By Q2 of 2026, we project to grow our council size to 200 active members"}/>

                    <Card cardInfo={"To extend our reach and more communities in need of our programs"}/>

                    <Card cardInfo={"Initiate multiple SDG projects across different areas of Plateau State Nigeria."}/>

                    <Card cardInfo={"By Q2 of 2026, we plan to have a solid presence online on different social media platforms"}/>

                    <Card cardInfo={"Grow to become a reputable organization where we can then begin to attract people sympathetic to our project"}/>
                  </div>
                  </article>

                <JoinUs />
            </Layout>
        )
}