import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/clinic/Hero";
import { Statement } from "@/components/clinic/Statement";
import { Services } from "@/components/clinic/Services";
import { WhyChooseUs } from "@/components/clinic/WhyChooseUs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Innovation Clinic — SalvaMedic" },
      {
        name: "description",
        content:
          "SalvaMedic Innovation Clinic — advanced diagnostics and a human approach. Family medicine, pediatrics, cardiology and more in Lviv.",
      },
      { property: "og:title", content: "Innovation Clinic — SalvaMedic" },
      {
        property: "og:description",
        content:
          "Advanced diagnostics with a warm human touch. Book with licensed specialists at SalvaMedic.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="hex-pattern min-h-screen bg-[color:var(--color-clinic-blue)] font-sans">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 p-4 md:gap-8 md:p-8">
        <Hero />
        <Statement />
        <Services />
        <WhyChooseUs />
        <footer className="pb-4 pt-2 text-center text-xs text-white/70">
          © {new Date().getFullYear()} SalvaMedic Innovation Clinic. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
