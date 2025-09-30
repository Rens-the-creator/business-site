"use client";
import { useState } from "react";
import Link from "next/link";

// Deze homepage is geïnspireerd op de indeling van retbel.nl:
// – Navigatie naar Beursnieuws, Kwartaalcijfers, Dividend selector, Kalender, Storylines
// – Heldere hero, blokken met diensten, contact/over-ons sectie, footer
// Kleuren: standaard Tailwind blauw/rood – pas eenvoudig aan met Tailwind classes of theme extend.

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [storiesOpen, setStoriesOpen] = useState(false);

  const NAV = [
    { label: "Beursnieuws", href: "#beursnieuws" },
    { label: "Kwartaalcijfers", href: "#kwartaalcijfers" },
    { label: "Dividend selector", href: "#dividend" },
    { label: "Kalender", href: "#kalender" },
  ];

  const STORYLINKS = [
    { label: "AEX bedrijven", href: "#storylines" },
    { label: "AMX bedrijven", href: "#storylines" },
    { label: "Pharming", href: "#storylines" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="text-xl font-black tracking-tight">
            <span className="text-blue-700">Ret</span>
            <span className="text-red-600">Bel</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex" aria-label="Hoofd navigatie">
            {NAV.map((i) => (
              <a key={i.label} href={i.href} className="hover:text-blue-700">
                {i.label}
              </a>
            ))}
            <div className="relative">
              <button
                className="inline-flex items-center gap-1 rounded-lg px-2 py-1 hover:text-blue-700 focus:outline-none focus:ring"
                onClick={() => setStoriesOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={storiesOpen}
              >
                Storylines
                <svg className={`h-4 w-4 transition ${storiesOpen ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"/></svg>
              </button>
              {storiesOpen && (
                <div className="absolute right-0 mt-2 w-52 rounded-xl border bg-white p-2 shadow-lg">
                  {STORYLINKS.map((s) => (
                    <a key={s.label} href={s.href} className="block rounded-lg px-3 py-2 text-sm hover:bg-slate-50">
                      {s.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <Link href="/contact" className="rounded-2xl border border-red-600 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50">
              Contact
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 md:hidden focus:outline-none focus:ring"
            aria-label={open ? "Sluit menu" : "Open menu"}
            aria-expanded={open}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t bg-white md:hidden">
            <div className="mx-auto max-w-6xl space-y-2 px-4 py-4">
              {NAV.map((i) => (
                <a key={i.label} href={i.href} className="block rounded-lg px-2 py-2 hover:bg-slate-50" onClick={() => setOpen(false)}>
                  {i.label}
                </a>
              ))}
              <details className="rounded-lg p-2">
                <summary className="cursor-pointer select-none rounded-lg px-2 py-1 hover:text-blue-700">Storylines</summary>
                <div className="mt-2 space-y-2">
                  {STORYLINKS.map((s) => (
                    <a key={s.label} href={s.href} className="block rounded-lg px-3 py-2 text-sm hover:bg-slate-50" onClick={() => setOpen(false)}>
                      {s.label}
                    </a>
                  ))}
                </div>
              </details>
              <Link href="/contact" className="inline-flex items-center rounded-2xl border border-red-600 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50">
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Welkom retail belegger!
          </h1>
          <p className="mt-4 max-w-prose text-lg text-slate-600">
            Verzamel het belangrijkste beursnieuws, kwartaalcijfers, dividendkansen en publicatie‑data op één plek – snel en overzichtelijk.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#beursnieuws" className="rounded-2xl bg-blue-700 px-5 py-3 font-semibold text-white hover:opacity-90">Bekijk beursnieuws</a>
            <a href="#kwartaalcijfers" className="rounded-2xl border px-5 py-3 font-semibold hover:bg-slate-50">Kwartaalcijfers</a>
          </div>
          <p className="mt-3 text-xs text-slate-500">Demo‑content – vervang met jouw data en teksten.</p>
        </div>
        <div>
          <div className="rounded-3xl border p-4 shadow-sm">
            <div className="aspect-video w-full rounded-2xl bg-gradient-to-tr from-blue-50 via-white to-red-50" aria-hidden />
            <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
              {["Snel", "Responsief", "SEO‑vriendelijk"].map((t) => (
                <div key={t} className="rounded-xl border p-3 text-center">{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diensten / secties */}
      <section id="beursnieuws" className="scroll-mt-24 border-t bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold">Beursnieuws</h2>
          <p className="mt-2 max-w-prose text-slate-600">Nuttige bedrijfsinformatie over beursgenoteerde bedrijven.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <article key={i} className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="h-32 w-full rounded-xl bg-slate-100" />
                <h3 className="mt-4 text-lg font-semibold">Nieuwskaart {i + 1}</h3>
                <p className="mt-2 text-sm text-slate-600">Korte samenvatting of insight.</p>
                <a href="#" className="mt-3 inline-block text-sm font-semibold text-blue-700 hover:underline">Lees meer</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kwartaalcijfers" className="scroll-mt-24 border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold">Kwartaalcijfers</h2>
          <p className="mt-2 max-w-prose text-slate-600">Publicaties van AEX/AMX bedrijven overzichtelijk bij elkaar.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {[
              { title: "AEX", desc: "Top‑bedrijven met kwartaal/jaarupdates." },
              { title: "AMX", desc: "Midsized bedrijven met relevante cijfers." },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl border bg-white p-6">
                <div className="text-sm font-semibold text-blue-700">{b.title}</div>
                <p className="mt-2 text-sm text-slate-600">{b.desc}</p>
                <a href="#" className="mt-4 inline-block rounded-2xl border px-4 py-2 text-sm font-semibold hover:bg-slate-50">Open overzicht</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="dividend" className="scroll-mt-24 border-t bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold">Dividend selector</h2>
          <p className="mt-2 max-w-prose text-slate-600">Selecteer aandelen met consistente dividenduitkeringen.</p>
          <div className="mt-6 rounded-2xl border bg-white p-6">
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <label className="block text-sm font-medium">Dividendrendement ≥</label>
                <input className="mt-1 w-full rounded-xl border p-3" placeholder="bijv. 3%" />
              </div>
              <div>
                <label className="block text-sm font-medium">Sector</label>
                <select className="mt-1 w-full rounded-xl border p-3">
                  <option>Alle</option>
                  <option>Banken</option>
                  <option>Consumentengoederen</option>
                  <option>Industrie</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Index</label>
                <select className="mt-1 w-full rounded-xl border p-3">
                  <option>Alle</option>
                  <option>AEX</option>
                  <option>AMX</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <button className="rounded-2xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:opacity-90">Zoek</button>
              <span className="ml-3 text-xs text-slate-500">(Demo – koppel later aan je data)</span>
            </div>
          </div>
        </div>
      </section>

      <section id="kalender" className="scroll-mt-24 border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold">Kalender financiële publicaties</h2>
          <p className="mt-2 max-w-prose text-slate-600">Overzicht van eerstvolgende kwartaal‑/jaarpublicaties.</p>
          <div className="mt-6 overflow-x-auto rounded-2xl border">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3">Datum</th>
                  <th className="px-4 py-3">Bedrijf</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Link</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { date: "2025-10-22", company: "ASML", type: "Q3 2025", url: "#" },
                  { date: "2025-10-24", company: "Unilever", type: "Q3 2025", url: "#" },
                  { date: "2025-11-01", company: "ING", type: "Q3 2025", url: "#" },
                ].map((r, i) => (
                  <tr key={i} className="border-t">
                    <td className="px-4 py-3">{r.date}</td>
                    <td className="px-4 py-3">{r.company}</td>
                    <td className="px-4 py-3">{r.type}</td>
                    <td className="px-4 py-3">
                      <a href={r.url} className="font-semibold text-blue-700 hover:underline">Bekijken</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Storylines */}
      <section id="storylines" className="scroll-mt-24 border-t bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold">Storylines</h2>
          <p className="mt-2 max-w-prose text-slate-600">Samenvattingen en trends per bedrijf/sector.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {["AEX", "AMX", "Pharming"].map((t) => (
              <article key={t} className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-slate-600">Korte toelichting en link naar detailpagina.</p>
                <a href="#" className="mt-3 inline-block text-sm font-semibold text-blue-700 hover:underline">Open storyline</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t bg-gradient-to-br from-blue-50 via-white to-red-50">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h2 className="text-3xl font-extrabold">Klaar voor de volgende stap?</h2>
          <p className="mx-auto mt-2 max-w-prose text-slate-600">We helpen je graag met data, analyses en tooling.</p>
          <Link href="/contact" className="mt-6 inline-flex items-center rounded-2xl bg-red-600 px-6 py-3 font-semibold text-white hover:opacity-95">
            Neem contact op
          </Link>
          <p className="mt-3 text-xs text-slate-500">Formulier al aanwezig als /contact in je project.</p>
        </div>
      </section>

      {/* Over ons */}
      <section id="over" className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold">Over ons</h2>
          <p className="mt-2 max-w-prose text-slate-600">Plaats hier je missie, team en expertise. Licht kort je focus toe en verwijs naar je belangrijkste pagina’s.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>© {new Date().getFullYear()} RetBel. Alle rechten voorbehouden.</div>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/privacy">Privacy</Link>
              <Link href="/voorwaarden">Voorwaarden</Link>
              <a href="#over">Over</a>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-500">Disclaimer: de getoonde informatie is geen beleggingsadvies.</p>
        </div>
      </footer>
    </div>
  );
}
