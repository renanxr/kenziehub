import { createContext, useState, useEffect, useContext } from "react";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
	const [techs, setTechs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const { user } = useContext(UserContext);

	useEffect(() => {
		const fetchTechs = async () => {
			try {
				const token = localStorage.getItem("@TOKEN");
				const userId = localStorage.getItem("@USERID");

				if (!token || !userId) {
					setLoading(false);
					return;
				}

				const response = await api.get("/profile", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				setTechs(response.data.techs);
			} catch (error) {
				console.error("Error fetching techs:", error);
				setError(true);
			} finally {
				setLoading(false);
			}
		};

		if (user) {
			fetchTechs();
		}
	}, [user]);

	const addTech = async (techData) => {
		try {
			const token = localStorage.getItem("@TOKEN");
			const response = await api.post("/users/techs", techData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setTechs((prevTechs) => [...prevTechs, response.data]);
		} catch (error) {
			console.error("Error adding tech:", error);
			throw error;
		}
	};

	const updateTechStatus = async (techId, status) => {
		try {
			const token = localStorage.getItem("@TOKEN");
			const response = await api.put(
				`/users/techs/${techId}`,
				{ status },
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			const updatedTech = response.data;
			setTechs((prevTechs) =>
				prevTechs.map((tech) =>
					tech.id === updatedTech.id ? updatedTech : tech
				)
			);
		} catch (error) {
			console.error("Error updating tech status:", error);
			throw error;
		}
	};

	const deleteTech = async (techId) => {
		try {
			const token = localStorage.getItem("@TOKEN");
			await api.delete(`/users/techs/${techId}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setTechs((prevTechs) => prevTechs.filter((tech) => tech.id !== techId));
		} catch (error) {
			console.error("Error deleting tech:", error);
			throw error;
		}
	};

	return (
		<TechContext.Provider
			value={{ techs, loading, error, addTech, updateTechStatus, deleteTech }}
		>
			{children}
		</TechContext.Provider>
	);
};
