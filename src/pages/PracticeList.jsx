import { NavLink, Outlet } from "react-router-dom";

const PracticeList = () => {
	return (
		<div className="practice-list">
			<h1>Practice List</h1>
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
				</ul>
			</nav>
			<Outlet />
		</div>
	);
};
export default PracticeList;
