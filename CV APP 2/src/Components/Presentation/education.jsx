export default function ResumeEducation(props) {
  return (
    <>
      <h3>Education</h3>
      <ul id="eduList">
        {/* {props.map((edu) => (
          <li key={edu.id}>
            <div className="card">
              <h4 className="cardTitle">{edu.course}</h4>
              <p className="cardDate">{edu.start + " - " + edu.finish}</p>
              <h5 className="cardSubTitle">{edu.institution}</h5>
              <p className="cardDescription">{edu.about}</p>
            </div>
          </li>
        ))} */}
      </ul>
      <hr></hr>
    </>
  );
}
