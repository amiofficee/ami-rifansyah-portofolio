import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import { projects, personalInfo } from '@/data/portfolio';

export const metadata = {
	title: 'Proyek - Ami Rifansyah',
	description: 'Daftar proyek Ami Rifansyah.'
};

export default function ProyekPage() {
	return (
		<main>
			<Header />
			<Projects projects={projects} />
			<Footer personalInfo={personalInfo} />
		</main>
	);
} 