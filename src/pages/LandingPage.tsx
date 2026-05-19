import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TypicalProjectTimelines } from "@/components/TypicalProjectTimelines";
import { SocialProof } from "@/components/SocialProof";
import { Stats } from "@/components/Stats";
import { WhoItsFor } from "@/components/WhoItsFor";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { TechStack } from "@/components/TechStack";
import { CaseStudies } from "@/components/CaseStudies";
import { Testimonials } from "@/components/Testimonials";
import { HowIBuild } from "@/components/HowIBuild";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { StickyCTA } from "@/components/StickyCTA";
import { ExitIntentModal } from "@/components/ExitIntentModal";

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgressBar />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TypicalProjectTimelines />
        <SocialProof />
        <Stats />
        <WhoItsFor />
        <Services />
        <HowItWorks />
        <TechStack />
        <CaseStudies />
        <Testimonials />
        <HowIBuild />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
      <ExitIntentModal />
    </div>
  );
}
