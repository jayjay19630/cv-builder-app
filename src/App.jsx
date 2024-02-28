import { useState } from "react";
import "./App.css";
import PageHeader from "./components/PageHeader/PageHeader";
import CVPage from "./components/CVPage/CVPage";
import EducationSection from "./components/EducationSection/EducationSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import UserInput from "./components/UserInput/UserInput";
import Content from "./components/Content/Content";
import PersonalDetailSection from "./components/PersonalDetailsForm/PersonalDetailSection.jsx";

function App() {
  const [personalData, setPersonalData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const [educationData, setEducationData] = useState({
    school: "",
    location: "",
    major: "",
    education: "",
    startDate: "",
    endDate: "",
  });
  const [experienceData, setExperienceData] = useState({
    occupation: "",
    location: "",
    company: "",
    startDate: "",
    endDate: "",
  });

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
        <CVPage
          personalData={personalData}
          educationData={educationData}
          experienceData={experienceData}
        ></CVPage>
      </Content>
    </>
  );
}

export default App;
