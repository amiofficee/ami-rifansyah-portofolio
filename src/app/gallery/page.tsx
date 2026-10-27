import type { Metadata } from 'next';
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import { galleryImages, personalInfo } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Galeri foto dan dokumentasi kegiatan Ami Rifansyah sebagai fullstack developer dan konsultan IT.',
  alternates: { canonical: '/gallery' }
};

export default function GalleryPage() {
  return (
    <main>
      <Header />
      <Gallery images={galleryImages} />
      <Footer personalInfo={personalInfo} />
    </main>
  );
} 