import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { personalInfo, techStack, projects, experiences } from '@/data/portfolio';
import HashScrollHandler from '@/components/HashScrollHandler';

export default function Home() {
  return (
    <main>
      <Header />
      <HashScrollHandler />
      <Hero personalInfo={personalInfo} />
      <About personalInfo={personalInfo} />
      <TechStack techStack={techStack} />
      <Projects projects={projects} />
      <Experience experiences={experiences} />
      <Contact personalInfo={personalInfo} />
      <Footer personalInfo={personalInfo} />
    </main>
  );
}
