import { NavLink, Link } from "react-router-dom";
import { goBack } from "../functions/general";

const Navbar = () => {
	return (
		<div className="navbar">
			<nav>
				<span style={{ fontSize: "1.2rem" }} onClick={goBack}>
					&lArr;
				</span>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/booklist">Book List</NavLink>
				<NavLink to="/practice-list">Practice List</NavLink>
			</nav>
		</div>
	);
};
export default Navbar;
