
export default function Heading ({headingText}) {
        return (        
                <h3 className="font-semibold text-col-blk mt-3 uppercase"> <span className="bg-col-gold w-4 h-4 mx-2 inline-block rounded-full"></span>
                        {headingText}
                 </h3>
        )
}