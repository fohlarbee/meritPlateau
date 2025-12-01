import Image from "next/image"

export default function ProjectCards( { id, src, description }) {
  
        return (
    <div  className="flex items-center relative " >    
        <div className=" relative before:absolute before:inset-0 before:bg-black/40 ">
                <Image src={ src } 
                alt={ description } width={250} height={250}/>
        </div>
                <p className=" w-[100%] p-10 absolute top-50 left-0 text-xl text-white font-bold ">{description}</p>
    </div>
  )
}
