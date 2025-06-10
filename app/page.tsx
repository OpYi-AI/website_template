import { CTA } from "@/components/cta";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { TimelineDemo } from "@/components/timeline-demo";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <TimelineDemo />
      <Features />
      <Pricing />
      <CTA />
    </main>
  );
}