import { HiArrowUpRight } from "react-icons/hi2";
import imageTest from "../../assets/Media/Test.png";

const Service = () => {
  return (
    <div className="bg-white mt-5 p-6 m-4 flex flex-col gap-14 md:flex-row items-center md:items-start">
      <div className="md:w-1/2 p-4 -ml-16">
        <div className="text-left mb-4">
          <span className="px-3 py-1 rounded-full text-sm font-bold border-black border-2">
            Service
          </span>
        </div>
        <h2 className="text-3xl font-bold mb-4 py-1">We Help To Get </h2>
        <h2 className="text-3xl font-bold">Solutions</h2>
        <p className="text-gray-600 mb-4 pb-2 pt-3">
          We are proud to be a trusted healthcare provider in our community, and
          we look forward to serving you and your family with excellence,
          integrity, and compassion. Your health is our priority, and we are
          here for you every step of the way. We believe in treating each
          
        </p>
        <div className="flex justify-start items-start gap-1">
          <button className="bg-yellow-400 flex gap-1 px-6 py-3 rounded-2xl font-semibold">
            Appointment
            <HiArrowUpRight className="mt-1 text-xl font-bold" />
          </button>
        </div>
      </div>
      <div className="md:w-1/2 p-4 flex items-center justify-end ">
        <div className="relative">
          <img src={imageTest} alt="Healthcare" className="rounded-lg ml-20" />
          <div className="absolute bottom-4 right-14 bg-indigo-600 opacity-90 p-4 text-white h-[130px] w-[282px] rounded-xl shadow-lg">
            <h3 className="text-xl font-bold ml-2">
              Our mission is simple
            </h3>
            <p className="text-sm pt-1 ml-2">
              To provide high-quality healthcare services that are accessible,
              personalized, and patient-centered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
