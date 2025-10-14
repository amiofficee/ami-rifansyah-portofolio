import Header from '@/components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';
import { personalInfo } from '@/data/portfolio';

export const metadata = {
	title: 'Tentang - Ami Rifansyah',
	description: 'Tentang Ami Rifansyah, Fullstack Developer.'
};

export default function TentangPage() {
	return (
		<main>
			<Header />
			<About personalInfo={personalInfo} />
			<Footer personalInfo={personalInfo} />
		</main>
	);
} 