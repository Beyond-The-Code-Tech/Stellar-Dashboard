import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to',
      stellarDashboard: 'Stellar Dashboard',
      description: 'Experience the next generation of analytics with our cosmic-themed, AI-powered dashboard platform.',
      tryDemo: 'Try Demo',
      features: 'Features',
      demo: 'Demo',
      pricing: 'Pricing',
      getStarted: 'Get Started',
      dashboard: {
        title: 'Analytics Dashboard',
        timeRange: 'Time Range',
        theme: 'Theme',
      },
      cta: {
        startFree: 'Start Free Trial',
        contactSales: 'Contact Sales',
        watchDemo: 'Watch Demo',
      },
    },
  },
  es: {
    translation: {
      welcome: 'Bienvenido a',
      stellarDashboard: 'Panel Estelar',
      description: 'Experimenta la próxima generación de análisis con nuestra plataforma de panel impulsada por IA con tema cósmico.',
      tryDemo: 'Probar Demo',
      features: 'Características',
      demo: 'Demo',
      pricing: 'Precios',
      getStarted: 'Comenzar',
      dashboard: {
        title: 'Panel de Analytics',
        timeRange: 'Rango de Tiempo',
        theme: 'Tema',
      },
      cta: {
        startFree: 'Comenzar Prueba Gratis',
        contactSales: 'Contactar Ventas',
        watchDemo: 'Ver Demo',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;