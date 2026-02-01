"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { clearSession, createSession, hashPassword, verifyPassword } from "@/lib/auth";

const getString = (value: FormDataEntryValue | null) =>
  typeof value === "string" ? value.trim() : "";

export async function registerAction(formData: FormData) {
  const email = getString(formData.get("email")).toLowerCase();
  const password = getString(formData.get("password"));

  if (!email || !password) {
    throw new Error("Preencha e-mail e senha.");
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    throw new Error("Este e-mail já está cadastrado.");
  }

  const passwordHash = await hashPassword(password);
  const user = await prisma.user.create({
    data: {
      email,
      passwordHash
    }
  });

  createSession(user.id);
  redirect("/");
}

export async function loginAction(formData: FormData) {
  const email = getString(formData.get("email")).toLowerCase();
  const password = getString(formData.get("password"));

  if (!email || !password) {
    throw new Error("Preencha e-mail e senha.");
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error("E-mail ou senha inválidos.");
  }

  const isValid = await verifyPassword(password, user.passwordHash);
  if (!isValid) {
    throw new Error("E-mail ou senha inválidos.");
  }

  createSession(user.id);
  redirect("/");
}

export async function logoutAction() {
  clearSession();
  redirect("/");
}
