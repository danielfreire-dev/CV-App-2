import { useState } from "react";

export function aboutState(e) {
	/* console.log("aboutState is running"); */

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
		onChangeFunction: (e) => {
			handleAbout(e);
		},
	};

	const [about, setAbout] = useState(defaultAbout);

	/* console.log(about); */
	function handleAbout(e) {
		e.preventDefault();
		console.log("handleAbout is running");
		setAbout({
			...about,
			[e.target.name]: e.target.value,
		});
		console.log(about);
		console.log(setAbout);
		console.log(defaultAbout);
	}
	/* console.log(about); */

	return [about, handleAbout];
}

export function webState() {
	const defaultWeb = {
		linkedin: "linkedin.com/in/johndoe",
		github: "github.com/johndoe",
		personal: "www.example.com",
	};

	const [web, setWeb] = useState(defaultWeb);

	const handleWeb = (e) => {
		setWeb({
			...web,
			[e.target.name]: e.target.value,
		});
	};

	return [web, handleWeb];
}

export function employmentState() {
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

	/* const listJobs = job.map((jobSingle) => {
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
  }); */

	const handleJob = (e) => {};

	return [job, handleJob], defaultJob;
}

export function educationState() {
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

	/* const listEducation = education.map((educationSingle) => {

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
  }); */
	function handleEducation() {}
	return [education, handleEducation], defaultEducation;
}

export function miscellaneaState() {
	const defaultMisc = {
		skills: { id: 0, name: "React" },
		certificate: { id: 0, name: "Birth Certificate" },
	};

	const [miscellanea, setMiscellanea] = useState(defaultMisc);

	function handleMisc() {}

	return [miscellanea, setMiscellanea];
}
