import { Link } from "react-router-dom";
import { goBack } from "../functions/general";

const Page404 = () => {
	const css = {
		textAlign: "center",
		num404: {
			fontSize: "5rem",
			marginBottom: "0",
		},
		msg: {
			fontSize: "1.5rem",
		},
	};
	return (
		<div style={css}>
			<p style={css.num404}>404</p>
			<p style={css.msg}>Not Found</p>
			<button onClick={goBack}>Go back</button>
		</div>
	);
};
export default Page404;
