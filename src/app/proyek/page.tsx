import type { Metadata } from 'next';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import { projects, personalInfo } from '@/data/portfolio';

export const metadata: Metadata = {
	title: 'Proyek',
	description: 'Daftar proyek yang dikerjakan Ami Rifansyah: aplikasi web, platform e-commerce, dashboard admin, Chrome extension, dan lainnya.',
	alternates: { canonical: '/proyek' }
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