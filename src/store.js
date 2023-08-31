import { configureStore } from '@reduxjs/toolkit';
import studentInfoReducer from './studentInfoSlice';

const store = configureStore({
  reducer: {
    studentInfo: studentInfoReducer,
  },
});

export default store;
