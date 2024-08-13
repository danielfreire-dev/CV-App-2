export default function Resume() {
  <div id="resume">
    <h1>{data.firstName + " " + data.lastName}</h1>
    <h2>{data.positionDesired}</h2>
    <p>
      {data.mail +
        " ❖ " +
        data.phoneNumber +
        " ❖ " +
        data.city +
        ", " +
        data.country}
    </p>
    <hr></hr>
    <h3>Summary</h3>
    <p>{data.about}</p>
    <hr></hr>
    <h3>Work Experience</h3>
    <ul id="jobList"></ul>
    <p>{data.jobCompany}</p>
    <hr></hr>
    <h3>Education</h3>
    <ul id="eduList">
      {defaultEducation.map((edu) => (
        <li key={edu.id}>
          <div className="card">
            <h4 className="cardTitle">{edu.course}</h4>
            <p className="cardDate">{edu.start + " - " + edu.finish}</p>
            <h5 className="cardSubTitle">{edu.institution}</h5>
            <p className="cardDescription">{edu.about}</p>
          </div>
        </li>
      ))}
    </ul>
    <hr></hr>
    <h3>Skills</h3>
    <hr></hr>
    <h3>Certificate</h3>
  </div>;
}
