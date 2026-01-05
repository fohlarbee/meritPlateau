import { useState, useEffect } from 'react';
import Image from 'next/image';

const FormInputData = ({  label, name, type = 'text',  placeholder, options = [], value, onClick, rows, onChange, isExpanded, hasChevron }) => {

        const inputId = name;
          const [isMenuOpen, setIsMenuOpen] = useState(false);
          const iconClasses = ` 
          transition-transform duration-200
          ${isExpanded ? 'rotate-180' : 'rotate-0'}`

          // Optional Textarea rendering

          if (type === 'textarea') {
            return (
              <>
                <label htmlFor={name} className="block md:text-lg mb-2">
                  {label}
                </label>
                <textarea 
                  id={inputId}
                  name={name}
                  value={value}
                  onChange={onChange}
                  rows={rows}                
                  placeholder={placeholder}
                  className="block w-96 p-3 mb-4 form-textarea shadow appearance-none border border-violet-300/10 leading-tight focus:outline-none"
                />

              </>
            );
          }

          // Checks if Input type is a radio button

          return type === 'radio'  ? (
              <div>
                <label className="md:text-lg mt-4">{label}</label>
                <div>
                 {options && Array.isArray(options) && options.map((option) => (
          <div key={option.value} className="flex items-center">
            {/* ... Radio Input JSX structure ... */}
            <input type="radio"  
            name={name}
            className="form-radio cursor-pointer  text-indigo-600 border-indigo-600 focus:ring-indigo-500"
            value={option.value}
            onChange={onChange}/>
            
            <label
            className="ml-3 py-1 md:text-lg" htmlFor={`${name}-${option.value}`}> 
            {option.label} 
            </label>
          </div>
        ))}
                </div>
              </div>
          ):
  
          // conditionally renders input type for checkbox
          type === 'checkbox' ? (
            <div flex items-center mb-4>
              <input
              className="form-checkbox cursor-pointer  text-indigo-600 border-indigo-600 focus:ring-indigo-500"
              type="checkbox"
              id={inputId}
              name={name}
              checked={value}/>
              <label htmlFor={name}
              className="ml-3  md:text-lg select-none cursor-pointer">
                {label}
              </label>
            </div>
              
            ): (

          // Renders default structure for Input type of text/butttons( 
              <div className="mb-6 md:w-96 relative">
              <label className="mt-4 md:text-lg" htmlFor={inputId}>{label}</label>
              <input 
              className="block p-2 my-2 md:text-lg shadow appearance-none border border-violet-300/10 leading-tight focus:outline-none rounded-lg w-full " 
        type={type} id={inputId} name={name} placeholder={placeholder} value={value} onClick={onClick} onChange={onChange}
        />

        {/* Conditional Chevron Rendering */}
          {hasChevron &&
          (<button type="button" className="absolute inset-y-0 right-0 flex items-center pr-4 "
          style={{ top: '1.8rem'}}
            onClick={onClick} 
          >
              <Image className={iconClasses} src="/assets/down-chevron.svg" alt="down arrow" width={20} height={20} />
           </button> 

          )}
            </div>
         );
};
 
export default FormInputData;