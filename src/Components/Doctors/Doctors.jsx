
const Doctors = () => {
  return (
    <div>
      <div className="bg-blue-900 text-white min-h-screen flex items-center justify-center">
        <div className="max-w-md p-8 bg-blue-700 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get Your First Appointment at 50% Off!
          </h2>
          <div className="flex justify-center space-x-4">
            <button className="bg-yellow-500 text-blue-900 font-bold py-2 px-4 rounded hover:bg-yellow-600">
              Appointment
            </button>
            <button className="bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold py-2 px-4 rounded hover:bg-yellow-600 hover:text-blue-900">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
