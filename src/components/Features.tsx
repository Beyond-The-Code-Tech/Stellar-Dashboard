import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, LineChart, Users, Lock } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'AI-Powered Insights',
    description: 'Advanced machine learning algorithms analyze your data in real-time, providing actionable insights.',
  },
  {
    icon: LineChart,
    title: 'Predictive Analytics',
    description: 'Forecast future trends and make data-driven decisions with our predictive modeling.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with real-time commenting and shared dashboards.',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance with industry security standards.',
  },
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Powerful Features for Modern Analytics
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Everything you need to transform your data into actionable insights
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="absolute h-24 w-24 bg-purple-900/20 rounded-full blur-xl"></div>
              <div className="relative">
                <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-purple-600 mx-auto">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-8 text-xl font-semibold text-white text-center">
                  {feature.title}
                </h3>
                <p className="mt-4 text-gray-400 text-center">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}