"use client";
import React, { useState, useEffect } from 'react';

const Timer = ({ initialSeconds = 60 }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const resetTimer = () => setSeconds(initialSeconds);

  return (
    <div className=' flex flex-row  justify-center items-center font-iransansNumber  font-ultraLigh  text-xs '>
      <h4 className=' flex flex-row'> {remainingSeconds} :  {minutes}  </h4>
      
    </div>
  );
};

export default Timer;
