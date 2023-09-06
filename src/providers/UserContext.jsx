import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const autologin = async () => {
		const token = localStorage.getItem("@TOKEN");
		const userId = localStorage.getItem("@USERID");
		if (token && userId && !user) {
			try {
				const response = await api.get("/profile", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				const { user } = response.data;
				setUser(user);
				return user;
			} catch (error) {
				console.error("Error autologin:", error);
				logout();
				throw error;
			}
		}

		setIsLoading(false);
		return null;
	};

	const login = async (email, password) => {
		try {
			const response = await api.post("/sessions", { email, password });
			const { token, user } = response.data;
			localStorage.setItem("@TOKEN", token);
			localStorage.setItem("@USERID", user.id);
			setUser(user);
			return true;
		} catch (error) {
			console.error("Error logging in:", error);
			return false;
		}
	};

	const userRegiste = async (formData) => {
		try {
			const body = {
				email: formData.email,
				password: formData.password,
				name: formData.name,
				bio: formData.bio,
				contact: formData.contact,
				course_module: formData.module,
			};
			const response = await api.post("/users", body);
			const { token, user } = response.data;
			setUser(user);
			return true;
		} catch (error) {
			console.error("Error registering:", error);
			return false;
		}
	};

	const logout = () => {
		setUser(null);
		localStorage.clear();
	};

	const updateUser = (updatedUser) => {
		setUser(updatedUser);
	};

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				logout,
				updateUser,
				login,
				autologin,
				userRegiste,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
