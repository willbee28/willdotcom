import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="sticky bottom-0 w-full p-4 bg-[#283618] text-[#FEFAE0]">
      <div className="flex flex-col items-center mx-auto gap-5">
        <div className="text-xl hidden sm:flex">Contact</div>
        <ul className="flex gap-2">
          <li className="hover:text-[#DDA15E]">
            <a href="https://www.instagram.com/willbee" target="_blank">
              <CiInstagram size={25} />
            </a>
          </li>
          <li className="hover:text-[#DDA15E]">
            <a href="https://www.facebook.com/will.borwegen/" target="_blank">
              <CiFacebook size={25} />
            </a>
          </li>
          <li className="hover:text-[#DDA15E]">
            <a
              href="https://www.linkedin.com/in/https://www.linkedin.com/in/will-borwegen-34b841b7/"
              target="_blank"
            >
              <CiLinkedin size={25} />
            </a>
          </li>
          <li className="mt-0.5 mx-0.5 hover:text-[#DDA15E]">
            <a href="https://github.com/willbee28" target="_blank">
              <FaGithub size={20} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;