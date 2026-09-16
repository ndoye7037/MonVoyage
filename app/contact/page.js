export default function ContactPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <section className="mx-auto max-w-3xl rounded-3xl border bg-white p-8 shadow-sm">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Contactez-nous</h1>
          <p className="mt-3 text-gray-600">Notre équipe est à votre écoute.</p>
        </div>
        <form className="mt-10 space-y-5">
          <div>
            <label className="mb-2 block font-medium">Nom</label>
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>
          <div>
            <label className="mb-2 block font-medium">Email</label>
            <input
              type="email"
              placeholder="Votre email"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>
          <div>
            <label className="mb-2 block font-medium">Message</label>
            <textarea
              rows="5"
              placeholder="Votre message..."
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="rounded-xl bg-blue-800 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Envoyer le message
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
