import prisma from "@/lib/prisma";
import Credentials from "next-auth/providers/credentials";
import { v4 as uuidv4 } from "uuid";
export async function creatUserWithAccount({ name, email, password }) {
  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
        accounts: {
          create: {
            type: "Credentials",
            provider: "email",
            providerAccountId: uuidv4(),
          },
        },
      },
      include: {
        accounts: true,
      },
    });
  } catch (error) {
    console.error("error creating the user : ", error);
    throw error;
  }
}
