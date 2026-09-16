"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function RechercheDestination() {
  const router = useRouter();
  const [destination, setDestination] = useState("");

  function handleSearch(e) {
    e.preventDefault();

    if (!destination.trim()) {
      return;
    }

    router.push(
      `/destination/${encodeURIComponent(destination.toLowerCase())}`,
    );
  }
  return (
    <form
      onSubmit={handleSearch}
      className="mx-auto mt-2 flex w-full max-w-3xl flex-col gap-4 rounded-2xl bg-white p-3 shadow-lg md:flex-row"
    >
      <input
        type="text"
        placeholder="Exemple : Paris, Lyon, Brazzaville..."
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="flex-1 rounded-xl px-5 py-3 text-gray-900 outline-none"
      />
      <button
        type="submit"
        className="rounded-xl bg-blue-900 hover:bg-blue-800 text-white rounded-xl px-6 py-3 px-8 py-3 font-semibold text-white transition"
      >
        Rechercher
      </button>
    </form>
  );
}
