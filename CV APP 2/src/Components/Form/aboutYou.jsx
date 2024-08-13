import { handleData } from "./handleInfo";

export default function AboutYou(props) {
  return (
    <form>
      <fieldset>
        <legend>About you: </legend>
        <table>
          <tbody>
            <tr className="box">
              <td className="input">
                <label>First Name: </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder={props.firstName}
                  onChange={props.handleData}
                />
              </td>
              <td className="input">
                <label>Last Name: </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder={props.lastName}
                  onChange={props.handleData}
                />
              </td>
            </tr>
            <tr className="box">
              <td className="input">
                <label>Phone Number: </label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder={props.phoneNumber}
                  onChange={props.handleData}
                />
              </td>
              <td className="input">
                <label>Email: </label>
                <input
                  type="text"
                  name="mail"
                  placeholder={props.mail}
                  onChange={props.handleData}
                />
              </td>
            </tr>
            <tr className="box">
              <td className="input">
                <label>Address: </label>
                <input
                  type="text"
                  name="address"
                  placeholder={props.address}
                  onChange={props.handleData}
                />
              </td>
              <td className="input">
                <label>City: </label>
                <input
                  type="text"
                  name="city"
                  placeholder={props.city}
                  onChange={props.handleData}
                />
              </td>
            </tr>
            <tr className="box">
              <td className="input">
                <label>Country: </label>
                <input
                  type="text"
                  name="country"
                  placeholder={props.country}
                  onChange={props.handleData}
                />
              </td>
              <td className="input">
                <label>Desired Position: </label>
                <input
                  type="text"
                  name="positionDesired"
                  placeholder={props.positionDesired}
                  onChange={props.handleData}
                />
              </td>
            </tr>
            <tr className="box">
              <td className="input">
                <label>About You: </label>
                <input
                  type="text"
                  name="about"
                  placeholder={props.about}
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
