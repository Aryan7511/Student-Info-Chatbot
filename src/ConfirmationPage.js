import React from 'react';
import { useSelector } from 'react-redux';
import './ConfirmationPage.css';

const ConfirmationPage = () => {
  const { name, age } = useSelector((state) => state.studentInfo);

  return (
      <div className="confirmation">
        <h1 className='head'>Your name {name} and age {age} has been added to the student system.</h1>
        <p className='des'>You may now exit.</p>
      </div>
  );
};

export default ConfirmationPage;
