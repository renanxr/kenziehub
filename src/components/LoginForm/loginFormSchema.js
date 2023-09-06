import { z } from "zod";

export const loginFormSchema = z.object({
	email: z.string().email({ message: "E-mail inválido" }),
	password: z.string().min(6, { message: "Senha inválida" }),
});
