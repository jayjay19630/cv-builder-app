import { useState } from "react";
import "./App.css";
import PersonalDetailsForm from "./components/PersonalDetailsForm/PersonalDetailsForm/PersonalDetailsForm.jsx";
import PageHeader from "./components/PageHeader/PageHeader";
import CVPage from "./components/CVPage/CVPage";
import EducationSection from "./components/EducationSection/EducationSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import UserInput from "./components/UserInput/UserInput";
import Content from "./components/Content/Content";
import PersonalDetailSection from "./components/PersonalDetailsForm/PersonalDetailSection.jsx";

function App() {
  const [personalData, setPersonalData] = useState(null);
  const [educationData, setEducationData] = useState(null);
  const [experienceData, setExperienceData] = useState(null);

  return (
    <>
      <PageHeader></PageHeader>
      <Content>
        <UserInput>
          <PersonalDetailSection
            personalData={personalData}
            setPersonalData={setPersonalData}
          ></PersonalDetailSection>
          <EducationSection
            educationData={educationData}
            setEducationData={setEducationData}
          ></EducationSection>
          <ExperienceSection
            experienceData={experienceData}
            setExperienceData={setExperienceData}
          ></ExperienceSection>
        </UserInput>
        <CVPage></CVPage>
      </Content>
    </>
  );
}

export default App;
