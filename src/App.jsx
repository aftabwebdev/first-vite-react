import { Outlet, NavLink } from "react-router-dom";

// Event example
/*
function EventExamples() {
	function handleFromInput(e) {
		console.log(e.target);
		console.log(e.target.name);
		console.log(e.target.value);
		console.log("Handle Form Input");
	}

	function handleButtonClick() {
		alert("Handle Button Click");
	}

	function handleFromSubmission(e) {
		e.preventDefault();
		console.log("Handle Form Submission");
	}

	return (
		<>
			<form action="" onSubmit={handleFromSubmission}>
				<h2>Typical Form</h2>
				<input
					type="text"
					name="example"
					style={{ margin: "1rem 0" }}
					onClick={handleFromInput}
				/>
				<button type="submit">Submit</button>
				<div>
					<button type="button" onClick={handleButtonClick}>
						Click me
					</button>
				</div>
			</form>
		</>
	);
}
*/

function App() {
	return (
		<>
			<h3 className="navbar">
				<nav>
					<NavLink to="/first-vite-react/">Home</NavLink>
					<NavLink to="/first-vite-react/booklist">Book List</NavLink>
				</nav>
			</h3>
			<Outlet />
		</>
	);
}

export default App;
