"use server";

import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const getString = (value: FormDataEntryValue | null) =>
  typeof value === "string" ? value.trim() : "";

export async function createRecipeAction(formData: FormData) {
  const user = await getSessionUser();
  if (!user) {
    throw new Error("Você precisa entrar para publicar receitas.");
  }

  const title = getString(formData.get("title"));
  const description = getString(formData.get("description"));
  const category = getString(formData.get("category"));

  if (!title || !description || !category) {
    throw new Error("Preencha todos os campos.");
  }

  await prisma.recipe.create({
    data: {
      title,
      description,
      category,
      authorId: user.id
    }
  });

  redirect("/");
}
