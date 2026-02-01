import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/auth";

export default async function HomePage() {
  const [user, recipesCount] = await Promise.all([
    getSessionUser(),
    prisma.recipe.count()
  ]);

  const hasRecipes = recipesCount > 0;

  return (
    <section className="grid gap-8">
      <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="grid gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Portal colaborativo
          </p>
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Tudo Crochê: reúna receitas, técnicas e amigurumis em um só lugar.
          </h1>
          <p className="text-base text-slate-600">
            Busque receitas publicadas pela comunidade ou compartilhe a sua primeira ideia.
          </p>
        </div>
        <form className="grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
          <div className="grid gap-1">
            <label htmlFor="search">Buscar receitas</label>
            <input
              id="search"
              name="search"
              type="search"
              placeholder="Digite o nome da receita ou técnica"
              aria-label="Buscar receitas"
            />
          </div>
          <button className="secondary" type="submit">
            Buscar
          </button>
        </form>
      </div>

      <div className="grid gap-6 rounded-3xl border border-dashed border-slate-200 bg-white p-8 text-center">
        <h2 className="text-2xl font-semibold text-slate-800">Receitas da comunidade</h2>
        {hasRecipes ? (
          <p className="text-slate-600">As receitas publicadas aparecerão aqui em breve.</p>
        ) : (
          <div className="grid gap-3">
            <p className="text-slate-600">Ainda não há receitas publicadas.</p>
            <p className="text-sm text-slate-500">
              Publique a primeira receita e ajude a construir a comunidade Tudo Crochê.
            </p>
          </div>
        )}
        <Link
          href={user ? "/receitas/nova" : "/login"}
          className="inline-flex items-center justify-center rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:ring-offset-2"
        >
          Publique a primeira receita
        </Link>
      </div>
    </section>
  );
}
