import image1 from "../../assets/Media/Rectangle 27-1.png";
import image2 from "../../assets/Media/Rectangle 27.png";
const ServiceCard = () => {
  return (
    <div className="flex items-center justify-between gap-5">
      <div className="w-[524px] h-[394px] flex items-center justify-end ">
        <div className="relative">
          <img src={image1} alt="Healthcare" className="rounded-lg" />
          <div className="absolute bottom-4 left-5 bg-indigo-600 opacity-80 p-4 text-white h-[130px] w-[282px] rounded-xl shadow-lg">
            <h3 className="text-xl font-bold ml-2">Our mission is simple</h3>
            <p className="text-sm pt-1 ml-2">
              To provide high-quality healthcare services that are accessible,
              personalized, and patient-centered.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[524px] h-[394px] flex items-center justify-end ">
        <div className="relative">
          <img src={image2} alt="Healthcare" className="rounded-lg" />
          <div className="absolute bottom-4 left-5 bg-indigo-600 opacity-80 p-4 text-white h-[130px] w-[282px] rounded-xl shadow-lg">
            <h3 className="text-xl font-bold ml-2">Our mission is simple</h3>
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

export default ServiceCard;
