import { useEffect, useState } from "react";

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
	const [color, setColor] = useState("red");

	useEffect(() => {
		console.log(count);
		console.log("hello there");
	}, []);

	const handleClick = () => {
		setCount(count + 1);
		setColor("blue");
	};

	return (
		<>
			<h1 style={{ color }}>Counter</h1>
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
