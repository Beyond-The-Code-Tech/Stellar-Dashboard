import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Card, Title, Text } from '@tremor/react';
import { useTheme } from '../../../hooks/useTheme';

const data = [
  { date: '2024-01', Revenue: 2890, Profit: 2400 },
  { date: '2024-02', Revenue: 3890, Profit: 3200 },
  { date: '2024-03', Revenue: 3490, Profit: 2900 },
];

export default function SmartWidgets({ timeRange }: { timeRange: string }) {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="space-y-6"
    >
      <Card className={`${theme.bgColor} p-6 rounded-xl shadow-xl`}>
        <Title className={theme.textColor}>Revenue Overview</Title>
        <Text className={`${theme.textColor} opacity-70`}>
          Last {timeRange} performance
        </Text>
        <AreaChart
          className="mt-4 h-72"
          data={data}
          index="date"
          categories={["Revenue", "Profit"]}
          colors={["purple", "indigo"]}
        />
      </Card>
    </motion.div>
  );
}