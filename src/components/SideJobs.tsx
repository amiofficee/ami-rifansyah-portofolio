"use client";

import Image from 'next/image';
import Reveal from '@/components/Reveal';

export type SideJobItem = {
  id: string;
  company: string;
  role: string;
  description: string;
  image?: string;
};

interface SideJobsProps {
  title?: string;
  subtitle?: string;
  items: SideJobItem[];
}

export default function SideJobs({ title = 'Side Projects & Kolaborasi', subtitle = 'Beberapa side job di mana saya membantu perusahaan memiliki solusi/aplikasi digital untuk memperluas usahanya.', items }: SideJobsProps) {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">{title}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
          </div>
        </Reveal>

        <div className="space-y-10">
          {items.map((item, index) => (
            <Reveal key={item.id} delayMs={index * 120}>
              <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div className="w-full h-56 md:h-64 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                  {item.image ? (
                    <Image src={item.image} alt={item.company} width={640} height={400} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-center p-6">
                      <svg className="w-16 h-16 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300 font-medium">{item.company}</span>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{item.company}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1">{item.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


