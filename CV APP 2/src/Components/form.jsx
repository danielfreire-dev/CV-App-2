import { useState } from "react";

import AboutYou from "./Form/aboutYou";
import Web from "./Form/web";
import Jobs from "./Form/job";
import Education from "./Form/education";
import Miscellanea from "./Form/miscellanea";

import {
  aboutState,
  webState,
  employmentState,
  educationState,
  miscellaneaState,
} from "./stateHandler";

import "/src/Styles/style.css";

export default function Form() {
  const [about, handleAbout] = aboutState();
  const [web, handleWeb] = webState();
  const [job, handleJob] = employmentState();
  const [education, handleEducation] = educationState();
  const [miscellanea, handleMisc] = miscellaneaState();

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
        onChange={((e) =>handleAbout(e))}
      ></AboutYou>
      <Web
        linkedin={web.linkedin}
        github={web.github}
        personal={web.personal}
      ></Web>

      <Jobs
        position={job.position}
        company={job.company}
        start={job.start}
        finish={job.finish}
        description={job.description}
        about={job.about}
        box={job.box}
      ></Jobs>
      <Education
        institution={education.institution}
        course={education.course}
        start={education.start}
        finish={education.finish}
        about={education.about}
      ></Education>
      <Miscellanea
        skill={miscellanea.skills.name}
        certificates={miscellanea.certificate.name}
      ></Miscellanea>
    </>
  );
}
