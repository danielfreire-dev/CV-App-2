export default function Miscellanea(props, handleData) {
  return (
    <form>
      <fieldset>
        <legend>Miscellanea: </legend>
        <table>
          <tbody>
            <tr className="box">
              <td className="input">
                <label>Skills: </label>
                <input
                  type="text"
                  name="skill"
                  placeholder={props.skill}
                  onChange={props.handleData}
                />
              </td>
            </tr>
            <tr className="box">
              <td className="input">
                <label>Certificate: </label>
                <input
                  type="text"
                  name="certificates"
                  placeholder={props.certificates}
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
