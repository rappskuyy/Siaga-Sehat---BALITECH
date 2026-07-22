import { ArrowUpRight, type LucideIcon } from "lucide-react";

export interface Service {
  number: string;
  title: string;
  description: string;
  price: string;
  icon: LucideIcon;
}

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="group relative flex h-full flex-col rounded-[24px] bg-white p-6 shadow-[var(--shadow-clinic)] transition duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[var(--shadow-clinic-lg)]">
      <div className="flex items-start justify-between">
        <span
          className="font-display text-5xl font-extrabold leading-none tracking-tight text-transparent"
          style={{ WebkitTextStroke: "1px rgba(17,17,17,0.18)" }}
        >
          {service.number}
        </span>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--color-clinic-blue-soft)] text-[color:var(--color-clinic-blue)]">
          <Icon className="h-4 w-4" />
        </span>
      </div>

      <h3 className="mt-6 font-display text-xl font-bold text-[color:var(--color-clinic-ink)]">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-clinic-muted)]">
        {service.description}
      </p>

      <div className="mt-6 flex items-end justify-between gap-3">
        <a
          href="#book"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--color-clinic-blue)] hover:underline"
        >
          Make an appointment
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
        <span className="text-xs font-semibold text-[color:var(--color-clinic-ink)]">
          {service.price}
        </span>
      </div>
    </article>
  );
}