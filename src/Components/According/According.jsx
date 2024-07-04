import { useState } from 'react';
import { GoChevronDown } from 'react-icons/go';

const According = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      {items.map((item, index) => (
        <div key={index} className="border rounded-md bg-white mb-2">
          <button
            className="w-full text-left font-bold p-4 rounded-md hover:bg-gray-200 focus:outline-none"
            onClick={() => handleToggle(index)}
          >
            <div className="flex justify-between items-center">
              <span>{item.title}</span>
              <span>{openIndex === index ? '' : <GoChevronDown className='text-2xl font-extrabold'/>}</span>
            </div>
          </button>
          {openIndex === index && (
            <div className="p-4 bg-white">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default According;
