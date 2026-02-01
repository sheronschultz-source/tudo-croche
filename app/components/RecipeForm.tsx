"use client";

import { useFormState } from "react-dom";

type Props = {
  action: (prevState: { error?: string } | undefined, formData: FormData) => Promise<{ error?: string }>;
};

const initialState = { error: "" };

export default function RecipeForm({ action }: Props) {
  const [state, formAction] = useFormState(action, initialState);

  return (
    <form action={formAction} className="grid gap-5">
      <div className="grid gap-1">
        <label htmlFor="title">Título</label>
        <input id="title" name="title" type="text" required />
      </div>
      <div className="grid gap-1">
        <label htmlFor="description">Descrição</label>
        <textarea id="description" name="description" rows={5} required />
      </div>
      <div className="grid gap-1">
        <label htmlFor="category">Categoria</label>
        <input id="category" name="category" type="text" required />
      </div>
      {state?.error ? (
        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {state.error}
        </p>
      ) : null}
      <button type="submit">Publicar receita</button>
    </form>
  );
}
