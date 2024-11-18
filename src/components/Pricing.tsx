import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '49',
    features: [
      'Up to 5 team members',
      'Basic analytics',
      'Real-time dashboard',
      '24/7 support',
    ],
  },
  {
    name: 'Professional',
    price: '99',
    popular: true,
    features: [
      'Up to 20 team members',
      'Advanced analytics',
      'AI-powered insights',
      'Custom reporting',
      'API access',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Unlimited team members',
      'Full feature access',
      'Dedicated support',
      'Custom integration',
      'SLA guarantee',
    ],
  },
];

export default function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="pricing" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Choose the perfect plan for your needs
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative rounded-2xl ${
                plan.popular
                  ? 'bg-purple-900/20 border-2 border-purple-500'
                  : 'bg-gray-800'
              } p-8`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-6 transform -translate-y-1/2">
                  <span className="inline-flex rounded-full bg-purple-500 px-4 py-1 text-sm font-semibold text-white">
                    Popular
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-5xl font-extrabold text-white">
                    ${plan.price}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span className="ml-1 text-xl text-gray-400">/month</span>
                  )}
                </div>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-purple-400" />
                    <span className="ml-3 text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <button className="w-full rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700 transition-colors">
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}