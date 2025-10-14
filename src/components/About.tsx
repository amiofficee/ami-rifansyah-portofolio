import { PersonalInfo } from '@/types';

interface AboutProps {
  personalInfo: PersonalInfo;
}

export default function About({ personalInfo }: AboutProps) {
  const skills = [
    "Komunikasi yang efektif",
    "Problem solving",
    "Manajemen waktu",
    "Kerja tim",
    "Adaptasi cepat",
    "Continuous learning"
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Tentang Saya
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-8">
            Saya adalah seorang developer yang passionate dalam menciptakan solusi digital yang inovatif dan user-friendly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Biodata Singkat
            </h3>
            <div className="space-y-5">
              <p className="leading-8">
                Saya adalah {personalInfo.title} dengan pengalaman lebih dari 3 tahun dalam pengembangan aplikasi web dan mobile. 
                Saya memiliki passion yang kuat dalam teknologi modern dan selalu berusaha untuk belajar hal-hal baru.
              </p>
              <p className="leading-8">
                Dengan latar belakang di berbagai teknologi seperti Next.js, React, Node.js, dan berbagai database, 
                saya telah berhasil menyelesaikan berbagai proyek yang kompleks dan menantang.
              </p>
              <p className="leading-8">
                Saya percaya bahwa kualitas kode yang baik, user experience yang optimal, dan performa yang cepat 
                adalah kunci kesuksesan dalam pengembangan aplikasi.
              </p>
            </div>

            {/* CV Download */}
            {personalInfo.cv && (
              <div className="mt-8">
                <a
                  href={personalInfo.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV
                </a>
              </div>
            )}
          </div>

          {/* Right Column - Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Skill Umum
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                </div>
              ))}
            </div>

            {/* Motivation */}
            <div className="mt-8 p-6 bg-blue-50 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 rounded-lg border border-blue-100 dark:border-gray-700 ring-1 ring-blue-100 dark:ring-gray-600 shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-blue-500 mb-3">
                Motivasi & Nilai Kerja
              </h4>
              <p className="text-gray-800 dark:text-gray-50 md:text-lg leading-relaxed italic font-medium border-l-4 pl-4 border-blue-500 dark:border-blue-500">
                "Saya percaya bahwa teknologi harus memudahkan hidup manusia. Setiap baris kode yang saya tulis 
                bertujuan untuk menciptakan solusi yang tidak hanya berfungsi dengan baik, tetapi juga memberikan 
                pengalaman yang menyenangkan bagi pengguna."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 