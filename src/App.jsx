import React, { useState, useEffect } from "react";
import { RoutesMain } from "./routes/RoutesMain";
import { GlobalStyle } from "./styles/global";
import { ResetStyle } from "./styles/reset";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./providers/UserContext";
import { TechProvider } from "./providers/TechContext";

export const App = () => {
	const [user, setUser] = useState(null);

	return (
		<UserProvider>
			<TechProvider>
				<div className="App">
					<GlobalStyle />
					<ResetStyle />
					<RoutesMain />
					<ToastContainer
						position="top-right"
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme="dark"
					/>
				</div>
			</TechProvider>
		</UserProvider>
	);
}
