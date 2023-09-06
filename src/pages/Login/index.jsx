import kenziehub from "../../assets/kenziehub.svg";
import { LoginForm } from "../../components/LoginForm";
import { PageContainer } from "../../styles/grid";
import { UserContext } from "../../providers/UserContext";
import { useContext, useEffect } from "react";

export const LoginPage = () => {

	return (
		<PageContainer>
			<img src={kenziehub} alt="logo kenziehub" />
			<LoginForm />
		</PageContainer>
	);
};
