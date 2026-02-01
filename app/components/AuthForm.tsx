"use client";

import { useFormState } from "react-dom";

type Props = {
  title: string;
  submitLabel: string;
  action: (prevState: { error?: string } | undefined, formData: FormData) => Promise<{ error?: string }>;
};

const initialState = { error: "" };

export default function AuthForm({ title, submitLabel, action }: Props) {
  const [state, formAction] = useFormState(action, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-slate-800">{title}</h1>
        <p className="text-sm text-slate-500">
          Use seu e-mail para acessar e publicar novas receitas de crochê.
        </p>
      </div>
      <div className="grid gap-3">
        <div className="grid gap-1">
          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="grid gap-1">
          <label htmlFor="password">Senha</label>
          <input id="password" name="password" type="password" autoComplete="current-password" required />
        </div>
      </div>
      {state?.error ? (
        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {state.error}
        </p>
      ) : null}
      <button type="submit">{submitLabel}</button>
    </form>
  );
}
