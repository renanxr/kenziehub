import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";
import { HomePage } from "../pages/HomePage";
import { PublicRoutes } from "./PublicRoutes";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../providers/UserContext";

export const RoutesMain = () => {
	const { user, autologin } = useContext(UserContext);

	useEffect(() => {
		const token = localStorage.getItem("@TOKEN");
		const userId = localStorage.getItem("@USERID");
		if (token && userId && !user) {
			autologin().catch((error) => {
				console.error("Error autologin:", error);
			});
		}
	}, []);

	return (
		<Routes>
			<Route path="/" element={<PublicRoutes />}>
				<Route
					path="/"
					element={user ? <Navigate to="/home" replace /> : <LoginPage />}
				/>
				<Route path="/register" element={<RegisterPage />} />
			</Route>
			<Route path="/home" element={<ProtectedRoutes />}>
				<Route index element={<HomePage />} />
			</Route>
		</Routes>
	);
};
