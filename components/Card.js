
import Heading from "./Heading";
export default function Card ({cardInfo}) {
        return(
           <div className="bg-col-blk rounded-tr-3xl rounded-bl-3xl ">
                <Heading />

                <p className="text-white py-20 px-12 ">{cardInfo}</p>

           </div>
        )
}