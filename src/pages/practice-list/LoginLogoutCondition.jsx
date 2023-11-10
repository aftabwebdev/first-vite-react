import { useState, useEffect } from "react";

const LoginLogoutCondition = () => {
	const [user, setUser] = useState("");

	return (
		<>
			{user === "aftab" ? (
				<div className="card">
					<h3>{user.toUpperCase()}</h3>
					<button onClick={() => setUser("")}>Logout</button>
				</div>
			) : (
				<div className="card">
					<h3>Login</h3>
					<button onClick={() => setUser("aftab")}>Login</button>
				</div>
			)}
		</>
	);
};
export default LoginLogoutCondition;
