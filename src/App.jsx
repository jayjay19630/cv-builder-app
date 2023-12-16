import { useState } from 'react';
import './App.css';
import PersonalDetailsForm from './components/PersonalDetailsForm/PersonalDetailsForm.jsx';
import PageHeader from './components/PageHeader/PageHeader';
import CVPage from './components/CVPage/CVPage';

function App() {
  return (
    <>
      <PageHeader></PageHeader>
      <div className='content'>
        <div className='user-input'>
          <PersonalDetailsForm></PersonalDetailsForm>
        </div>
        <CVPage></CVPage>
      </div>
    </>
  );
}

export default App;
