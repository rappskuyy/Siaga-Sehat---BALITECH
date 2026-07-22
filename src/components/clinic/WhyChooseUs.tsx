import { FloatingBadge } from "./FloatingBadge";

const STATS = [
  { n: "10+", t: "Years of experience", d: "We have been working since 2012, improving the quality of service every day." },
  { n: "15+", t: "Areas of specialization", d: "Broad clinical scope plus a full in-house laboratory." },
  { n: "95%", t: "Satisfied patients", d: "According to internal survey of the past year." },
  { n: "98%", t: "Diagnostic accuracy", d: "Thanks to modern equipment.", tag: "In fact:" },
];

export function WhyChooseUs() {
  return (
    <section className="hex-pattern relative overflow-hidden rounded-[32px] bg-[color:var(--color-clinic-blue)] p-6 shadow-[var(--shadow-clinic-lg)] md:p-10">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left: image */}
        <div className="relative overflow-hidden rounded-[24px]">
          <img
            src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=900&h=900&fit=crop"
            alt="Two doctors"
            className="h-[420px] w-full object-cover md:h-[540px]"
          />
          <div className="absolute bottom-4 left-4 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur">
            Feels like
          </div>
          <FloatingBadge className="bottom-16 left-4">Experienced Doctors</FloatingBadge>
          <FloatingBadge className="right-4 top-1/2 -translate-y-1/2" style={{ animationDelay: "0.7s" }}>
            Certified Clinic
          </FloatingBadge>
          <FloatingBadge className="bottom-24 right-4" style={{ animationDelay: "1.4s" }}>
            Modern Equipment
          </FloatingBadge>
        </div>

        {/* Right: content */}
        <div className="flex flex-col text-white">
          <span className="text-xs uppercase tracking-[0.25em] text-white/70">[ Advantages ]</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-[56px]">
            Why choose us
          </h2>
          <div className="mt-4 text-xs uppercase tracking-widest text-white/60">
            Provided by
            <div className="mt-1 text-sm font-medium normal-case tracking-normal text-white">
              Licensed medical experts
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {STATS.map((s) => (
              <div key={s.n}>
                <div className="font-display text-4xl font-extrabold md:text-5xl">{s.n}</div>
                <div className="mt-2 text-sm font-semibold">{s.t}</div>
                <p className="mt-1 text-xs leading-relaxed text-white/70">
                  {s.tag && <span className="mr-1 font-semibold text-white/90">{s.tag}</span>}
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}