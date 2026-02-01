import Link from "next/link";
import RecipeForm from "@/app/components/RecipeForm";
import { createRecipeAction } from "@/app/receitas/nova/actions";

const action = async (
  _prevState: { error?: string } | undefined,
  formData: FormData
) => {
  "use server";
  try {
    await createRecipeAction(formData);
    return { error: "" };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Não foi possível publicar."
    };
  }
};

export default function NovaReceitaPage() {
  return (
    <section className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="grid gap-2">
        <h1 className="text-2xl font-semibold text-slate-800">Criar receita</h1>
        <p className="text-sm text-slate-500">
          Compartilhe sua receita de crochê com a comunidade Tudo Crochê.
        </p>
      </div>
      <RecipeForm action={action} />
      <p className="text-sm text-slate-600">
        Quer organizar suas receitas?{" "}
        <Link className="font-semibold text-brand-600 hover:text-brand-500" href="/login">
          Entre na sua conta
        </Link>
        .
      </p>
    </section>
  );
}
