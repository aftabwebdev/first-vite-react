import { Outlet, NavLink } from "react-router-dom";

function AppLayout() {
	return (
		<>
			<header>
				<div className="navbar">
					<nav>
						<NavLink to="/">Home</NavLink>
						<NavLink to="/booklist">Book List</NavLink>
					</nav>
				</div>
			</header>
			<main>
				<Outlet />
			</main>
			<footer></footer>
		</>
	);
}
export default AppLayout;
