import { FaXTwitter, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa6";
import Link from "next/link";

export default function SocialLinks() {
  return (
<section className="flex gap-5 py-4 cursor-pointer">
        <Link href="https://m.facebook.com/p/Merit-Plateau-61559227762762/?wtsid=rdr_0j1diSuD65ML0vU87&hr=1" target="_blank">
                <FaFacebookF className="text-2xl text-white"/>
        </Link>

        <Link href="https://x.com/Merit_Plateau" target="_blank">
                <FaXTwitter className="text-2xl text-white"/>
        </Link>

        <Link href="https://www.instagram.com/Merit_plateau/" target="_blank">
                <FaInstagram className="text-2xl text-white"/>
        </Link>

        <Link href="https://www.linkedin.com/in/merit-plateau-877460344" target="_blank">
                <FaLinkedinIn className="text-2xl text-white"/>
        </Link>
        
        
        
</section>
  )
}
