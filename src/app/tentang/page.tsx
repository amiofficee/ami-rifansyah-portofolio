import Header from '@/components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';
import { personalInfo } from '@/data/portfolio';
import SideJobs, { SideJobItem } from '@/components/SideJobs';

export const metadata = {
	title: 'Tentang - Ami Rifansyah',
	description: 'Tentang Ami Rifansyah, Fullstack Developer.'
};

export default function TentangPage() {
  const sideJobs: SideJobItem[] = [
    {
      id: 'sj-1',
      company: 'Sapuhi',
      role: 'Full Stack Developer (Handover Project)',
      description: 'Took over website maintenance from the previous developer (Laravel), resolving existing bugs and making code adjustments to keep the site stable and running.',
    },
    {
      id: 'sj-2',
      company: 'Mitra Unggul Solusi — Zuno',
      role: 'Full Stack Developer (Freelance)',
      description: 'Designed and implemented new features for the Zuno platform, optimized system architecture for performance and scalability, established coding standards, and mentored junior developers through code reviews.',
    },
    {
      id: 'sj-3',
      company: 'Kelas Tambahan',
      role: 'Lead Developer (Freelance)',
      description: 'Collaborated with the Product Owner to design and build company profile websites — including for Sumber Karya Teknik and Tofico — plus an educational platform.',
    },
    {
      id: 'sj-4',
      company: 'PT. Ikaka Tri Manunggal & Indojaya Soes',
      role: 'Freelance Web Developer',
      description: 'Built company profile websites with Next.js, deployed to Vercel and hPanel, including a custom-built email sending tool to help reduce client operational costs.',
    }
  ];
	return (
		<main>
			<Header />
			<About personalInfo={personalInfo} />
      <SideJobs items={sideJobs} />
			<Footer personalInfo={personalInfo} />
		</main>
	);
} 