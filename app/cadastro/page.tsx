import Link from "next/link";
import AuthForm from "@/app/components/AuthForm";
import { registerAction } from "@/app/login/actions";

const action = async (
  _prevState: { error?: string } | undefined,
  formData: FormData
) => {
  "use server";
  try {
    await registerAction(formData);
    return { error: "" };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Não foi possível cadastrar."
    };
  }
};

export default function CadastroPage() {
  return (
    <section className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <AuthForm title="Criar conta" submitLabel="Cadastrar" action={action} />
      <p className="text-sm text-slate-600">
        Já possui conta?{" "}
        <Link className="font-semibold text-brand-600 hover:text-brand-500" href="/login">
          Entrar
        </Link>
      </p>
    </section>
  );
}
