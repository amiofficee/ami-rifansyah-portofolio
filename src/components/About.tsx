import { PersonalInfo } from '@/types';
import Reveal from '@/components/Reveal';

interface AboutProps {
  personalInfo: PersonalInfo;
}

export default function About({ personalInfo }: AboutProps) {
  const skills = [
    "Effective communication",
    "Problem solving",
    "Time management",
    "Teamwork",
    "Quick adaptation",
    "Continuous learning"
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              About Me
            </h2>
            <p className="text-lg max-w-3xl mx-auto leading-8">
              I am a passionate developer who creates innovative and user-friendly digital solutions.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <Reveal>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Brief Bio
            </h3>
            <div className="space-y-5">
              <p className="leading-8">
                I am a {personalInfo.title} with over 3 years of experience in web and mobile application development. 
                I have a strong passion for modern technology and always strive to learn new things.
              </p>
              <p className="leading-8">
                With a background in various technologies like Next.js, React, Node.js, and various databases, 
                I have successfully completed various complex and challenging projects.
              </p>
              <p className="leading-8">
                I believe that good code quality, optimal user experience, and fast performance 
                are the keys to success in application development.
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
          </Reveal>

          {/* Right Column - Skills */}
          <Reveal className="reveal-stagger">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              General Skills
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
                Motivation & Work Values
              </h4>
              <p className="text-gray-800 dark:text-gray-50 md:text-lg leading-relaxed italic font-medium border-l-4 pl-4 border-blue-500 dark:border-blue-500">
                &ldquo;I believe that technology should make human life easier. Every line of code I write 
                aims to create solutions that not only work well, but also provide 
                an enjoyable experience for users.&rdquo;
              </p>
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
} 