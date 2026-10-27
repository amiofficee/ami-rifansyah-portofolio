import type { Metadata } from 'next';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { personalInfo } from '@/data/portfolio';

export const metadata: Metadata = {
	title: 'Kontak',
	description: 'Hubungi Ami Rifansyah untuk proyek freelance, konsultasi IT, atau kolaborasi pengembangan web dan aplikasi mobile.',
	alternates: { canonical: '/kontak' }
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