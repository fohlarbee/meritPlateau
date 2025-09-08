
import Heading from "./Heading";
export default function Card ({cardInfo}) {
        return(
           <div className="bg-col-blk rounded-tr-xl rounded-bl-xl ">
                <Heading />

                <p className="text-white py-20 px-12 ">{cardInfo}</p>

           </div>
        )
}