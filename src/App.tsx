import React from 'react';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { LineChart } from './components/charts/LineChart';
import { PieChart } from './components/charts/PieChart';
import { BarChart } from './components/charts/BarChart';
import { HeatMap } from './components/charts/HeatMap';

// Sample data generators
const generateLineData = () => {
  const data = [];
  const now = new Date();
  for (let i = 30; i >= 0; i--) {
    data.push({
      date: new Date(now.getTime() - i * 24 * 60 * 60 * 1000),
      value: Math.random() * 100,
    });
  }
  return data;
};

const generatePieData = () => [
  { label: 'Mobile', value: 35 },
  { label: 'Desktop', value: 45 },
  { label: 'Tablet', value: 20 },
];

const generateBarData = () => [
  { label: 'Jan', value: 45 },
  { label: 'Feb', value: 52 },
  { label: 'Mar', value: 38 },
  { label: 'Apr', value: 65 },
  { label: 'May', value: 48 },
];

const generateHeatMapData = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const times = ['Morning', 'Afternoon', 'Evening'];
  const data = [];
  
  for (const day of days) {
    for (const time of times) {
      data.push({
        x: day,
        y: time,
        value: Math.floor(Math.random() * 100),
      });
    }
  }
  return data;
};

function App() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Revenue Trends
          </h3>
          <LineChart data={generateLineData()} width={400} height={300} />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Device Distribution
          </h3>
          <PieChart data={generatePieData()} width={400} height={300} />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Monthly Sales
          </h3>
          <BarChart data={generateBarData()} width={400} height={300} />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Activity Heatmap
          </h3>
          <HeatMap data={generateHeatMapData()} width={400} height={300} />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default App;