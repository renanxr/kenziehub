import kenziehub from "../../assets/logoregister.svg";
import { ReturnButton } from "../../styles/button";
import { Link, useNavigate } from "react-router-dom";
import { HeaderDash } from "../../styles/grid";
import { UserContext } from "../../providers/UserContext";
import { useContext } from "react";

export const HeaderDashPage = () => {
  const { user, logout } = useContext(UserContext);
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate("/");
	};

	return (
		<HeaderDash>
			<img src={kenziehub} alt="logo kenziehub" />
			<ReturnButton onClick={handleLogout}>Sair</ReturnButton>
		</HeaderDash>
	);
};
