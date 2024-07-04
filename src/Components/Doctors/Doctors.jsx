import { GoArrowUpRight } from "react-icons/go";
import doctorsI from "../../assets/Media/Rectangle 32.png";
const Doctors = () => {
  return (
    <div className="relative">
      <img
        src={doctorsI}
        className="my-7 rounded-2xl w-[1160px] h-[477px]"
        alt=""
      />
      <div className="absolute flex items-center rounded-2xl h-full w-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(2, 0, 67, 0.3)]">
        <div className="text-white space-y-7 ml-16 w-2/3">
          <p className="text-4xl font-bold">
            Get Your <p className="text-4xl font-bold py-2">First Appointment</p> <p className="text-4xl font-bold"> at 50% Off!</p>
          </p>
          <div className="flex items-center gap-4">
            <a href="" className="flex items-center justify-center gap-1 font-semi px-4 bold border-2 p-2 rounded-xl bg-orange-400 text-black hover:bg-black hover:text-white">
            Appointment <GoArrowUpRight className="font-bold text-xl" />
            </a>
            <a href="" className="flex items-center justify-center gap-1 font-semi px-4 bold border-2 p-2 rounded-xl  text-white hover:bg-orange-400 hover:text-black">
            Learn More <GoArrowUpRight className="font-bold text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
