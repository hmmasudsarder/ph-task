const StatisticCard = ({  title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4 flex flex-col items-center w-60">
    <div className="text-center">
      <div className="text-2xl font-bold">{title}</div>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
    {image && <img src={image} alt="" className="w-16 h-16 mb-4"/>}
  </div>
  );
};

export default StatisticCard;
