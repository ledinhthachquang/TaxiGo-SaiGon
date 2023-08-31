"use client"
import React, { useEffect, useState } from 'react';
import AutoCompleteAds from './AutoCompleteAds';

function Booking() {
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    // Check if window is defined before accessing its properties
    if (typeof window !== 'undefined') {
      setScreenHeight(window.innerHeight *0.72);
    }
  }, []);

  return (
    <div className='p-5'>
      <h2 className='text-[20px] font-semibold'>Booking</h2>
      <div className='border-[1px] p-5 rounded-md' style={{ height: screenHeight }}>
        <AutoCompleteAds />
      </div>
    </div>
  );
}

export default Booking;
