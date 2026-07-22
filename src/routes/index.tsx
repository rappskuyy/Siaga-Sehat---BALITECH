import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/clinic/Hero";
import { Statement } from "@/components/clinic/Statement";
import { Services } from "@/components/clinic/Services";
import { WhyChooseUs } from "@/components/clinic/WhyChooseUs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Klinik Inovasi — SalvaMedic" },
      {
        name: "description",
        content:
          "Klinik Inovasi SalvaMedic — diagnostik canggih dengan pendekatan manusiawi. Layanan kesehatan terpadu dengan dokter berlisensi.",
      },
      { property: "og:title", content: "Klinik Inovasi — SalvaMedic" },
      {
        property: "og:description",
        content:
          "Diagnostik canggih dengan sentuhan manusiawi. Konsultasikan dengan spesialis berlisensi di SalvaMedic.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] font-sans">
      <div className="flex w-full flex-col">
        <Hero />
        <Statement />
        <Services />
        <WhyChooseUs />
        <footer className="pb-4 pt-2 text-center text-xs text-[color:var(--color-clinic-muted)]">
          © {new Date().getFullYear()} Klinik Inovasi SalvaMedic. Semua hak dilindungi.
        </footer>
      </div>
    </main>
  );
}
