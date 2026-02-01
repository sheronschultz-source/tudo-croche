import Link from "next/link";
import { getSessionUser } from "@/lib/auth";
import { logoutAction } from "@/app/login/actions";

export default async function Header() {
  const user = await getSessionUser();

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-2xl font-semibold text-brand-700">
            Tudo Crochê
          </Link>
        </div>
        <nav className="flex flex-wrap items-center gap-3 text-sm">
          <Link className="rounded-full px-3 py-2 text-slate-600 hover:bg-slate-100" href="/">
            Início
          </Link>
          <Link
            className="rounded-full px-3 py-2 text-slate-600 hover:bg-slate-100"
            href="/receitas/nova"
          >
            Criar receita
          </Link>
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-500">Olá, {user.email}</span>
              <form action={logoutAction}>
                <button className="ghost" type="submit">
                  Sair
                </button>
              </form>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link className="rounded-full px-3 py-2 text-slate-600 hover:bg-slate-100" href="/login">
                Entrar
              </Link>
              <Link className="rounded-full px-3 py-2 text-slate-600 hover:bg-slate-100" href="/cadastro">
                Criar conta
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
