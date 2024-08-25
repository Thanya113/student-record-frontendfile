import React from 'react';
import './Notice.css';

const Notice = () => {
  const campusNews = [
    'Sports Meet-2023 is going to happen on 20th October',
    'NSS Blood donation camp-Today 4.30 pm @Maharaja Auditorium',
    'SIH Applications are closing tonight',
    'KEC Bagged First Prize in Wildlife Week Competitions - November 2022',
    // Add more campus news items
  ];

  const collegeEvents = [
    'SIH Internal Hackathon was completed last Saturday',
    'Proof of concept in IT dept is going to happen on Monday',
    'Sign In-2023 conducted by IT Department happened yesterday',
    'Enthusia2K23 at KEC: Actor Arjun Das Distributed the Prizes - February 2023',
    // Add more college events
  ];

  const noticeBoard = [
    'BC/MBC Scholarship closes on Saturday',
    'Pragathi Scholarship closes on 19th November',
    'Gate 2024 application closes tonight',
    'Submit Your Ideas for StartUp Mania within Tomorrow',
    // Add more notice board items
  ];

  return (
    <div className="main-container">
        <div className="column">
        <h2>📰 Campus</h2>
        <div className="scroll-container">
          <ul className="scroll-list">
            {campusNews.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        </div>
        
        <div className="column">
        <h2>📅 Events</h2>
        <div className="scroll-container">
         <ul className="scroll-list">
            {collegeEvents.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        </div>

        <div className="column">
          <h2>🔔 Notice Board</h2>
          <div className="scroll-container">
          <ul className="scroll-list">
            {noticeBoard.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        </div>

      </div>
    
  );
};

export default Notice;
