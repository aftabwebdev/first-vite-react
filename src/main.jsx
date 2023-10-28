import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import App from "./App";
// pages
import Home from "./pages/Home";
import BookList from "./pages/BookList";

const router = createBrowserRouter([
	{
		path: "/first-vite-react/",
		element: <App />,
		children: [
			{
				path: "/first-vite-react/",
				element: <Home />,
			},
			{
				path: "/first-vite-react/booklist",
				element: <BookList />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
