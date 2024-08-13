import { useState } from "react";

import AboutYou from "./Form/aboutYou";
import Web from "./Form/web";
import Jobs from "./Form/job";
import Education from "./Form/education";
import Miscellanea from "./Form/miscellanea";
import { handleData, handleJob } from "./Form/handleInfo";
import { About } from "./data";

export default function Form() {
  /* const { data, setData } = dataState();
  const { job, setJob } = jobState();
  const { education, setEducation } = educationState(); */
  const defaultAbout = {
    firstName: "John",
    lastName: "Doe",
    positionDesired: "Front End Developer",
    phoneNumber: "(+0) 123 456 789",
    mail: "john.doe@example.com",
    address: "Street Address",
    city: "Town",
    country: "Country",
    about: "John Rulezzz!",
    handleData: () => {},
  };
  const [about, setAbout] = useState(defaultAbout);

  const defaultWeb = {
    linkedin: "linkedin.com/in/johndoe",
    github: "github.com/johndoe",
    personal: "www.example.com",
  };
  const [web, setWeb] = useState(defaultWeb);

  const defaultJob = [
    {
      id: 0,
      position: "Awesome Job",
      company: "Best Company",
      start: "2020-01",
      finish: "2024-01",
      about: "Job Description",
      box: false,
      handleJob: () => {},
    },
  ];
  const [job, setJob] = useState(defaultJob);
  const listJobs = job.map((jobSingle) => {
    return (
      <form key={jobSingle.id}>
        <fieldset>
          <legend>Employment: </legend>
          <table>
            <tbody>
              <tr className="box">
                <td className="input">
                  <label>Job Position: </label>
                  <input
                    type="text"
                    name="jobPosition"
                    placeholder={jobSingle.position}
                    onChange={jobSingle.handleJob}
                  />
                </td>
                <td className="input">
                  <label>Company: </label>
                  <input
                    type="text"
                    name="jobCompany"
                    placeholder={jobSingle.company}
                    onChange={jobSingle.handleJob}
                  />
                </td>
              </tr>
              <tr className="box">
                <td className="input">
                  <label>Start Date: </label>
                  <input
                    type="month"
                    name="jobStart"
                    value={jobSingle.start}
                    placeholder={jobSingle.start}
                    onChange={jobSingle.handleJob}
                  />
                </td>
                <td className="input">
                  <label>Finish Date: </label>
                  <input
                    type="month"
                    name="jobFinish"
                    value={jobSingle.finish}
                    placeholder={jobSingle.finish}
                    onChange={jobSingle.handleJob}
                  />
                </td>
              </tr>
              <tr className="box">
                <td className="input">
                  <label>Job Description: </label>
                  <input
                    type="text"
                    name="jobAbout"
                    placeholder={jobSingle.about}
                    onChange={jobSingle.handleJob}
                  />
                </td>
                <td className="input">
                  <label>Current: </label>
                  <input
                    type="checkbox"
                    name="jobBox"
                    placeholder={jobSingle.box}
                    onChange={jobSingle.handleJob}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button name="jobButton" type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    );
  });

  const defaultEducation = [
    {
      id: 0,
      institution: "Institution Name",
      course: "Name of course",
      start: "2020-01",
      finish: "2024-01",
      about: "course Description",
      box: false,
    },
  ];
  const [education, setEducation] = useState(defaultEducation);
  const listEducation = education.map((educationSingle) => {
    return (
      <form>
        <fieldset>
          <legend>Education: </legend>
          <table>
            <tbody>
              <tr className="box">
                <td className="input">
                  <label>Institution: </label>
                  <input
                    type="text"
                    name="eduInstitution"
                    placeholder={education.eduInstitution}
                    onChange={education.handleEducation}
                  />
                </td>
                <td className="input">
                  <label>Start Date: </label>
                  <input
                    type="month"
                    name="eduStart"
                    value={education.eduStart}
                    placeholder={education.eduStart}
                    onChange={education.handleEducation}
                  />
                </td>
              </tr>
              <tr className="box">
                <td className="input">
                  <label>Course: </label>
                  <input
                    type="text"
                    name="eduInstitution"
                    placeholder={education.eduCourse}
                    onChange={education.handleEducation}
                  />
                </td>
                <td className="input">
                  <label>Finish Date: </label>

                  <input
                    type="month"
                    name="eduFinish"
                    value={education.eduFinish}
                    placeholder={education.eduFinish}
                    onChange={education.handleEducation}
                  />
                </td>
              </tr>
              <tr className="box">
                <td className="input">
                  <label>Description: </label>
                  <input
                    type="text"
                    name="eduAbout"
                    placeholder={education.eduAbout}
                    onChange={education.handleEducation}
                  />
                </td>
                <td className="input">
                  <label>Current: </label>
                  <input
                    type="checkbox"
                    name="eduBox"
                    value={education.eduBox}
                    onChange={education.handleEducation}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button name="educationButton" type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    );
  });

  const skills = ["React"];
  const certificates = ["birth Certificate"];

  return (
    <>
      <AboutYou
        firstName={about.firstName}
        lastName={about.lastName}
        phoneNumber={about.phoneNumber}
        mail={about.mail}
        address={about.address}
        city={about.city}
        country={about.country}
        positionDesired={about.positionDesired}
        about={about.about}
      ></AboutYou>
      <Web
        linkedin={web.linkedin}
        github={web.github}
        personal={web.personal}
      ></Web>

      <Jobs
        position={defaultJob[0].position}
        company={defaultJob[0].company}
        start={defaultJob[0].start}
        finish={defaultJob[0].finish}
        description={defaultJob[0].description}
        about={defaultJob[0].about}
        box={defaultJob[0].box}
      ></Jobs>
      <Education
        institution={defaultEducation[0].institution}
        course={defaultEducation[0].course}
        start={defaultEducation[0].start}
        finish={defaultEducation[0].finish}
        about={defaultEducation[0].about}
      ></Education>
      <Miscellanea
        skill={skills[0]}
        certificates={certificates[0]}
      ></Miscellanea>
    </>
  );
}
