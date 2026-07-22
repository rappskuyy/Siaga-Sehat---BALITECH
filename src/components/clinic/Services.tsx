import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Stethoscope,
  Mic2,
  MapPin,
  Heart,
} from "lucide-react";
import { ServiceCard, type Service } from "./ServiceCard";

const SERVICES: Service[] = [
  { number: "01", title: "Scanner Penyakit", description: "Analisis kesehatan dengan teknologi AI untuk deteksi dini penyakit.", price: "Tersedia", icon: Stethoscope },
  { number: "02", title: "Konsultasi Suara", description: "Jelaskan gejala Anda dengan mudah melalui speech-to-text untuk diagnosis lebih akurat.", price: "Tersedia", icon: Mic2 },
  { number: "03", title: "Lokasi & Apotek", description: "Temukan klinik terdekat dan apotek dalam satu aplikasi untuk kemudahan Anda.", price: "Tersedia", icon: MapPin },
];

export function Services() {
  const [slide, setSlide] = useState(0);
  const prev = () => setSlide((s) => Math.max(0, s - 1));
  const next = () => setSlide((s) => Math.min(SERVICES.length - 1, s + 1));

  return (
    <section id="services" className="w-full bg-white px-6 py-14 md:px-10 md:py-16">
      {/* Header */}
      <div className="grid gap-6 md:grid-cols-2 md:items-end">
        <div className="flex flex-wrap items-end gap-3">
          <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-[color:var(--color-clinic-ink)] md:text-5xl">
            Layanan Website Kami
          </h2>
          <span className="pb-2 text-sm text-[color:var(--color-clinic-muted)]">(apa yang Anda dapatkan)</span>
        </div>
        <div className="flex flex-col gap-3 md:items-end md:text-right">
          <p className="max-w-md text-sm text-[color:var(--color-clinic-muted)]">
            Dari pemeriksaan rutin hingga diagnostik canggih — layanan kesehatan lengkap dalam satu tempat.
          </p>
          <a href="#services" className="text-sm font-medium text-[color:var(--color-clinic-blue)] hover:underline">
            Lihat semua →
          </a>
        </div>
      </div>

      {/* Desktop grid */}
      <div className="mt-10 hidden gap-5 md:grid md:grid-cols-3">
        <ServiceCard service={SERVICES[0]} />
        <ServiceCard service={SERVICES[1]} />
        <ServiceCard service={SERVICES[2]} />
      </div>

      {/* Mobile carousel */}
      <div className="mt-8 md:hidden">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${slide * 100}%)` }}
          >
            {SERVICES.map((s) => (
              <div key={s.number} className="w-full shrink-0 px-1">
                <ServiceCard service={s} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={prev}
            className="grid h-10 w-10 place-items-center rounded-full border border-black/15 text-[color:var(--color-clinic-ink)] disabled:opacity-40"
            disabled={slide === 0}
            aria-label="Previous"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--color-clinic-blue)] text-white disabled:opacity-40"
            disabled={slide === SERVICES.length - 1}
            aria-label="Next"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function BrandCard() {
  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] bg-[#f3efe8] p-6 text-[color:var(--color-clinic-ink)] shadow-[var(--shadow-clinic)]">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#d9cdb8]/40 blur-2xl" />
      <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-[#c9b89a]/20" />
      <div className="absolute right-6 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-[#b89f79]/20" />
      <div className="relative flex items-center gap-2">
        <Heart className="h-5 w-5 text-[#8d6f43]" />
        <span className="font-display text-lg font-bold tracking-tight">SalvaMedic</span>
      </div>
      <div className="relative">
        <div className="font-display text-2xl font-extrabold leading-tight">
          Perawatan yang <br /> terasa manusiawi.
        </div>
      </div>
    </div>
  );
}