import Link from "next/link";
import AuthForm from "@/app/components/AuthForm";
import { loginAction } from "@/app/login/actions";

const action = async (
  _prevState: { error?: string } | undefined,
  formData: FormData
) => {
  "use server";
  try {
    await loginAction(formData);
    return { error: "" };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Não foi possível entrar."
    };
  }
};

export default function LoginPage() {
  return (
    <section className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <AuthForm title="Entrar" submitLabel="Acessar" action={action} />
      <p className="text-sm text-slate-600">
        Ainda não tem conta?{" "}
        <Link className="font-semibold text-brand-600 hover:text-brand-500" href="/cadastro">
          Cadastre-se
        </Link>
      </p>
    </section>
  );
}
