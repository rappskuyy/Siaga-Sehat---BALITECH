import { ArrowUpRight, Sparkles } from "lucide-react";

const AVATARS = [
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=60&h=60&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=60&h=60&fit=crop&crop=faces",
];

export function Statement() {
  return (
    <section className="rounded-[32px] bg-white px-6 py-16 text-center shadow-[var(--shadow-clinic)] md:px-16 md:py-24">
      <p className="mx-auto max-w-4xl font-display text-2xl font-medium leading-snug text-[color:var(--color-clinic-ink)] md:text-3xl lg:text-[32px]">
        We combine <span className="font-extrabold">innovative</span>{" "}
        <span className="mx-1 inline-flex h-9 w-9 -translate-y-1 items-center justify-center rounded-full bg-[color:var(--color-clinic-blue-soft)] align-middle text-[color:var(--color-clinic-blue)]">
          <Sparkles className="h-4 w-4" />
        </span>{" "}
        technologies with a human approach to make every patient{" "}
        <span className="mx-1 inline-flex -translate-y-1 items-center align-middle">
          <span className="flex -space-x-2">
            {AVATARS.map((a) => (
              <img key={a} src={a} alt="" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
            ))}
          </span>
        </span>{" "}
        <span className="font-extrabold">feel confident and calm.</span>
      </p>

      <p className="mx-auto mt-6 max-w-xl text-sm text-[color:var(--color-clinic-muted)]">
        Trusted by families across Lviv since 2012.
      </p>

      <a
        href="#about"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-black/15 py-2 pl-6 pr-2 text-sm font-medium text-[color:var(--color-clinic-ink)] transition hover:bg-black/5"
      >
        More about us
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[color:var(--color-clinic-ink)] text-white">
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </a>
    </section>
  );
}