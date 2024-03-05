"use server";

import bcrypt from "bcrypt";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import { User } from "@/models/user-schema";
import { getUserByEmail } from "@/lib/data/user-data";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
	const validatedFields = RegisterSchema.safeParse(values);

	if (!validatedFields.success) return { error: "Invalid fields!" };

	const { email, password, name } = validatedFields.data;

	const existingUser = await getUserByEmail(email);

	if (existingUser) return { error: "Email already in use!" };

	const hashedPassword = await bcrypt.hash(password, 10);

	const newUser = {
		email,
		password: hashedPassword,
		name,
	};

	await User.create(newUser);

	return { success: "User account created!" };
};
