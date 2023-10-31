import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Counter from "./pages/Counter";
import PracticeList from "./pages/PracticeList";
import UseStateObject from "./pages/UseStateObject";
import Page404 from "./pages/Page404";

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
		<BrowserRouter basename="/first-vite-react/">
			<Routes>
				<Route path="/" element={<AppLayout />}>
					<Route index element={<Home />} />
					<Route path="booklist" element={<BookList />} />
					<Route path="practice-list" element={<PracticeList />}>
						<Route path="counter" element={<Counter />} />
						<Route path="use-state-object" element={<UseStateObject />} />
					</Route>
				</Route>
				<Route path="*" element={<Page404 />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;