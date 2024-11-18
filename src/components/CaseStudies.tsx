import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, BarChart2, TrendingUp, Users } from 'lucide-react';

const caseStudies = [
  {
    company: 'TechCorp Inc.',
    metric: '156%',
    description: 'Increase in data-driven decisions',
    icon: BarChart2,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
  },
  {
    company: 'Global Retail',
    metric: '2.4x',
    description: 'Revenue growth using AI insights',
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
  },
  {
    company: 'StartupHub',
    metric: '10k+',
    description: 'Team members collaborating',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80',
  },
];

export default function CaseStudies() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            See how leading companies transform with Stellar Dashboard
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="relative h-64 overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 z-10" />
                <img
                  src={study.image}
                  alt={study.company}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="flex items-center space-x-2 text-purple-400">
                    <study.icon className="h-5 w-5" />
                    <span className="text-2xl font-bold">{study.metric}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {study.company}
                  </h3>
                  <p className="mt-1 text-gray-300">{study.description}</p>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-purple-500/0 rounded-xl group-hover:border-purple-500/100 transition-colors duration-300" />
              <div className="absolute bottom-4 right-4 bg-purple-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}