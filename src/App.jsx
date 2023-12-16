import { useState } from 'react';
import './App.css';
import PersonalDetailsForm from './components/PersonalDetailsForm/PersonalDetailsForm.jsx';
import PageHeader from './components/PageHeader/PageHeader';

function App() {
  return (
    <>
      <PageHeader></PageHeader>
      <div className='content'>
        <PersonalDetailsForm></PersonalDetailsForm>
        <div className='cv-view'>
        </div> 
      </div>
      
      
    </>
  );
}

export default App;
