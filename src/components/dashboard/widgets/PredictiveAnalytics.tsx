import React from 'react';
import { motion } from 'framer-motion';
import { Card, Title, LineChart } from '@tremor/react';
import { TrendingUp, AlertTriangle } from 'lucide-react';
import { useTheme } from '../../../hooks/useTheme';

const predictiveData = [
  { date: '2024-03', Actual: 3200, Predicted: 3150 },
  { date: '2024-04', Actual: 3400, Predicted: 3600 },
  { date: '2024-05', Actual: null, Predicted: 3900 },
  { date: '2024-06', Actual: null, Predicted: 4200 },
];

export default function PredictiveAnalytics() {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <Card className={`${theme.bgColor} p-6 rounded-xl shadow-xl`}>
        <div className="flex items-center justify-between">
          <Title className={theme.textColor}>Predictive Analysis</Title>
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-green-500" />
            <span className="text-green-500 text-sm">+12% Expected Growth</span>
          </div>
        </div>
        
        <div className="mt-4">
          <LineChart
            className="h-72"
            data={predictiveData}
            index="date"
            categories={["Actual", "Predicted"]}
            colors={["purple", "indigo"]}
            connectNulls={true}
          />
        </div>

        <div className="mt-4 p-3 bg-yellow-500/10 rounded-lg flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5 text-yellow-500" />
          <span className="text-yellow-500 text-sm">Potential market fluctuation detected in Q3</span>
        </div>
      </Card>
    </motion.div>
  );
}