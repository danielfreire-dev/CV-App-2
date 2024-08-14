export default function ResumeJobs(props) {
  return (
    <>
      <h3>Work Experience</h3>
      <ul id="jobList"></ul>
      <p>{props.jobCompany}</p>
      <hr></hr>
    </>
  );
}
