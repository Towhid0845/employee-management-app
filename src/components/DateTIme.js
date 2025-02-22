import React, { useState, useEffect } from "react";

function DateTime() {
  const [currentTime, setCurrentTime] = useState(getFormattedTime());
  const [currentDate, setCurrentDate] = useState(getFormattedDate());

  function getFormattedTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 0 to 12
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return `${hours}:${minutes}:${seconds} ${ampm}`;
  }

  function getFormattedDate() {
    const now = new Date();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let day = now.getDate();
    let month = monthNames[now.getMonth()];
    let year = now.getFullYear();
    return `${day} ${month}, ${year}`;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getFormattedTime());
      setCurrentDate(getFormattedDate());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, []);

  return (
    <div id="currentDateTime">
      {currentTime} - {currentDate}
    </div>
  );
}

export default DateTime;
