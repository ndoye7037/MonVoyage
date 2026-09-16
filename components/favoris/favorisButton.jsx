"use client";
import { addFavoris } from "./favorisLocalStorage";
import { useState } from "react";

export function FavorisButton({ destination }) {
  const [saved, setSaved] = useState(false);
  function handleClick() {
    addFavoris(destination);
    setSaved(true);
  }

  return (
    <button
      onClick={handleClick}
      className="rounded-xl bg-blue-900 hover:bg-blue-800 text-white rounded-xl px-6 py-3 px-8 py-3 font-semibold text-white transition"
    >
      {saved ? "Ajouté aux favoris" : "Ajouter aux favoris"}
    </button>
  );
}
