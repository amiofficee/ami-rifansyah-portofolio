import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { personalInfo } from '@/data/portfolio';

export const metadata = {
	title: 'Kontak - Ami Rifansyah',
	description: 'Hubungi Ami Rifansyah untuk kolaborasi atau pertanyaan.'
};

export default function KontakPage() {
	return (
		<main>
			<Header />
			<Contact personalInfo={personalInfo} />
			<Footer personalInfo={personalInfo} />
		</main>
	);
} 