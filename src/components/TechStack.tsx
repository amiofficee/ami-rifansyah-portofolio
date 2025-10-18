import { TechStack as TechStackType } from '@/types';
import Reveal from '@/components/Reveal';

interface TechStackProps {
  techStack: TechStackType[];
}

export default function TechStack({ techStack }: TechStackProps) {
  const getTechIcon = (tech: string) => {
    const techIcons: { [key: string]: string } = {
      'Next.js': '⚛️',
      'React.js': '⚛️',
      'TypeScript': '📘',
      'Tailwind CSS': '🎨',
      'Redux': '🔄',
      'Zustand': '🐻',
      'Node.js': '🟢',
      'Express.js': '🚀',
      'Laravel': '🔴',
      'PHP': '🐘',
      'REST API': '🔌',
      'GraphQL': '🔵',
      'MySQL': '🐬',
      'MongoDB': '🍃',
      'PostgreSQL': '🐘',
      'Redis': '🔴',
      'Prisma': '🟦',
      'Sequelize': '🔵',
      'Git': '📝',
      'Docker': '🐳',
      'Vercel': '▲',
      'Postman': '📮',
      'Figma': '🎨',
      'Jira': '🟢',
      'AWS': '☁️'
    };
    
    return techIcons[tech] || '💻';
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Teknologi & Stack
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Berbagai teknologi yang saya kuasai dan gunakan dalam pengembangan aplikasi
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((category, index) => (
            <Reveal key={index} delayMs={index * 100}>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                {category.category}
              </h3>
              <div className="space-y-3 reveal-stagger">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="text-2xl mr-3">{getTechIcon(tech)}</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            </Reveal>
          ))}
        </div>

        {/* Additional Info */}
        <Reveal>
          <div className="mt-16 text-center">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 max-w-4xl mx-auto border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Pengalaman Teknologi
              </h3>
              <p className="text-gray-600 dark:text-gray-200 leading-relaxed mb-6">
                Saya telah bekerja dengan berbagai teknologi modern dan selalu berusaha untuk mengikuti 
                perkembangan terbaru dalam dunia pengembangan software. Setiap teknologi memiliki 
                keunggulan tersendiri dan saya memilih teknologi yang tepat sesuai dengan kebutuhan proyek.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                  <div className="text-gray-600 dark:text-gray-300">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                  <div className="text-gray-600 dark:text-gray-300">Teknologi Dikuasai</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600 dark:text-gray-300">Proyek Selesai</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
} 