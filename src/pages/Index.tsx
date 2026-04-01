import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TrustSection from "@/components/TrustSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import DifferentiationSection from "@/components/DifferentiationSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TrustSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <DifferentiationSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
};

export default Index;
