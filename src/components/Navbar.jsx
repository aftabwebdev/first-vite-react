import { NavLink, Link } from "react-router-dom";
import { goBack } from "../functions/general";
import leftArrowSvg from "../assets/svg/arrow-left-long.svg";

const Navbar = () => {
	return (
		<div className="navbar">
			<nav>
				<img onClick={goBack} src={leftArrowSvg} />
				<NavLink to="/">Home</NavLink>
				<NavLink to="/booklist">Book List</NavLink>
				<span className="practice-list">
					Practice List
					<ul>
						<li>
							<NavLink to="/practice-list/counter">Counter</NavLink>
						</li>

						<li>
							<NavLink to="/practice-list/products">Products</NavLink>
						</li>
						<li>
							<NavLink to="/practice-list/short-circuit">
								Short Circuit Overview
							</NavLink>
						</li>
						<li>
							<NavLink to="/practice-list/login-logout-condition">
								Login Logout Condition
							</NavLink>
						</li>
						<li>
							<NavLink to="/practice-list/new">New</NavLink>
						</li>
						<li>
							<NavLink to="/practice-list/form-submission">
								Form Submission
							</NavLink>
						</li>
					</ul>
				</span>
			</nav>
		</div>
	);
};
export default Navbar;
