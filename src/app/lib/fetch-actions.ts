"use server";

import { signOut } from "@/auth";
import { getUserByEmail } from "../db/user";

export async function getMe(email: string) {
	const user = await getUserByEmail(email);

	if (user?.email !== "test@example.com") {
		await signOut();
	}
	return user;
}
