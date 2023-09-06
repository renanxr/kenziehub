import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";
import { Input } from "../Input";
import { Select } from "../Select";
import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { FormContainer } from "../../styles/grid";
import { PagesParagraph, PagesTitle1 } from "../../styles/typography";
import { StyledFieldBox, StyledLabel } from "../../styles/form";
import { LoginButton } from "../../styles/button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isEmpty } from "../../utils/isEmpty";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";

export const RegisterForm = () => {
	const { userRegiste } = useContext(UserContext);
	const [loading, setLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(registerFormSchema),
	});

	const navigate = useNavigate();

	const userRegister = async (formData) => {
		try {
			setLoading(true);
			const success = await userRegiste(formData);
			if (success) {
				toast.success("Registro efetuado com sucesso!", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});
				navigate("/");
				setLoading(false);
			}
		} catch (error) {
			toast.error("Ops! Algo deu errado", {
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
		userRegister(formData);
	};

	const isErrors = isEmpty(errors);

	return (
		<FormContainer>
			<PagesTitle1>Crie sua conta</PagesTitle1>
			<PagesParagraph>Rápido e grátis, vamos nessa</PagesParagraph>
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
			<StyledFieldBox onSubmit={handleSubmit(submit)}>
				<div>
					<StyledLabel>Nome</StyledLabel>
					<Input
						type="text"
						name="name"
						placeholder="Digite aqui seu nome"
						{...register("name")}
						error={errors.name}
					/>
				</div>
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
				<div>
					<StyledLabel>Confirmar Senha</StyledLabel>
					<Input
						type="password"
						name="confirm"
						placeholder="Digite novamente sua senha"
						{...register("confirm")}
						error={errors.confirm}
					/>
				</div>
				<div>
					<StyledLabel>Biografia</StyledLabel>
					<Input
						type="text"
						name="bio"
						placeholder="Fale sobre você"
						{...register("bio")}
						error={errors.bio}
					/>
				</div>
				<div>
					<StyledLabel>Contato</StyledLabel>
					<Input
						type="text"
						name="contact"
						placeholder="Opção de contato"
						{...register("contact")}
						error={errors.contact}
					/>
				</div>
				<div>
					<StyledLabel>Módulo</StyledLabel>
					<Select {...register("module")} error={errors.module}>
						<option value="Primeiro Módulo">Primeiro Módulo</option>
						<option value="Segundo Módulo">Segundo Módulo</option>
						<option value="Terceiro Módulo">Terceiro Módulo</option>
						<option value="Quarto Módulo">Quarto Módulo</option>
					</Select>
				</div>
				<LoginButton type="submit" disabled={isErrors}>
					Cadastrar
				</LoginButton>
			</StyledFieldBox>
		</FormContainer>
	);
};
