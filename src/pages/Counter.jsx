import { useState } from "react";

const Counter = () => {
	const css = {
		root: {
			textAlign: "center",
		},
		p: {
			fontSize: "5rem",
			margin: "0",
		},
		btn: {
			padding: "0.5rem 1rem",
		},
	};

	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
	};
	return (
		<>
			<h1>Counter</h1>
			<div style={css.root}>
				<p style={css.p}>{count}</p>
				<button style={css.btn} type="button" onClick={handleClick}>
					Increse
				</button>
			</div>
		</>
	);
};
export default Counter;
