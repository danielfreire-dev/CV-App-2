import { handleJob } from "./handleInfo";

export default function Jobs(props) {
  return (
    <form>
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
                  placeholder={props.position}
                  onChange={props.handleJob}
                />
              </td>
              <td className="input">
                <label>Company: </label>
                <input
                  type="text"
                  name="jobCompany"
                  placeholder={props.company}
                  onChange={props.handleJob}
                />
              </td>
            </tr>
            <tr className="box">
              <td className="input">
                <label>Start Date: </label>
                <input
                  type="month"
                  name="jobStart"
                  placeholder={props.start}
                  onChange={props.handleJob}
                />
              </td>
              <td className="input">
                <label>Finish Date: </label>
                <input
                  type="month"
                  name="jobFinish"
                  placeholder={props.finish}
                  onChange={props.handleJob}
                />
              </td>
            </tr>
            <tr className="box">
              <td className="input">
                <label>Job Description: </label>
                <input
                  type="text"
                  name="jobAbout"
                  placeholder={props.about}
                  onChange={props.handleJob}
                />
              </td>
              <td className="input">
                <label>Current: </label>
                <input
                  type="checkbox"
                  name="jobBox"
                  defaultValue={false}
                  onChange={props.handleJob}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button name="jobButton" type="submit" onClick={handleJob}>
          Submit
        </button>
      </fieldset>
    </form>
  );
}
