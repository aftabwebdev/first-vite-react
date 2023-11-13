import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import {
	Home,
	BookList,
	Page404,
	UseStateObject,
	PracticeList,
	Counter,
	Products,
	ShortCircuit,
	LoginLogoutCondition,
} from "./pages";
/*
import BookList from "./pages/BookList";
import Counter from "./pages/practice-list/Counter";
import PracticeList from "./pages/practice-list/PracticeList";
import UseStateObject from "./pages/UseStateObject";
import Page404 from "./pages/Page404";
import Products from "./pages/practice-list/Products";
import ShortCircuit from "./pages/practice-list/ShortCircuit";
import LoginLogoutCondition from "./pages/practice-list/LoginLogoutCondition";
*/
// Event example

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
						<Route path="products" element={<Products />} />
						<Route path="short-circuit" element={<ShortCircuit />} />
						<Route
							path="login-logout-condition"
							element={<LoginLogoutCondition />}
						/>
					</Route>
				</Route>
				<Route path="*" element={<Page404 />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
