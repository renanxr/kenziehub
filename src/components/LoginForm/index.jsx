import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { loginFormSchema } from "./loginFormSchema";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledFieldBox, StyledLabel } from "../../styles/form";
import { PagesParagraph, PagesTitle1 } from "../../styles/typography";
import { FormContainer } from "../../styles/grid";
import { LoginButton } from "../../styles/button";
import { NavLink } from "../../styles/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../providers/UserContext";

export const LoginForm = () => {
	const { login, setUser } = useContext(UserContext);
	const [loading, setLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(loginFormSchema),
	});

	const navigate = useNavigate();

	const userLogin = async (formData) => {
		try {
			setLoading(true);
			const success = await login(formData.email, formData.password);
			if (success) {
				toast.success("Login efetuado com sucesso!", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});
			}
			navigate("/home");
			localStorage.setItem("lastPage", location.pathname);
			setLoading(false);
			setLoading(false);
		} catch (error) {
			toast.error("Ocorreu um erro ao efetuar o login.", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
			setLoading(false);
		}
	};

	const submit = (formData) => {
		userLogin(formData);
	};

	return (
		<FormContainer>
			<PagesTitle1>Login</PagesTitle1>
			<StyledFieldBox onSubmit={handleSubmit(submit)}>
				<div>
					<StyledLabel>Email</StyledLabel>
					<Input
						type="email"
						name="email"
						placeholder="Digite aqui seu email"
						{...register("email")}
						error={errors.email}
					/>
				</div>
				<div>
					<StyledLabel>Senha</StyledLabel>
					<Input
						type="password"
						name="password"
						placeholder="Digite aqui sua senha"
						{...register("password")}
						error={errors.password}
					/>
				</div>
				<LoginButton type="submit">Entrar</LoginButton>
			</StyledFieldBox>
			<PagesParagraph>Ainda não possui uma conta?</PagesParagraph>
			<Link to="/register">
				<NavLink>Cadastre-se</NavLink>
			</Link>
		</FormContainer>
	);
};
