import { useState } from "react";

const ShortCircuit = () => {
	// falsy
	const [text, setText] = useState("");
	// truthy
	const [name, setName] = useState("Susan");

	return (
		<>
			<h1>Shotr Circuit Overview</h1>
			<p>1. {text || "some other text"}</p>
			<p>2. {text && "some other text"}</p>
			<p>3. {name || "some other name"}</p>
			<p>4. {name && "some other name"}</p>
		</>
	);
};
export default ShortCircuit;
