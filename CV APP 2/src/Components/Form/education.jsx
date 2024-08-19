export default function Education(props, handleEducation, showPresent) {
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
									placeholder={props.institution}
									onChange={props.handleEducation}
								/>
							</td>
							<td className="input">
								<label>Start Date: </label>
								<input
									type="month"
									name="eduStart"
									placeholder={props.start}
									onChange={props.handleEducation}
								/>
							</td>
						</tr>
						<tr className="box">
							<td className="input">
								<label>Course: </label>
								<input
									type="text"
									name="eduInstitution"
									placeholder={props.course}
									onChange={props.handleEducation}
								/>
							</td>
							<td className="input">
								<label>Finish Date: </label>

								<input
									type="month"
									name="eduFinish"
									placeholder={props.finish}
									onChange={props.handleEducation}
								/>
							</td>
						</tr>
						<tr className="box">
							<td className="input">
								<label>Description: </label>
								<input
									type="text"
									name="eduAbout"
									placeholder={props.about}
									onChange={props.handleEducation}
								/>
							</td>
							<td className="input">
								<label>Current: </label>
								<input
									type="checkbox"
									name="eduBox"
									checked={showPresent}
									onChange={props.handleEducation}
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
}
