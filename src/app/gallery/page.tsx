import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import { galleryImages, personalInfo } from '@/data/portfolio';

export default function GalleryPage() {
  return (
    <main>
      <Header />
      <Gallery images={galleryImages} />
      <Footer personalInfo={personalInfo} />
    </main>
  );
} 