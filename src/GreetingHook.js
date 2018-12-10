// import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import { Container, Row, Col, Input, Button } from "mdbreact";

function GreetingHook()  {
	let [name, setName] = useState("Molly");

	// useEffect = (e) => {
	// 	setName(e.target.value);
	// };

	let handleNameChange = e => {
		setName(e.target.value);
	}

	return (
		<form className="container">
			<Input
				className="grey-text"
				label="Name"
				value={name}
				onChange={handleNameChange}
			/>
		</form>
	);
}

export default GreetingHook;