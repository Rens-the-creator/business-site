export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-black">
            <span className="text-blue-700">New</span>
            <span className="text-red-600">Site</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="hover:text-blue-700">Features</a>
            <a href="/contact" className="hover:text-blue-700">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-extrabold">Hallo, dit is mijn eigen Business Site ✅</h1>
        <p className="mt-4 text-lg text-slate-600">Als je dit ziet, werkt je site echt!</p>
        <div className="mt-6 flex gap-3">
          <a href="/contact" className="rounded-2xl bg-blue-700 px-5 py-3 font-semibold text-white">Neem contact op</a>
          <a href="#features" className="rounded-2xl border px-5 py-3 font-semibold">Bekijk features</a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 grid gap-6 md:grid-cols-3">
          {[
            { t: "Snel", d: "Next.js + Vercel voor snelle laadtijden." },
            { t: "Responsief", d: "Werkt op mobiel, tablet en desktop." },
            { t: "SEO-klaar", d: "Metadata, sitemap en robots ingeregeld." },
          ].map(({ t, d }) => (
            <div key={t} className="rounded-2xl border bg-white p-6">
              <div className="font-semibold">{t}</div>
              <p className="mt-2 text-sm text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600 flex justify-between">
          <div>© {new Date().getFullYear()} NewSite</div>
          <div className="flex gap-4">
            <a href="/privacy">Privacy</a>
            <a href="/voorwaarden">Voorwaarden</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
