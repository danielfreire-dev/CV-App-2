/* eslint-disable react/prop-types */

import { aboutState } from "../stateHandler";

export default function AboutYou(props) {
	/* const [about, handleAbout] = aboutState(); */
	/* console.log(about); */
	/* console.log(handleAbout); */
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
									onChange={props.onChangeFunction}
								/>
							</td>
							<td className="input">
								<label>Last Name: </label>
								<input
									type="text"
									name="lastName"
									placeholder={props.lastName}
									onChange={props.onChangeFunction}
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
									onChange={props.onChangeFunction}
								/>
							</td>
							<td className="input">
								<label>Email: </label>
								<input
									type="text"
									name="mail"
									placeholder={props.mail}
									onChange={props.onChangeFunction}
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
									onChange={props.onChangeFunction}
								/>
							</td>
							<td className="input">
								<label>City: </label>
								<input
									type="text"
									name="city"
									placeholder={props.city}
									onChange={props.onChangeFunction}
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
									onChange={props.onChangeFunction}
								/>
							</td>
							<td className="input">
								<label>Desired Position: </label>
								<input
									type="text"
									name="positionDesired"
									placeholder={props.positionDesired}
									onChange={props.onChangeFunction}
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
									onChange={props.onChangeFunction}
								/>
							</td>
						</tr>
					</tbody>
				</table>
			</fieldset>
		</form>
	);
}
