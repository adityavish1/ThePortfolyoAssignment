import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import { useContext } from 'react';
import { DataContext } from '../dataprovider/Dataprovider';
import Title from '../layouts/Title';

function Services() {
  const { data } = useContext(DataContext);
  const initialShowCount = 3; // Initial number of services to show
  const [showCount, setShowCount] = useState(initialShowCount);

  if (!data || !data.services) return <p>Loading data...</p>;

  const viewMore = () => {
    setShowCount(data.services.length); // Show all services
  };

  return (
    <section id="services" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY SERVICES AND KEEP YOUR FEEDBACK" des="My Services" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-6 lgl:gap-14 my-10">
        {data.services.slice(0, showCount).map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      {showCount < data.services.length && (
        <div className="flex justify-center">
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={viewMore}
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
}

export default Services;
