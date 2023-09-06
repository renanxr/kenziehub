import { z } from "zod";

export const registerFormSchema = z
	.object({
		name: z.string().nonempty({ message: "Nome é obrigatório" }),
		email: z
			.string()
			.nonempty({ message: "O e-mail é obrigatório" })
			.email({ message: "Digite um e-mail válido." }),
		password: z
			.string()
			.nonempty({ message: "A senha é obrigatória." })
			.min(8, { message: "Senha deve ter no mínimo 8 caracteres" })
			.regex(/(?=.*?[A-Z])/, {
				message: "É necessário pelo menos uma letra maiúscula.",
			})
			.regex(/(?=.*?[a-z])/, {
				message: "É necessário pelo menos um caracter minúsculo.",
			})
			.regex(/^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/, {
				message: "É necessário pelo menos um caracter especiais",
			})
			.regex(/(?=.*?[0-9])/, { message: "É necesário pelo menos um número." }),
		confirm: z
			.string()
			.nonempty({ message: ":Confirmar a senha é obrigatório." }),
		bio: z.string().nonempty({ message: "Bio é obrigatório" }),
		contact: z.string().nonempty({ message: "Contato é obrigatório" }),
		module: z
			.string()
			.nonempty({ message: "Escolher o módulo  é obrigatório." }),
	})
	.refine(({ password, confirm }) => password === confirm, {
		message: "As senhas não correspondem.",
		path: ["confirm"],
	});
