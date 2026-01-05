import { useState } from 'react';
import Image from "next/image"
import FormInputData from "../components/FormInputData";
import { DefaultButtons } from '../components/Buttons';


export default function VolunteerForm() {

  const [genderChoice, setGenderChoice] = useState(null);
  const [solutionChoice, setSolutionChoice] = useState(null);
  const [availabilityChoice, setAvailabilityChoice] = useState(null);
  const [commitmentChoice, setCommitmentChoice] = useState(null);
  const [teamWorkChoice, setTeamWorkChoice] = useState(null);
  const [yesNoChoice, setYesNoChoice] = useState(null);
  const [ageRange, setAgeRange] = useState(null);
  const [stepCount, setStepCount] = useState(1);
  const TotalSteps = 3;


// next button handler
  const prevButton = () => {
    setStepCount(stepCount - 1);
    console.log(stepCount);
  }
// next button handler
  const nextButton = () => {
    setStepCount(stepCount + 1);
    console.log(stepCount);
  }


// Handler for gender radio buttons
  const handleRadioChange = (e) => {
    const selectedOption = e.target.value; 
    setGenderChoice(selectedOption);
    console.log(selectedOption);
  };

  
// Handler for age range radio buttons
  const handleAgeRangeSelection = (e) => {
    const selectedValue = e.target.value; 
    setAgeRange(selectedValue);
     console.log(selectedValue);
  }

// Handler for solution radio buttons
  const handleSolutionSelection = (e) => {
    const selectedSolution = e.target.value; 
    setSolutionChoice(selectedSolution);
     console.log(selectedSolution);
  }

  // Handler for Yes/No radio buttons
  const handleYesNoSelection = (e) => {
    const yesNoOption = e.target.value; 
    setYesNoChoice(yesNoOption);
     console.log(yesNoOption);
  }

    // Handler for commitment options
  const handleCommitmentSelection = (e) => {
    const commitmentOption = e.target.value; 
    setCommitmentChoice(commitmentOption);
     console.log(commitmentOption);
  }

  // Availability options
  const handleAvailabilitySelection = (e) => {
    const availabilityOption = e.target.value; 
    setAvailabilityChoice(availabilityOption);
     console.log(availabilityOption);
  }

  // Teamwork options
  const handleTeamWorkSelection = (e) => {
    const teamworkOption = e.target.value; 
    setTeamWorkChoice(teamworkOption);
     console.log(teamworkOption);
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
    ];

    // Solution options
    const solutionOptions = [
      {label: 'Indifferent', value: 'Indifferent'},
      {label: 'Dissatisfied', value: 'Dissatisfied'},
      {label: 'Satisfied', value: 'Satisfied'},
    ];

    // Yes /No options

    const yesNo = [
      {label: 'Yes', value: 'Yes'},
      {label: 'No', value: 'No'},
    ];

    // Availabilty options
    const availabilityOptions = [
      {label: '1-5 Hours', value: '1-5 Hours'},
      {label: '5-10 Hours', value: '5-10 Hours'},
      {label: '10-20 Hours', value: '10-20 Hours'},
      {label: 'Event Only', value: 'Event Only'},
    ];

    // team work

     const teamWorkOptions = [
      {label: 'Not so well', value: 'Not too well'},
      {label: 'Just Ok', value: 'Just Ok'},
      {label: 'Very Well', value: 'Very Well'},
     
    ];


    // commitment options
     const commitmentOptions = [
      {label: '3 Months', value: '3 Months'},
      {label: '6 Months', value: '6 Months'},
      {label: '1 year', value: '1 year'},
      {label: 'Ongoing', value: 'Ongoing'},
     
    ];

  return (
    <>

    {/* Personal fields for the form */}

    {stepCount === 1 && (
       <section className=" grid grid-cols-1 md:grid-cols-2 items-center md:gap-8 justify-center bg-[url('/assets/formBg1.webp')] bg-cover bg-no-repeat bg-center relative md:bg-none">
      
      <div className="h-full md:p-8">
        <Image className="h-full hidden md:block" width={700} height={700} alt="form background" src="/assets/formBg1.webp" />
      </div>


 <div className="flex flex-col items-center bg-white bg-no-repeat md:bg-transparent bg-opacity-75 p-8 ">
  <article className="py-4">
    <h2 className="text-xl text-center md:text-2xl py-2">Let&apos;s build a better tommorow, together!</h2>
    <h1 className="text-4xl">Personal Information</h1>
  </article>
      <form className="w-full">
          
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
          
          <div className='flex justify-around'>
          
          {/* Previous Button */}
          <DefaultButtons  buttontext={"←  Prev"}
          onClick={() => prevButton()}
          disabled={stepCount === 1 }/>

          {/* Next Button */}
          <DefaultButtons
           onClick={() => nextButton()} 
           buttontext={"Next →"}
          
           />
            
          </div>     
      </form>
      </div>
      </section>
      )};



{/* Commitment && Availability page */}

        {stepCount === 2 && (
       <section className=" grid grid-cols-1 md:grid-cols-2 items-center md:gap-8 justify-center bg-[url('/assets/formBg1.webp')] bg-cover bg-no-repeat bg-center relative md:bg-none">
      
      <div className="h-full md:p-8">
        <Image className="h-full hidden md:block" width={700} height={700} alt="form background" src="/assets/formBg1.webp" />
      </div>


 <div className="flex flex-col items-center bg-white bg-no-repeat md:bg-transparent bg-opacity-75 p-8 ">
  <article className="py-4">
    
    <h1 className="text-4xl">Commitment and Availability</h1>
  </article>
      <form className="w-full">
          
          <FormInputData 
            label={"In what ways do you wish to bring change to your community? *"}
            name={"Community Change"}
            type={"textarea"}
            rows={8}
            required
      />

      <FormInputData 
          type="radio"
          label="How satisfied are you with the solutions already provided to the problems stated above? * "
          name="Solution selection"
          value={solutionChoice}
          onChange={handleSolutionSelection}
          options={solutionOptions}
          required
      />

           <FormInputData 
          type="radio"
          label="If given the opportunity, will you be willing to create meaningful change? * "
          name="change preference"
          value={yesNoChoice}
          onChange={handleYesNoSelection}
          options={yesNo}
          required
      />

             <FormInputData 
          type="radio"
          label="What is your general weekly availability? * "
          name="Availability preference"
          value={availabilityChoice}
          onChange={handleAvailabilitySelection}
          options={availabilityOptions}
          required
      />

             <FormInputData 
          type="radio"
          label="How well can you work in a team * "
          name="Availability preference"
          value={teamWorkChoice}
          onChange={handleTeamWorkSelection}
          options={teamWorkOptions}
          required
      />

             <FormInputData 
          type="radio"
          label="Minimum Commitment * "
          name="minimum commitment"
          value={commitmentChoice}
          onChange={handleCommitmentSelection}
          options={commitmentOptions}
          required
      />

         
          
          <div className='flex justify-around'>
          
          <DefaultButtons  buttontext={"←  Prev"}
          onClick={() => prevButton()}
          disabled={stepCount === 1 }
          />

          <DefaultButtons
           onClick={() => nextButton()} 
           buttontext={"Next →"}
           />
            
          </div>     
      </form>
      </div>
      </section>
      )};

      {/* Skills / Interests page */}

      { stepCount ===3 && (
        <section className=" grid grid-cols-1 md:grid-cols-2 items-center md:gap-8 justify-center bg-[url('/assets/formBg1.webp')] bg-cover bg-no-repeat bg-center relative md:bg-none">
      
      <div className="h-full md:p-8">
        <Image className="h-full hidden md:block" width={700} height={700} alt="form background" src="/assets/formBg1.webp" />
      </div>


 <div className="flex flex-col items-center bg-white bg-no-repeat md:bg-transparent bg-opacity-75 p-8 ">
  <article className="py-4">
    
    <h1 className="text-4xl">Skills and Interests</h1>
  </article>
      <form className="w-full">
          
          <FormInputData 
            label={"Why do you want to volunteer? *"}
            name={"Reason for volunteering"}
            type={"textarea"}
            rows={6}
            required
      />

      <FormInputData 
            label={"List your skills *"}
            name={"Skill list"}
            type={"textarea"}
            rows={4}
            placeholder={'e.g: Photography, Project management, Fundraising. e.t.c.'}
            required
      />

      <FormInputData 
            label={"How do you plan to use your skills to help Merit Plateau achieve its goals? *"}
            name={"Plan to help Merit Plateau with skills"}
            type={"textarea"}
            rows={6}
            placeholder={'I plan to use my Photography skills to tell great stories about its impact'}
            required
      />

      <FormInputData 
          type="radio"
          label="Do you have any past volunteering Experience? * "
          name="Volunteerinig Experience"
          value={yesNoChoice}
          onChange={handleYesNoSelection}
          options={yesNo}
          required
      />

      <div className='flex justify-around'>
          
          <DefaultButtons  buttontext={"←  Prev"}
          onClick={() => prevButton()}
          disabled={stepCount === 1 }
          />

          <DefaultButtons
           onClick={`${() => nextButton()}`} 
           buttontext={"Next →"}
           disabled={stepCount >= TotalSteps}
           />
            
          </div>  
</form>
      </div>
</section>
      )}
     
    </>
  )
}