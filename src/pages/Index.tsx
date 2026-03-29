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
    <Header />
    <div data-header-theme="dark"><Hero /></div>
    <div data-header-theme="light"><SocialProof /></div>
    <div data-header-theme="light"><ServiceGrid /></div>
    <div data-header-theme="light"><HowItWorks /></div>
    <div data-header-theme="light"><WhyUs /></div>
    <div data-header-theme="dark"><EmergencyCTA /></div>
    <div data-header-theme="light"><Testimonials /></div>
    <div data-header-theme="light"><About /></div>
    <div data-header-theme="light"><ServiceAreas /></div>
    <div data-header-theme="dark"><ContactForm /></div>
    <div data-header-theme="dark"><Footer /></div>
    <MobileCTABar />
  </div>
);

export default Index;
