import { FloatingBadge } from "./FloatingBadge";

const STATS = [
  { n: "10+", t: "Tahun pengalaman", d: "Kami telah beroperasi sejak 2012, meningkatkan kualitas layanan setiap hari." },
  { n: "15+", t: "Bidang spesialisasi", d: "Ruang lingkup klinis luas ditambah laboratorium lengkap dalam satu bangunan." },
  { n: "95%", t: "Pasien puas", d: "Menurut survei internal tahun lalu." },
  { n: "98%", t: "Akurasi diagnostik", d: "Berkat peralatan modern.", tag: "Faktanya:" },
];

export function WhyChooseUs() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f6efe6] p-6 md:p-10 lg:p-16">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left: image */}
        <div className="relative overflow-hidden rounded-[24px]">
          <img
            src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=900&h=900&fit=crop"
            alt="Dua dokter"
            className="h-[420px] w-full object-cover md:h-[540px]"
          />
          <div className="absolute bottom-4 left-4 rounded-full bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur">
            Rasanya seperti
          </div>
          <FloatingBadge className="bottom-16 left-4">Dokter Berpengalaman</FloatingBadge>
          <FloatingBadge className="right-4 top-1/2 -translate-y-1/2" style={{ animationDelay: "0.7s" }}>
            Klinik Bersertifikat
          </FloatingBadge>
          <FloatingBadge className="bottom-24 right-4" style={{ animationDelay: "1.4s" }}>
            Peralatan Modern
          </FloatingBadge>
        </div>

        {/* Right: content */}
        <div className="flex flex-col text-[color:var(--color-clinic-ink)]">
          <span className="text-xs uppercase tracking-[0.25em] text-[color:var(--color-clinic-muted)]">[ Keunggulan ]</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-[56px]">
            Mengapa memilih kami
          </h2>
          <div className="mt-4 text-xs uppercase tracking-widest text-[color:var(--color-clinic-muted)]">
            Disediakan oleh
            <div className="mt-1 text-sm font-medium normal-case tracking-normal text-[color:var(--color-clinic-ink)]">
              Ahli medis berlisensi
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {STATS.map((s) => (
              <div key={s.n}>
                <div className="font-display text-4xl font-extrabold md:text-5xl">{s.n}</div>
                <div className="mt-2 text-sm font-semibold">{s.t}</div>
                <p className="mt-1 text-xs leading-relaxed text-[color:var(--color-clinic-muted)]">
                  {s.tag && <span className="mr-1 font-semibold text-[color:var(--color-clinic-ink)]">{s.tag}</span>}
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