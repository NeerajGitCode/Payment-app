import { creatUserWithAccount } from "@/utils/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

export const POST = async (req, res) => {
  try {
    const { name, email, password } = await req.json();
    const existUser = await getUserByEmial(email);
    if (existUser) {
      return NextResponse.json(
        {
          message: "This Email Already Use",
        },
        { status: 400 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await creatUserWithAccount({
      name,
      email,
      password: hashedPassword,
    });
    return NextResponse.json(
      {
        message: "User Created",
        data: {
          ...newUser,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error",
        error,
      },
      { status: 500 }
    );
  }
};

export async function getUserByEmial(email) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    console.error("Error getting user by email", error);
    throw error;
  }
}
