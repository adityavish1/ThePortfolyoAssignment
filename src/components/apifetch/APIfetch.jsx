// APIfetch.js
import React, { useContext } from 'react';
import { DataContext } from '../dataprovider/Dataprovider';
// import Hero from '../hero/Hero';
// import About from '../about/About';

function APIfetch() {
  const { data, loading, error } = useContext(DataContext);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error fetching data.</p>;
  if (!data) return <p>No data found.</p>;

  return (
    <>
     
     
    </>
  );
}

export default APIfetch;
