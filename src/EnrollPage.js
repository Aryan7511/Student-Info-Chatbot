import React from 'react';
import './EnrollPage.css';

const EnrollPage = ({showhandle}) => {

  const handleEnrollClick = () => {
       showhandle(false);
  };

  return (
    <div className='enroll'>
      <h1 className='enrollhead'>Enter into Student Info System</h1>
      <button className='enrollbutton' onClick={handleEnrollClick}>Enroll Now!</button>
    </div>
  );
};

export default EnrollPage;
