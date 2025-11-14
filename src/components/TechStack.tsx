import { TechStack as TechStackType } from '@/types';
import Reveal from '@/components/Reveal';

interface TechStackProps {
  techStack: TechStackType[];
}

export default function TechStack({ techStack }: TechStackProps) {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Technology & Stack
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Various technologies I master and use in application development
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
                      <span className="text-2xl mr-3" style={{ color: tech.color }}>
                        <tech.icon />
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {tech.name}
                      </span>
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
                Technology Experience
              </h3>
              <p className="text-gray-600 dark:text-gray-200 leading-relaxed mb-6">
                I have worked with various modern technologies and always strive to follow 
                the latest developments in the software development world. Each technology has 
                its own advantages and I choose the right technology according to project needs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                  <div className="text-gray-600 dark:text-gray-300">Technologies Mastered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                  <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
