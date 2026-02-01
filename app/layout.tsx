import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";

export const metadata: Metadata = {
  title: "Tudo Crochê — Receitas de Crochê e Amigurumi",
  description:
    "Tudo Crochê é um portal colaborativo para compartilhar receitas de crochê, amigurumi e técnicas artesanais.",
  openGraph: {
    title: "Tudo Crochê — Receitas de Crochê e Amigurumi",
    description:
      "Tudo Crochê é um portal colaborativo para compartilhar receitas de crochê, amigurumi e técnicas artesanais.",
    type: "website",
    siteName: "Tudo Crochê"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen">
        <div className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-slate-50">
          <Header />
          <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-6 py-8">
            {children}
          </main>
          <footer className="border-t border-slate-200 bg-white/70 py-6">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 text-sm text-slate-500">
              <p className="font-semibold text-slate-700">Tudo Crochê</p>
              <p>
                Portal colaborativo para compartilhar receitas de crochê, amigurumi e
                técnicas artesanais.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
