import "./CVPage.css";

const CVPage = (props) => {
  const experienceData = props.experienceData;
  const educationData = props.educationData;
  const personalData = props.personalData;

  const dot = personalData.email && personalData.phoneNumber ? "•" : "";

  return (
    <div className="CVPage">
      <div className="CV-content">
        <div className="personal-data">
          <div className="name">{personalData.fullName}</div>
          <div className="email-and-number">
            <div>{personalData.email + dot}</div>
            <div>{personalData.phoneNumber}</div>
          </div>
          <div className="address">{personalData?.address}</div>
        </div>
        <div className="divider"></div>
        <div className="education-data">
          <div>Educational Background</div>
          <div className="school">{educationData?.school}</div>
          <div className="major">
            {educationData.major ? `Majored in ${educationData.major}` : ""}
          </div>
          <div className="secondary">
            <div>{educationData?.location}</div>
            <div>{educationData?.startDate + educationData?.endDate}</div>
          </div>
        </div>
        <div className="experience-data">
          <div>Work Experience</div>
        </div>
      </div>
    </div>
  );
};

export default CVPage;
