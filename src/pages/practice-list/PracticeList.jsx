import { NavLink, Outlet } from "react-router-dom";

const PracticeList = () => {
	return (
		<>
			<div className="practice-list">
				<span className="menu">Menu</span>
				<nav>
					<ul>
						<li>
							<NavLink to="/practice-list/counter">Counter</NavLink>
						</li>
						<li>
							<NavLink to="/practice-list/use-state-object">
								Use State Object
							</NavLink>
						</li>
						<li>
							<NavLink to="/practice-list/otherlink">Others</NavLink>
						</li>
						<li>
							<NavLink to="/practice-list/products">Products</NavLink>
						</li>
						<li>
							<NavLink to="/practice-list/short-circuit">
								Short Circuit Overview
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
			<Outlet />
		</>
	);
};
export default PracticeList;
