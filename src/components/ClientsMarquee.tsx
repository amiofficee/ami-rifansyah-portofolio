"use client";

import Image from 'next/image';
import Reveal from '@/components/Reveal';

type ClientLogo = {
  id: string;
  name: string;
  src: string;
  href?: string | null;
};

interface ClientsMarqueeProps {
  title?: string;
  subtitle?: string;
  logos: ClientLogo[];
}

export default function ClientsMarquee({ title = 'Pernah Bekerja Sama Dengan', subtitle = 'Beberapa brand/perusahaan yang pernah saya bantu dalam side job.', logos }: ClientsMarqueeProps) {
  // Normalize list: ensure enough items to visually fill the track even if logos are few
  const baseLogos = logos.length
    ? Array.from({ length: Math.max(6, logos.length) }, (_, i) => logos[i % logos.length])
    : [];
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">{title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{subtitle}</p>
          </div>
        </Reveal>

        <div className="relative overflow-hidden marquee-fade">
          <div className="marquee flex will-change-transform animate-marquee">
            <div className="marquee-group flex items-center gap-0">
              {baseLogos.map((logo, idx) => (
                logo.href ? (
                  <a
                    key={`g1-${logo.id}-${idx}`}
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center shrink-0 opacity-85 hover:opacity-100 transition-opacity h-24 min-w-[220px] px-8"
                  >
                    <Image src={logo.src} alt={logo.name} width={260} height={120} className="max-h-16 md:max-h-20 w-auto object-contain" />
                    <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-100 text-xs font-medium px-2 py-1 shadow-sm border border-gray-200 dark:border-gray-700 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                      {logo.name}
                    </span>
                  </a>
                ) : (
                  <div
                    key={`g1-${logo.id}-${idx}`}
                    className="group relative flex items-center justify-center shrink-0 opacity-85 hover:opacity-100 transition-opacity h-24 min-w-[220px] px-8"
                  >
                    <Image src={logo.src} alt={logo.name} width={260} height={120} className="max-h-16 md:max-h-20 w-auto object-contain" />
                    <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-100 text-xs font-medium px-2 py-1 shadow-sm border border-gray-200 dark:border-gray-700 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                      {logo.name}
                    </span>
                  </div>
                )
              ))}
            </div>
            <div className="marquee-group flex items-center gap-0" aria-hidden="true">
              {baseLogos.map((logo, idx) => (
                logo.href ? (
                  <a
                    key={`g2-${logo.id}-${idx}`}
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center shrink-0 opacity-85 hover:opacity-100 transition-opacity h-24 min-w-[220px] px-8"
                  >
                    <Image src={logo.src} alt={logo.name} width={260} height={120} className="max-h-16 md:max-h-20 w-auto object-contain" />
                    <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-100 text-xs font-medium px-2 py-1 shadow-sm border border-gray-200 dark:border-gray-700 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                      {logo.name}
                    </span>
                  </a>
                ) : (
                  <div
                    key={`g2-${logo.id}-${idx}`}
                    className="group relative flex items-center justify-center shrink-0 opacity-85 hover:opacity-100 transition-opacity h-24 min-w-[220px] px-8"
                  >
                    <Image src={logo.src} alt={logo.name} width={260} height={120} className="max-h-16 md:max-h-20 w-auto object-contain" />
                    <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-100 text-xs font-medium px-2 py-1 shadow-sm border border-gray-200 dark:border-gray-700 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                      {logo.name}
                    </span>
                  </div>
                )
              ))}
            </div>
            <div className="marquee-group flex items-center gap-0" aria-hidden="true">
              {baseLogos.map((logo, idx) => (
                logo.href ? (
                  <a
                    key={`g3-${logo.id}-${idx}`}
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center shrink-0 opacity-85 hover:opacity-100 transition-opacity h-24 min-w-[220px] px-8"
                  >
                    <Image src={logo.src} alt={logo.name} width={260} height={120} className="max-h-16 md:max-h-20 w-auto object-contain" />
                    <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-100 text-xs font-medium px-2 py-1 shadow-sm border border-gray-200 dark:border-gray-700 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                      {logo.name}
                    </span>
                  </a>
                ) : (
                  <div
                    key={`g3-${logo.id}-${idx}`}
                    className="group relative flex items-center justify-center shrink-0 opacity-85 hover:opacity-100 transition-opacity h-24 min-w-[220px] px-8"
                  >
                    <Image src={logo.src} alt={logo.name} width={260} height={120} className="max-h-16 md:max-h-20 w-auto object-contain" />
                    <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-100 text-xs font-medium px-2 py-1 shadow-sm border border-gray-200 dark:border-gray-700 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                      {logo.name}
                    </span>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.3333%, 0, 0); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        .marquee-group > div { /* normalize baseline to avoid overlap */
          display: inline-flex;
        }
        /* fade edges to hide any seam */
        .marquee-fade {
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
                  mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; }
        }
      `}</style>
    </section>
  );
}


