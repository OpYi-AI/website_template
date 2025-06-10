import { CTA } from "@/components/cta";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { TimelineDemo } from "@/components/timeline-demo";
import Image from "next/image";

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