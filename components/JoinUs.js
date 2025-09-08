import Link from "next/link"

export default function JoinUs() {
  return (
    <section className=" lg:mx-2">
        <div className="container relative bg-[url('/assets/support.webp')] bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:bg-black/60 py-12 px-16 text-center">         
        
        <article className="relative z-10">
          <h3 className="text-white font-headerFont font-extrabold text-4xl py-4">Join Us, Be a part of the Change</h3>

        <p className=" text-white text-2xl py-8 lg:px-32  font-bodyFont ">
                Become a part of Merit Plateau&apos;s mission to uplift underpriviledged communities. Whether as a volunteer, donor, or partner. Your support can help create lasting impact and positive change.
        </p>

        <button className="btn lg:btn-sm bg-[#441752] hover:bg-[#6a3a7a] text-white rounded-lg mr-1 my-8 border-none w-30 lg:w-24 capitalize"><Link href="/Join-us">join us</Link></button>
        </article>
        </div>
    </section>
  )
}
