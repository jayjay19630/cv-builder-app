
export const EducationList = (props) => { 
    return (
        <div className="education-list">
            {props.educationData.map(education => <EducationEdit education={education}></EducationEdit>)}
        </div>
    )
}