import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  age: '',
  showConfirmation: false
};

const studentInfoSlice = createSlice({
  name: 'studentInfo',
  initialState: initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setShowConfirmation: (state,action)=>{
       state.showConfirmation=true;
    }
  },
});

export const studentActions = studentInfoSlice.actions;

export default studentInfoSlice.reducer;
