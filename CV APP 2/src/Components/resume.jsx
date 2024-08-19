import ResumeHead from "./Presentation/header.jsx";
import ResumeJobs from "./Presentation/employment.jsx";
import ResumeEducation from "./Presentation/education.jsx";
import ResumeMisc from "./Presentation/miscellanea.jsx";

import {
	aboutState,
	webState,
	employmentState,
	educationState,
	miscellaneaState,
} from "./stateHandler";

export default function Resume() {
	const [about, handleAbout] = aboutState();
	const [web, handleWeb] = webState();
	const [job, handleJob] = employmentState();
	const [education, handleEducation] = educationState();
	const [miscellanea, handleMisc] = miscellaneaState();

	return (
		<div id="resume">
			<ResumeHead
				firstName={about.firstName}
				lastName={about.lastName}
				phoneNumber={about.phoneNumber}
				mail={about.mail}
				address={about.address}
				city={about.city}
				country={about.country}
				positionDesired={about.positionDesired}
				about={about.about}
			></ResumeHead>
			<ResumeJobs></ResumeJobs>
			<ResumeEducation></ResumeEducation>
			<ResumeMisc></ResumeMisc>
		</div>
	);
}
