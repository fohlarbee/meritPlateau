
export default function Heading ({headingText, color='#fff'}) {
        return (        
                <h3 className="font-semibold mt-3 uppercase text-{color}"
                color={color}> <span className="bg-col-gold w-4 h-4 mx-2 inline-block rounded-full"></span>
                        {headingText}
                 </h3>
        )
}