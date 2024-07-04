import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "../ui/MagicButton";
import {PlaceholdersAndVanishInputDemo} from "@/components/com/feedback"
const Footer = () => {
  return (
    <footer  className="w-full mb-[100px] pb-10" id="contact">
    

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
         <span className="text-purple">Your Thoughts Matter!</span> 
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
        If you've made it this far, I'd love to hear from you! 🌟 Leave me an anonymous message below—your feedback, thoughts, or just a friendly hello. I can't wait to read what you have to share! ❤️
        </p>
 <PlaceholdersAndVanishInputDemo></PlaceholdersAndVanishInputDemo>
       
          
        
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Akash pawar
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            ><a href={info.link}>
              <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;