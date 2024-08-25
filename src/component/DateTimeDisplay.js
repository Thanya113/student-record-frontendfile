// DateTimeDisplay.js

import React, { useState, useEffect } from 'react';
import './DateTimeDisplay.css';

const DateTimeDisplay = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = `${dateTime.getDate()}-${dateTime.getMonth() + 1}-${dateTime.getFullYear()} / ${getDayName(
    dateTime.getDay()
  )}`;
  const formattedTime = formatAMPM(dateTime);

  return (
    <div className="date-time-display">
      <div className="date">
      <span role="img" aria-label="calendar">
      📅
    </span>{formattedDate}</div>
      <div className="time">
      <span role="img" aria-label="clock">
      🕒
    </span>{formattedTime}</div>
    </div>
  );
};

const getDayName = (dayIndex) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[dayIndex];
};

const formatAMPM = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  const strTime = `${hours}:${minutes}:${seconds} ${ampm}`;
  return strTime;
};

export default DateTimeDisplay;
