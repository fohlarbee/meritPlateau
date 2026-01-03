import {useState } from 'react';
import { ChoiceButtons } from './buttons';
import FormInputData from './FormInputData';


export function DropDownOptions({ onButtonClick }) {

  return (
    <div className="px-4 md:w-1/2 mb-8 ">
        <ChoiceButtons value="General Inquiry/Question" onButtonClick={onButtonClick}/>
        <ChoiceButtons value="Collaboration or Partnership Proposal" onButtonClick={onButtonClick}/>
        <ChoiceButtons value="Media/Press Inquiry" onButtonClick={onButtonClick}/>
    </div>
  )
};

// collaboration dropdown options

export function CollabOptions() {

    const [contactChoice, setContactChoice] = useState('Email');

  const handleRadioChange = (e) => {
    setContactChoice(e.target.value);
  };

  const contactOptions = [
    {label: 'Email', value: 'Email'},
    {label: 'Phone Call', value: 'Phone Call'},
    {label: 'Virtual Meeting', value: 'Virtual Meeting'},
    {label: 'Physical Meeting', value: 'Physical Meeting'},
  ]
  return (
    <div>
      <FormInputData 
            label={"What is your role/title? *"}
            name={"Role/Title"}
            type={"text"}
            placeholder={"Helps us understand your level and capacity"}
            required
      />

        <FormInputData 
            label={"Website/Social Links (optional)"}
            name={"URL input"}
            type={"url"}
            placeholder={"Allows the team quickly review your background"}
        />

          {/* Radio buttons */}

<div className='pb-3'>

          <FormInputData 
          type="radio"
          label="Preferred method of communication * "
          name="contactChoice"
          value={contactChoice}
          onChange={handleRadioChange}
          options={contactOptions}/>

</div>
            <FormInputData 
            label={"What kind of impact are you hoping to make? *"}
            name={"Impact choice"}
            type={"text"}
            placeholder={"Helps us understand your intent clearly"}
            required
            />

{/* Checkboxes */}

      <div className="pb-4">
            <p className="md:text-lg">Programs/Areas of interest *</p>

            <FormInputData 
            type={'checkbox'}
            label={"Education"}
            name={"Education"}
            />

            <FormInputData 
            type={'checkbox'}
            label={"Poverty Eradication"}
            name={"Poverty Eradication"}
            />

            <FormInputData 
            type={'checkbox'}
            label={"Health"}
            name={"Health"}
            />

            <FormInputData 
            type={'checkbox'}
            label={"Advocacy"}
            name={"Advocacy"}
            />

            <FormInputData 
            type={'checkbox'}
            label={"Industralisation/Innovation"}
            name={"Industralisation/Innovation"}
            />
      </div>
    </div>
  )
}

// MEDIA FIELDS



export function MediaFields() {

   const [requestType, setRequestType] = useState('Email');

  const handleRadioChange = (e) => {
    setRequestType(e.target.value);
  };

  const requestOptions = [
    {label: 'Interview Request', value: 'Interview Request'},
    {label: 'Request for Official Comment/Statement', value: 'Request for Official Comment/Statement'},
    {label: 'Request for Data/Statistics', value: 'Request for Data/Statistics'},
    {label: 'Photo/Video Asset Request', value: 'Photo/Video Asset Request'},
    {label: 'General Inquiry', value: 'General Inquiry'},
  ]
  return (
    <div>

      <FormInputData 
            label={"What is your Role/Title? *"}
            name={"Role/Title"}
            type={"text"}
            placeholder={"Reporter, Editor, Producer, Freelancer, etc."}
            required
        />

      <FormInputData 
            label={"Website/Social Links (Optional)"}
            name={"URL input"}
            type={"url"}
            placeholder={"A link to the outlet's website or your portfolio."}
          />

          <div className="mb-4">
                <FormInputData 
          type="radio"
          label="Type of Request * "
          name="contactChoice"
          value={requestType}
          onChange={handleRadioChange}
          options={requestOptions}/>
          </div>
    </div>
  )
}

