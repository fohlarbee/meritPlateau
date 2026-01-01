import { useState } from 'react';
import Image from "next/image"
import FormInputData from "../components/FormInputData";


export default function VolunteerForm() {

  const [genderChoice, setGenderChoice] = useState(null);
  const [ageRange, setAgeRange] = useState(null);

// Handler for gender radio buttons
  const handleRadioChange = (e) => {
    const selectedOption = e.target.value; 
    setGenderChoice(selectedOption);
  };

  
// Handler for age range radio buttons
  const handleAgeRangeSelection = (e) => {
    const selectedValue = e.target.value; 
    setAgeRange(selectedValue);
  }

     // gender radio options

    const genderOptions = [
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
    ];

    // Age range radio options

    const ageRangeOptions = [
      {label: '16-20', value: '16-20'},
      {label: '20-28', value: '20-28'},
      {label: '28-35', value: '28-35'},
      {label: '35-45', value: '35-45'},
    ]

  return (
       <section className=" grid grid-cols-1 md:grid-cols-2 items-center align-middle md:gap-8 justify-center bg-[url('/assets/formBg1.webp')] bg-cover bg-no-repeat bg-center relative md:bg-none">
      
      <div className="h-full md:p-8">
        <Image className="h-full hidden md:block" width={700} height={700} alt="form background" src="/assets/formBg1.webp" />
      </div>


 <div className="flex flex-col items-center bg-white bg-no-repeat md:bg-transparent bg-opacity-75 p-8 ">
  <article className="py-4">
    <h2 className="text-xl text-center md:text-2xl py-2">Let's build a better tommorow, together!</h2>
    <h1 className="text-4xl">Personal Information</h1>
  </article>
      <form className="lg:w-3/4">
      <FormInputData 
            label={"Full Name *"}
            name={"full name"}
            type={"text"}
            placeholder={"John Doe"}
            required
      />

      <FormInputData 
          type="radio"
          label="Your gender * "
          name="Gender"
          value={genderChoice}
          onChange={handleRadioChange}
          options={genderOptions}
          required
      />

          <FormInputData 
            label={"Email *"}
            name={"Email"}
            type={"email"}
            placeholder={"John@example.com"}
            required
            />

            <FormInputData 
            label={"Phone Number *"}
            name={"Phone number"}
            type={"phone"}
            placeholder={"+(234) 80 8000 8000"}
            required
            />

            <FormInputData 
            label={"Location/City *"}
            name={"Residential Address"}
            type={"text"}
            placeholder={"Current Location/City"}
            required
            />

            <FormInputData 
            label={"Your Birthdate *"}
            name={"Phone number"}
            type={"text"}
            placeholder={" MM-DD format (e.g., 01-15)"}
            required
            />
      


            <FormInputData 
          type="radio"
          label="Select Your Age range * "
          name="Gender"
          value={ageRange}
          onChange={handleAgeRangeSelection}
          options={ageRangeOptions}
          />
            
            
            
          
      </form>
      </div>
      </section>
  )
}
