
export default function Mission() {
  return (
    <div className=" my-8">
      <div className="container">
        
      <div className='grid grid-cols-8 grid-rows-8 my-20'>
      <article className='md:col-start-1 md:col-end-8 col-span-8 text-center md:text-start px-2 md:row-span-full z-10'>
      <h3 className="font-semibold text-col-blk mt-3 uppercase">  <span className="bg-col-gold w-4 h-4 mx-2  inline-block rounded-full"></span>
        our vision
      </h3>

      <h2 className=" text-2xl lg:text-4xl font-headerFont text-col-blk mt-3 py-2">
        Empowering the Underprivileged: 
        Transforming Adversity into Opportunity in Plateau State
      </h2>
      <p className=' font-bodyFont text-col-blk text-xl py-4'>
      We at Merit Plateau envisage a Plateau where underprivileged individuals in Plateau State, Nigeria are well-equipped 
      with the necessary tools to transform adversity into a springboard for reaching their full potential.
      </p>
      </article>
      <div className="col-start-6 col-end-8 bg-[url('/assets/bg-circles.png')] bg-cover bg-left md:row-span-full"></div>

      </div>
      
      </div>

      {/* second grid section */}

      <div className='container'>
      <div className='grid grid-cols-8 md:mt-40'>

      <div className="bg-[url('/assets/bg-circles.png')] md:col-start-1 md:col-end-3 col-span-4 bg-cover bg-right "></div>

        <article className="md:text-end text-center md:col-start-3 md:col-end-8 col-span-8 px-2">
        <h3 className="font-semibold text-col-blk mt-3 uppercase"> <span className="bg-col-gold w-4 h-4 mx-2 inline-block rounded-full"></span>
        our mission
      </h3>
        <h2 className=" text-2xl lg:text-4xl font-headerFont text-col-blk mt-3 py-2">
        Empowering Lives, 
        Transforming Communities: 
        Tackling Poverty and Education for a Sustainable Future
      </h2>
      <p className=' font-bodyFont text-col-blk text-xl py-4'>
      Our mission at Merit Plateau is to empower underprivileged individuals and communities by addressing critical social and economic challenges, such as poverty and education, through regular engagement and empowerment programs, ultimately creating sustainable and equitable communities.
      </p>

      </article>
      
      
      </div>
      </div>

      
      </div>
  )
}
