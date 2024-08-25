// LogoutButton.js
import React from 'react';

const LogoutButton = () => {
  const handleLogout = () => {
    // Perform logout logic here
    // For example, clearing user session, token, etc.

    // Redirect to a specific page
    window.location.href = '/Student'; // Replace with the desired URL
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: '#8234cc', // Slightly darker lavender color
        color: 'white', // Text color
        padding: '8px 16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="white"
        style={{ marginRight: '8px' }}
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M14 1v2h4v18h-4v2h6V1zm-1 2H4v18h6v-2H6V5h7zm1 0v14h2V5h-2z" />
      </svg>
      Logout
    </button>
  );
};

export default LogoutButton;
