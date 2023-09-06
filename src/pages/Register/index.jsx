import { RegisterForm } from "../../components/RegisterForm";
import { PageContainer, RegisterHeader } from "../../styles/grid";
import kenziehub from "../../assets/logoregister.svg";
import { Link } from "react-router-dom";
import { ReturnButton } from "../../styles/button";

export const RegisterPage = () => {
    
	return (
		<PageContainer>
			<RegisterHeader>
				<img src={kenziehub} alt="logo kenziehub" />
				<Link to="/">
					<ReturnButton>Voltar</ReturnButton>
				</Link>
			</RegisterHeader>
			<RegisterForm />
		</PageContainer>
	);
};
