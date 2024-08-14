export default function ResumeHead(props) {
  return (
    <>
      <h1>{props.firstName + " " + props.lastName}</h1>
      <h2>{props.positionDesired}</h2>
      <p>
        {props.mail +
          " ❖ " +
          props.phoneNumber +
          " ❖ " +
          props.city +
          ", " +
          props.country}
      </p>
      <hr></hr>
      <h3>Summary</h3>
      <p>{props.about}</p>
      <hr></hr>
    </>
  );
}
