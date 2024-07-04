import bannerImg from "../../assets/Media/Rectangle 24.png";
function InfoSection() {
  return (
    <div className="bg-white border border-yellow-400 rounded-lg shadow-md p-6 m-4 flex flex-col md:flex-row items-center md:items-start">
      <div className="md:w-1/2 p-4">
        <div className="text-left mb-4">
          <span className="bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold">Who we are</span>
        </div>
        <h2 className="text-3xl font-bold mb-4">We Help To Get Solutions</h2>
        <p className="text-gray-600 mb-4">
          We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
        </p>
        <button className="bg-yellow-400 text-white px-4 py-2 rounded-full font-semibold">Learn more</button>
      </div>
      <div className="md:w-1/2 p-4 flex items-center justify-center">
        <div className="relative">
          <img src={bannerImg} alt="Healthcare" className="rounded-lg" />
          <div className="absolute bottom-4 left-4 bg-indigo-600 text-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Our mission is simple</h3>
            <p className="text-sm">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
