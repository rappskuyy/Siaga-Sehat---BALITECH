import { ArrowUpRight, Menu, Phone, User } from "lucide-react";
import { FloatingBadge } from "./FloatingBadge";

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

        <nav className="hidden items-center gap-8 text-sm text-[color:var(--color-clinic-ink)] lg:flex">
          <a href="#about" className="hover:opacity-70">About us</a>
          <a href="#services" className="hover:opacity-70">Services</a>
          <a href="#doctors" className="hover:opacity-70">Doctors</a>
          <a href="#contact" className="hover:opacity-70">Contact</a>
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
      <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_1fr]">
        {/* Left */}
        <div className="flex flex-col">
          <div className="flex flex-wrap items-end gap-6">
            <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-[color:var(--color-clinic-ink)] md:text-6xl lg:text-[64px]">
              Innovation
              <br />
              Clinic
            </h1>
            <p className="max-w-[220px] text-sm leading-relaxed text-[color:var(--color-clinic-muted)]">
              We treat not only symptoms — we care about each person.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="#doctors"
              className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--color-clinic-blue)] py-2 pl-6 pr-2 text-sm font-medium text-white shadow-lg shadow-[color:var(--color-clinic-blue)]/30 transition hover:bg-[color:var(--color-clinic-blue-dark)]"
            >
              Find Doctor
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-[color:var(--color-clinic-blue)] transition group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </div>

          <div className="mt-10 flex items-end gap-5">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=200&h=200&fit=crop"
              alt="Clinic interior"
              className="h-24 w-24 shrink-0 rounded-2xl object-cover md:h-28 md:w-28"
            />
            <div className="grid flex-1 grid-cols-3 gap-4">
              {[
                { n: "10+", l: "years of experience" },
                { n: "20+", l: "highly qualified doctors" },
                { n: "100%", l: "digital diagnostics" },
              ].map((s) => (
                <div key={s.n}>
                  <div className="font-display text-2xl font-extrabold text-[color:var(--color-clinic-ink)] md:text-3xl">
                    {s.n}
                  </div>
                  <div className="mt-1 text-xs leading-tight text-[color:var(--color-clinic-muted)]">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="mb-4 max-w-sm">
            <h3 className="font-display text-lg font-bold text-[color:var(--color-clinic-ink)]">
              With Advanced Technologies
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-clinic-muted)]">
              Modern equipment, evidence-based protocols, and a warm human touch — everything under one roof.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[28px]">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&h=1100&fit=crop"
              alt="Doctor portrait"
              className="h-[420px] w-full object-cover md:h-[520px]"
            />
            <FloatingBadge className="left-4 top-24" style={{ animationDelay: "0s" }}>
              Reliability
            </FloatingBadge>
            <FloatingBadge className="left-1/2 top-1/2 -translate-x-1/2" style={{ animationDelay: "0.8s" }}>
              Experience
            </FloatingBadge>
            <FloatingBadge className="bottom-24 right-4" style={{ animationDelay: "1.6s" }}>
              Professional
            </FloatingBadge>

            <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-white/85 px-3 py-1.5 backdrop-blur-md">
              <div className="flex -space-x-2">
                {AVATARS.map((a) => (
                  <img key={a} src={a} alt="" className="h-7 w-7 rounded-full border-2 border-white object-cover" />
                ))}
              </div>
              <ArrowUpRight className="h-4 w-4 text-[color:var(--color-clinic-ink)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}