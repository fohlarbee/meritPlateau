import { useState } from 'react';
import Heading from '../components/Heading'
import Layout from '../components/Layout'
import FormInputData from '../components/FormInputData'
import { DropDownOptions, CollabOptions, MediaFields } from '../components/DropDownOptions';


export default function Contact() {

   const [isCollapsed, setIsCollapsed] = useState(false);
   const [isValue, setIsValue] = useState("General Inquiry/Question");

   //handles the value change for the dropdown options

   const handleValueUpdate = (newValue) => {
    setIsValue(newValue);

    // closses the dropdown menu after a selection has been made from the options
    setIsCollapsed();
   };

  return (
    <Layout>
        <article className='bg-purp-dark md:text-lg text-white px-20 py-16'>

          <Heading headingText={"contact us"}/>

          <h1>Your Vision. Our Mission. Let's Connect.</h1>

          <p>Whether you're a passionate individual with an inquiry, an organization seeking meaningful collaboration, or a potential partner looking to connect your resources with our mission, this is your starting point. <br /><br />

          We believe the greatest impact comes from working together. Every message we receive opens the door to a new possibility—a new way to empower our community and amplify our reach.<br /><br />

          Tell us a little about what you have in mind. We are eager to hear your ideas, discuss how our missions align, and explore the powerful connections we can build together.</p>


        </article>

      <section className=" container  my-20 ">

        <div className="grid grid-cols-6">

             <div className="bg-[url('/assets/bg-circles.png')] col-span-full z-10 md:block md:col-span-2 bg-cover "></div>

        <div className="flex items-center md:col-start-3 md:col-span-6 col-span-full ">
        <form className=" w-full ">
            
            <FormInputData 
            label={"Full Name *"}
            name={"full name"}
            type={"text"}
            placeholder={"Enter your name"}
            />
            
            
            <FormInputData 
            label={"Email *"}
            name={"Email"}
            type={"email"}
            placeholder={"Email Address"}
            />


            <FormInputData 
            label={"Organisation/Company"}
            name={"organisation"}
            type={"text"}
            placeholder={"Highly recommended. Use 'N/A' if personal "}
            />

            <FormInputData 
            label={"Phone Number (Optional)"}
            name={"Phone number"}
            type={"phone"}
            placeholder={"Your phone number"}
            />


            <div>
            <FormInputData 
            label={"How can we help you? *"}
            name={"message"}
            type={"button"}
            value={isValue}
            onClick={() => setIsCollapsed(!isCollapsed)}
            isExpanded={isCollapsed}
            hasChevron={true}
            />       
            </div>

            {/* this renders the dropdown menu options for purpose of contact conditionally*/}
            {isCollapsed && <DropDownOptions onButtonClick={handleValueUpdate} />}

            {/* conditionally renders the collaboration form fields by checking the input value attribute  */}
            { isValue === "Collaboration or Partnership Proposal" && <CollabOptions />}
            {/* conditionally renders the media form fields by checking the input value attribute  */}
            { isValue === "Media/Press Inquiry" && <MediaFields />}


            <FormInputData 
            label={"Subject *"}
            name={"Subject"}
            type={"text"}
            placeholder={"A brief, required title for your message"}
            />

            <FormInputData 
            label={"Message *"}
            name={"message"}
            type={"textarea"}
            rows={8}
            placeholder={"Type your message..."}
            />
            
            <button className="bg-indigo-600 text-white px-8 py-2 mt-12 rounded-2xl font-bold text-lg " type="button">Connect With Our Team</button>
        </form>
        </div>
        </div>

       
      </section>


    </Layout>
  )
}
