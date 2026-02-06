import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import StatsSection from "@/components/landing/StatsSection";
import ValueProposition from "@/components/landing/ValueProposition";
import PlotOptions from "@/components/landing/PlotOptions";
import Amenities from "@/components/landing/Amenities";
import Location from "@/components/landing/Location";
import Differentiation from "@/components/landing/Differentiation";
import EMICalculator from "@/components/landing/EMICalculator";
import LeadForm from "@/components/landing/LeadForm";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />
      <main>
        <HeroSection />
        <StatsSection />
        <ValueProposition />
        <PlotOptions />
        <Amenities />
        <Location />
        <Differentiation />
        <EMICalculator />
        <LeadForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
