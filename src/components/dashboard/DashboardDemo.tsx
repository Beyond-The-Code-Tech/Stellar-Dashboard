import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SmartWidgets from './widgets/SmartWidgets';
import GeoAnalytics from './widgets/GeoAnalytics';
import PredictiveAnalytics from './widgets/PredictiveAnalytics';
import TimelineSlider from './widgets/TimelineSlider';
import ThemeCustomizer from './widgets/ThemeCustomizer';
import VoiceCommands from './widgets/VoiceCommands';
import CollaborationTools from './widgets/CollaborationTools';
import { useTheme } from '../../hooks/useTheme';

export default function DashboardDemo() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`min-h-screen ${theme.bgColor}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
          <h1 className={`text-3xl font-bold ${theme.textColor}`}>
            {t('dashboard.title', 'Analytics Dashboard')}
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <TimelineSlider
              value={selectedTimeRange}
              onChange={setSelectedTimeRange}
            />
            <ThemeCustomizer />
            <VoiceCommands />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <SmartWidgets timeRange={selectedTimeRange} />
          </div>
          <div>
            <GeoAnalytics />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PredictiveAnalytics />
          <CollaborationTools />
        </div>
      </div>
    </motion.div>
  );
}