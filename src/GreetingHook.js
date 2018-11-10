import React, { useState, useEffect } from "react";
import { Container, Row, Col, Input, Button } from "mdbreact";

function GreetingHook()  {
	let [name, setName] = useState("Molly");

	// useEffect = (e) => {
	// 	setName(e.target.value);
	// };

	return (
		<form className="container">
			<Input
				className="grey-text"
				label="Name"
				defaultvalue={"Molly"}
				// onChange={handleNameChange}
			/>
		</form>
	);
}

export default GreetingHook;