import EmergencyBar from "@/components/EmergencyBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ServiceGrid from "@/components/ServiceGrid";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import EmergencyCTA from "@/components/EmergencyCTA";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import ServiceAreas from "@/components/ServiceAreas";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";

const Index = () => (
  <div className="pb-16 md:pb-0">
    <EmergencyBar />
    <Header />
    <Hero />
    <SocialProof />
    <ServiceGrid />
    <HowItWorks />
    <WhyUs />
    <EmergencyCTA />
    <Testimonials />
    <About />
    <ServiceAreas />
    <ContactForm />
    <Footer />
    <MobileCTABar />
  </div>
);

export default Index;
