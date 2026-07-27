import { ServiceItem } from "@/types";
import Reveal from "@/components/Reveal";

interface ServicesProps {
  services: ServiceItem[];
}

export default function Services({ services }: ServicesProps) {
  return (
    <section
      id="services"
      className="py-20 bg-gray-50 dark:bg-gray-800 text-[var(--foreground)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Services
            </h2>
            <p className="text-lg max-w-3xl mx-auto leading-8 text-gray-600 dark:text-gray-300">
              Beyond being a Fullstack Developer, I also help businesses build
              digital solutions and provide technical consulting tailored to
              their needs.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.id} delayMs={index * 100}>
                <div className="h-full p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-50 dark:bg-blue-900/30 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                    {service.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mt-2 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
