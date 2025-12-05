const FormInputData = ({  label, name, type = 'text',  placeholder  }) => {
        const inputId = name;
        return ( 
                <div className="mb-6 w-96">
              <label htmlFor={inputId}>{label}</label>
              <input className="block p-2 shadow appearance-none border border-violet-300 leading-tight focus:outline-none rounded-lg w-full" 
        type={type} id={inputId} name={name} placeholder={placeholder}></input>
            </div>
         );
}
 
export default FormInputData;