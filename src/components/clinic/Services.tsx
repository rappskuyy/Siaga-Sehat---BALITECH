import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Baby,
  Heart,
  HeartPulse,
  Stethoscope,
  Activity,
  Flower2,
} from "lucide-react";
import { ServiceCard, type Service } from "./ServiceCard";

const SERVICES: Service[] = [
  { number: "01", title: "Family medicine", description: "Primary care for every stage of life.", price: "from $40", icon: Stethoscope },
  { number: "02", title: "Pediatrics", description: "Gentle care for infants, children and teens.", price: "from $35", icon: Baby },
  { number: "03", title: "Women's health", description: "Comprehensive gynecology and wellness.", price: "from $50", icon: Flower2 },
  { number: "04", title: "Cardiology", description: "Advanced diagnostics for a healthy heart.", price: "from $65", icon: HeartPulse },
  { number: "05", title: "Ultrasound & Lab", description: "Same-day imaging and laboratory results.", price: "from $30", icon: Activity },
];

export function Services() {
  const [slide, setSlide] = useState(0);
  const prev = () => setSlide((s) => Math.max(0, s - 1));
  const next = () => setSlide((s) => Math.min(SERVICES.length - 1, s + 1));

  return (
    <section id="services" className="rounded-[32px] bg-white px-6 py-14 shadow-[var(--shadow-clinic)] md:px-10 md:py-16">
      {/* Header */}
      <div className="grid gap-6 md:grid-cols-2 md:items-end">
        <div className="flex flex-wrap items-end gap-3">
          <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-[color:var(--color-clinic-ink)] md:text-5xl">
            Our medical services
          </h2>
          <span className="pb-2 text-sm text-[color:var(--color-clinic-muted)]">(what you get)</span>
        </div>
        <div className="flex flex-col gap-3 md:items-end md:text-right">
          <p className="max-w-md text-sm text-[color:var(--color-clinic-muted)]">
            From everyday check-ups to advanced diagnostics — a full circle of care under one roof.
          </p>
          <a href="#services" className="text-sm font-medium text-[color:var(--color-clinic-blue)] hover:underline">
            See all →
          </a>
        </div>
      </div>

      {/* Desktop grid */}
      <div className="mt-10 hidden gap-5 md:grid md:grid-cols-4">
        <ServiceCard service={SERVICES[0]} />
        <BrandCard />
        <ServiceCard service={SERVICES[1]} />
        <ServiceCard service={SERVICES[2]} />
        <ServiceCard service={SERVICES[3]} />
        <ServiceCard service={SERVICES[4]} />
        <PhotoCard
          src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=700&fit=crop"
          alt="Smiling child at clinic"
        />
        <PhotoCard
          src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&h=700&fit=crop"
          alt="Doctor consulting patient"
        />
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
    <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] bg-[color:var(--color-clinic-blue)] p-6 text-white shadow-[var(--shadow-clinic)]">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-white/15" />
      <div className="absolute right-6 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-white/20" />
      <div className="relative flex items-center gap-2">
        <Heart className="h-5 w-5" />
        <span className="font-display text-lg font-bold tracking-tight">SalvaMedic</span>
      </div>
      <div className="relative">
        <div className="font-display text-2xl font-extrabold leading-tight">
          Care that <br /> feels human.
        </div>
      </div>
    </div>
  );
}

function PhotoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative overflow-hidden rounded-[24px] shadow-[var(--shadow-clinic)]">
      <img src={src} alt={alt} className="h-full min-h-[220px] w-full object-cover" />
    </div>
  );
}