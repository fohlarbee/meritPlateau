import SocialLinks from "./socialLinks";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" bg-col-blk mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10 px-10 py-10 rounded-3xl items-center justify-center text-white">
        <div className="flex flex-col items-center lg:items-start gap-5">
          <Image src="/assets/logo-b.svg" width={100} height={100} alt="footer logo" />
          <p className="text-center lg:text-start">87 JD Gomwalk way, Jos, Plateau state.</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5 py-4">
          <p className="text-xl font-medium">Home</p>
          <p className="text-base">About us</p>
          <p className="text-base">Team</p>
          <p className="text-base">What we do</p>
          <p className="text-base">Contact</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5 py-4">
          <p className="text-xl font-medium">More</p>
          <p className="text-base">Projects</p>
          <p className="text-base">Events</p>
          <p className="text-base">Donate</p>
          <p className="text-base">Blog</p>
        </div>

        <div className="flex flex-col items-center lg:items-start gap-5 py-4">
          <p className="text-xl font-medium">Legal</p>
          <p className="text-base">Terms & Conditions</p>
          <p className="text-base">Privacy policy</p>
        </div>
        
        <div>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Footer;
