
export function ChoiceButtons( { type, value, onButtonClick } ) {

  const handleClick = () => {
    {onButtonClick && onButtonClick(value)};
  };
  return (
    <>
        <button
        className="w-full py-3 px-2 border-b border-violet-300/20 leading-tight"
        onClick={handleClick}
        type={"button"}>
             {value}
        </button>

        
    </>
  )
}


// General buttons
export function DefaultButtons( { type ="button", buttontext} ) {
  return (
     <button 
     className=" bg-indigo-600 text-white px-8 py-2 mt-12 rounded-2xl font-bold text-lg md:text-xl " 
     type="button">
      {buttontext}
     </button>
  )
}

