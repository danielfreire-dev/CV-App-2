export default function Web(props, handleData) {
  const defaultData = {
    firstName: "John",
    lastName: "Doe",
    positionDesired: "Front End Developer",
    phoneNumber: "(+0) 123 456 789",
    mail: "john.doe@example.com",
    address: "Street Address",
    city: "Town",
    country: "Country",
    about: "John Rulezzz!",
    linkedin: "linkedin.com/in/johndoe",
    github: "github.com/johndoe",
    personal: "www.example.com",
    skill: "React",
    certificates: "Driver's License",
  };
  return (
    <form>
      <fieldset>
        <legend>Web: </legend>
        <table>
          <tbody>
            <tr className="box">
              <td className="input">
                <label>LinkedIn: </label>
                <input
                  type="text"
                  name="linkedin"
                  placeholder={props.linkedin}
                  onChange={props.handleData}
                />
              </td>
              <td className="input">
                <label>GitHub: </label>
                <input
                  type="text"
                  name="github"
                  placeholder={props.github}
                  onChange={props.handleData}
                />
              </td>
            </tr>
            <tr className="box">
              <td className="input">
                <label>Website: </label>
                <input
                  type="text"
                  name="personal"
                  placeholder={props.personal}
                  onChange={props.handleData}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </fieldset>
    </form>
  );
}
