import { FaStar } from "react-icons/fa";

const BannerCard = () => {
  const images = [
    "https://i.ibb.co/230DR5m/Ellipse-3.png",
    "https://i.ibb.co/Vjy3c5C/Ellipse-2.png",
    "https://i.ibb.co/Jj6qCw5/Ellipse-5.png",
    "https://i.ibb.co/S3B3Ykb/Ellipse-4.png",
  ];
  return (
    <div>
      <div className="mt-10">
        <div className="relative">
          <header className="text-center mb-6 absolute left-60 mx-auto w-6/12">
            <h1 className="text-4xl font-bold">
              Comprehensive Care <br /> for Every Patient
            </h1>
          </header>

          <div className="absolute bottom-0 left-60">
            <div className="">
              <div className="flex items-center gap-2 justify-around">
                <div className="bg-white rounded-2xl shadow-md p-5  flex flex-col items-end h-[170px] w-[180px]">
                  <div className="text-start">
                    <div className="text-xl font-bold">500+</div>
                    <p className="text-gray-600">Board-certified doctors</p>
                  </div>
                  <img
                    src="https://i.ibb.co/dP34dZF/contract-1-1.png"
                    alt=""
                    className="w-[54.44px] h-[54.44px]"
                  />
                </div>
                <div className="bg-white shadow-md rounded-lg overflow-hidden h-[140px] w-[160px] mt-8">
                  <div className="px-4 py-2 border-gray-200">
                    <div className="flex items-center justify-center gap-3 mr-12">
                      <h2 className="text-xl text-start font-bold text-gray-800">4.8</h2>
                      <FaStar className="text-rose-300" />
                    </div>
                    <p className="text-sm text-gray-500 ml-2">
                      Over 20,000 Patients
                    </p>
                  </div>
                  <div className="grid grid-cols-4 px-4 mr-14">
                    {images.map((image) => (
                      <img
                        src={image}
                        alt="..."
                        key={image}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-5  flex flex-col items-end h-[170px] w-[180px]">
                  <div className="text-start">
                    <div className="text-xl font-bold">$5000</div>
                    <p className="text-gray-600">
                      Money spend for poor patient
                    </p>
                  </div>
                  <img
                    src="https://i.ibb.co/mqvYjxq/Group.png"
                    alt=""
                    className="w-[54.44px] h-[54.44px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="bg-white rounded-2xl shadow-lg p-6 -mr-10 flex flex-col items-center h-[312px] w-[216px]">
              <div className="text-start">
                <div className="text-4xl font-bold">90%</div>
                <p className="text-gray-600 mt-2">
                  Patient satisfaction rate, reflecting our commitment.
                </p>
              </div>
              <img
                src="https://i.ibb.co/BwP0LyY/Group-12.png"
                alt=""
                className="w-[130.36px] h-[130.5px]   mt-6 mb-2"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 -mr-2 flex flex-col items-center h-[300px] w-[216px]">
              <div className="text-start">
                <div className="text-4xl font-bold">500+</div>
                <p className="text-gray-600 mt-2">
                  Free lession video for patient
                </p>
              </div>
              <img
                src="https://i.ibb.co/RD2Fxwc/Group-1.png"
                alt=""
                className="w-[130.36px] h-[130.5px]   mt-7"
              />
            </div>
          </div>
        </div>

        {/* <div className="flex flex-wrap justify-around">
          <StatisticCard
            title="4.8"
            description="Over 20,000 Patient"
            image="https://i.ibb.co/dP34dZF/contract-1-1.png"
          />
          <StatisticCard
            title="$5000"
            description="Money spent for poor patient"
            image="https://i.ibb.co/mqvYjxq/Group.png"
          />
          <StatisticCard
            title="50+"
            description="Free lesson video for patient"
            image="https://i.ibb.co/BwP0LyY/Group-12.png"
          />
        </div> */}
      </div>
    </div>
  );
};

export default BannerCard;
