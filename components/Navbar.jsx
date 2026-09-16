"use client";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b bg-white">
      <nav className="container mx-auto flex items-center justify-between px-6 py-5">
        <Link href="/" className="text-2xl font-bold text-blue-800">
          Planification <span className="text-gray-900">Intelligente</span>
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/" className="text-gray-700 transition hover:text-blue-600">
            Accueil
          </Link>
          <Link href="/favoris" className="text-gray-700 transition hover:text-blue-600">
            Favoris
          </Link>
          <Link href="/destination" className="text-gray-700 transition hover:text-blue-600">
            Destination
          </Link>
          <Link href="/contact" className="text-gray-700 transition hover:text-blue-600">
            Contacts
          </Link>
        </div>
      </nav>
    </header>
  );
}
