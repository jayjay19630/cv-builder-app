import { useState } from 'react';
import './App.css';
import PersonalDetailsForm from './components/PersonalDetailsForm/PersonalDetailsForm.jsx';
import PageHeader from './components/PageHeader/PageHeader';
import CVPage from './components/CVPage/CVPage';
import EducationSection from './components/EducationSection/EducationSection';
import ExperienceSection from './components/ExperienceSection/ExperienceSection';
import UserInput from './components/UserInput/UserInput';
import Content from './components/Content/Content';

function App() {
  return (
    <>
      <PageHeader></PageHeader>
      <Content>
        <UserInput>
          <PersonalDetailsForm></PersonalDetailsForm>
          <EducationSection></EducationSection>
          <ExperienceSection></ExperienceSection>
        </UserInput>
        <CVPage></CVPage>
      </Content>
    </>
  );
}

export default App;
