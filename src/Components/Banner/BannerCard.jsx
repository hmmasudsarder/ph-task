import StatisticCard from "./StatisticCard";

const BannerCard = () => {
  return (
    <div>
      <div className="mt-5">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">
            Comprehensive Care for Every Patient
          </h1>
        </header>

        <div className="">
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
            <div className="bg-white rounded-2xl shadow-lg p-6  flex flex-col items-center h-[300px] w-[216px]">
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

        <div className="flex flex-wrap justify-around">
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
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
