import { ArrowUpRight, Menu, Phone, User } from "lucide-react";
import { FloatingBadge } from "./FloatingBadge";
import doctorHero from "@/assets/doctor-hero.png.asset.json";

const AVATARS = [
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=80&h=80&fit=crop&crop=faces",
];

export function Hero() {
  return (
    <section className="relative rounded-[32px] bg-white p-6 shadow-[var(--shadow-clinic-lg)] md:p-8 lg:p-10">
      {/* Header */}
      <header className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[color:var(--color-clinic-blue)]">
            <span className="h-2.5 w-2.5 rounded-full bg-white" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-[color:var(--color-clinic-ink)]">
            SalvaMedic
          </span>
        </div>

        <nav className="hidden items-center gap-1 rounded-full bg-[color:var(--color-clinic-blue-soft)]/60 px-2 py-1.5 text-sm text-[color:var(--color-clinic-ink)] lg:flex">
          {["About us", "Services", "Doctors", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s/g, "")}`} className="rounded-full px-4 py-1.5 transition hover:bg-white">
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden text-right text-xs leading-tight text-[color:var(--color-clinic-muted)] md:block">
            <div>Medychnyi Avenue,</div>
            <div>8-A, Lviv</div>
          </div>
          <button className="hidden h-10 w-10 items-center justify-center rounded-full border border-black/10 text-[color:var(--color-clinic-ink)] transition hover:bg-black/5 md:inline-flex" aria-label="Call">
            <Phone className="h-4 w-4" />
          </button>
          <button className="hidden h-10 w-10 items-center justify-center rounded-full border border-black/10 text-[color:var(--color-clinic-ink)] transition hover:bg-black/5 md:inline-flex" aria-label="Account">
            <User className="h-4 w-4" />
          </button>
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition hover:bg-black/80" aria-label="Menu">
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Body */}
      <div className="relative mt-8 grid gap-6 lg:mt-10 lg:grid-cols-[1.1fr_1.2fr_0.9fr] lg:gap-4">
        {/* Left column */}
        <div className="relative z-10 flex flex-col">
          <h1 className="font-display text-[56px] font-extrabold leading-[0.9] tracking-tight text-[color:var(--color-clinic-ink)] md:text-[64px] lg:text-[76px]">
            Innovation
            <br />
            Clinic
          </h1>
          <p className="mt-6 max-w-[260px] text-sm leading-relaxed text-[color:var(--color-clinic-muted)]">
            We treat not only symptoms — <span className="font-semibold text-[color:var(--color-clinic-ink)]">we care about each person.</span>
          </p>

          <div className="mt-6">
            <a
              href="#doctors"
              className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--color-clinic-blue)] py-1.5 pl-5 pr-1.5 text-sm font-medium text-white shadow-lg shadow-[color:var(--color-clinic-blue)]/30 transition hover:bg-[color:var(--color-clinic-blue-dark)]"
            >
              Find Doctor
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[color:var(--color-clinic-blue)] transition group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </div>

          <div className="mt-auto pt-10 flex items-end gap-4">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=200&h=200&fit=crop"
              alt="Clinic interior"
              className="hidden h-20 w-20 shrink-0 rounded-2xl object-cover md:block md:h-24 md:w-24"
            />
            <div className="grid flex-1 grid-cols-3 gap-3">
              {[
                { n: "10+", l: "years of experience" },
                { n: "20+", l: "highly qualified doctors" },
                { n: "100%", l: "digital diagnostics" },
              ].map((s) => (
                <div key={s.n}>
                  <div className="font-display text-2xl font-extrabold text-[color:var(--color-clinic-ink)] md:text-[32px] md:leading-none">
                    {s.n}
                  </div>
                  <div className="mt-1.5 text-[11px] leading-tight text-[color:var(--color-clinic-muted)]">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center doctor */}
        <div className="relative order-first lg:order-none">
          <div className="relative mx-auto flex h-full min-h-[380px] items-end justify-center overflow-hidden rounded-[28px] bg-gradient-to-b from-[color:var(--color-clinic-blue-soft)] to-white md:min-h-[480px]">
            <img
              src={doctorHero.url}
              alt="Doctor with clipboard"
              className="h-full max-h-[560px] w-auto object-contain object-bottom"
            />

            <FloatingBadge className="left-3 top-24 md:left-6" style={{ animationDelay: "0s" }}>
              Reliability
            </FloatingBadge>
            <FloatingBadge className="right-3 top-16 md:right-8 md:top-24" style={{ animationDelay: "0.8s" }}>
              Experience
            </FloatingBadge>
            <FloatingBadge className="bottom-24 right-3 md:right-6" style={{ animationDelay: "1.6s" }}>
              Professional
            </FloatingBadge>

            <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 shadow-sm backdrop-blur-md">
              <div className="flex -space-x-2">
                {AVATARS.map((a) => (
                  <img key={a} src={a} alt="" className="h-6 w-6 rounded-full border-2 border-white object-cover" />
                ))}
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 text-[color:var(--color-clinic-ink)]" />
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="relative z-10 flex flex-col justify-start">
          <div className="max-w-xs">
            <h3 className="font-display text-2xl font-extrabold leading-tight text-[color:var(--color-clinic-ink)]">
              With Advanced
              <br />
              Technologies
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-clinic-muted)]">
              The latest generation equipment, digital diagnostics, advanced techniques — all of this works for your health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}