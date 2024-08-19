import { aboutState } from "../stateHandler";


export default function ResumeHead(props) {
  const [about, handleAbout] = aboutState();

  return (
    <>
      <h1>{about.firstName + " " + about.lastName}</h1>
      <h2>{about.positionDesired}</h2>
      <p>
        {about.mail +
          " ❖ " +
          about.phoneNumber +
          " ❖ " +
          about.city +
          ", " +
          about.country}
      </p>
      <hr></hr>
      <h3>Summary</h3>
      <p>{about.about}</p>
      <hr></hr>
    </>
  );
}
