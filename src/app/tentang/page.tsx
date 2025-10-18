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
      company: 'UMKM Kopi Nusantara',
      role: 'Frontend Engineer (Freelance)',
      description: 'Membangun landing page promosi dan dashboard pemesanan sederhana untuk membantu ekspansi penjualan ke kanal digital.',
      image: '/images/profile/ami.jpeg'
    },
    {
      id: 'sj-2',
      company: 'Distribusi Sejahtera',
      role: 'Fullstack Developer (Side Project)',
      description: 'Membuat aplikasi internal untuk katalog produk dan pencatatan pemesanan antar-cabang sehingga alur operasional lebih efisien.',
      image: '/images/profile/ami2.jpeg'
    },
    {
      id: 'sj-3',
      company: 'HealthCare Local',
      role: 'Frontend Engineer (Support)',
      description: 'Membantu tim membuat prototipe appointment online dan edukasi layanan untuk memperluas jangkauan pasien.',
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