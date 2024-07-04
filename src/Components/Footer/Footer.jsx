import { FaFacebook, FaInstagramSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import logoF from "../../assets/Media/logo light.png";
const Footer = () => {
  return (
    <div className="bg-black h-[442px]">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex items-center justify-around gap-3">
          <div className="flex flex-col text-white">
            <img src={logoF} className="w-[124.82px] h-{33px} mt-32" alt="" />
            <p className="py-4 text-white mt-6">
              123 Main Street Anytown, USA <br /> Postal Code: 12345
            </p>
            <p className="mt-7">
              Support: support@oyolloo.com <br /> (Available : 10:00am to
              07:00pm)
            </p>
          </div>
          <div className="flex flex-col gap-5 text-white list-none mt-40">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Success Page</a>
            </li>
            <li>
              <a href="">Terms and condition</a>
            </li>
          </div>
          <div className="flex flex-col gap-5 text-white list-none mt-40">
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Scheduling</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Patient Portal</a>
            </li>
          </div>
          <div className="">
            <p className="text-white mt-20">Follow Us</p>
            <div className="flex items-center gap-3 text-white mt-3">
              <FaFacebook className="text-xl"/>
              <FaInstagramSquare className="text-xl"/>
              <FaLinkedin className="text-xl"/>
              <FaYoutube className="text-xl" />
            </div>
            <p className="text-white text-xl mt-7">@docplus 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
