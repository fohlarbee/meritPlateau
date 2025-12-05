
import Heading from '../components/Heading'
import Layout from '../components/Layout'
import FormInputData from '../components/FormInputData'

export default function Contact() {
  return (
    <Layout className='my-4 '>
        <article className='bg-purp-dark text-white px-20 py-16'>

          <Heading headingText={"contact us"}/>

          <h1>Your Vision. Our Mission. Let's Connect.</h1>

          <p>Whether you're a passionate individual with an inquiry, an organization seeking meaningful collaboration, or a potential partner looking to connect your resources with our mission, this is your starting point. <br /><br />

          We believe the greatest impact comes from working together. Every message we receive opens the door to a new possibility—a new way to empower our community and amplify our reach.<br /><br />

          Tell us a little about what you have in mind. We are eager to hear your ideas, discuss how our missions align, and explore the powerful connections we can build together.</p>


        </article>

      <section className=" container grid grid-cols-8 my-20 ">

        <div className="bg-[url('/assets/bg-circles.png')] md:col-start-1 md:col-end-3 col-span-5 bg-cover "></div>

        <div className="">
        <form className=" md:col-start-2 md:col-end-8 col-span-8 ">
            
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
            placeholder={"Highly recommended. Use 'N/A' if personal"}
            />

            <FormInputData 
            label={"Phone Number (Optional)"}
            name={"Phone number"}
            type={"phone"}
            placeholder={"Your phone number"}
            />



            <FormInputData 
            label={"How can we help you? *"}
            name={"message"}
            type={"text"}
            placeholder={"-- Select Purpose --"}
            
            />


            <FormInputData 
            label={"Subject *"}
            name={"Subject"}
            type={"text"}
            placeholder={"A brief, required title for your message"}
            />

            <FormInputData 
            label={"Message *"}
            name={"message"}
            type={"text"}
            placeholder={"Type your message..."}
            />

            <button>Connect With Our Team</button>

        </form>
        </div>
      </section>


    </Layout>
  )
}
