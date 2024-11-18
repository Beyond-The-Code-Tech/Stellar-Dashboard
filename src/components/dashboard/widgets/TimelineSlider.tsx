import React from 'react';
import { Select, SelectItem } from '@tremor/react';
import { Calendar } from 'lucide-react';
import { useTheme } from '../../../hooks/useTheme';

interface TimelineSliderProps {
  value: string;
  onChange: (value: string) => void;
}

const timeRanges = [
  { value: '24h', label: 'Last 24 Hours' },
  { value: '7d', label: 'Last 7 Days' },
  { value: '30d', label: 'Last 30 Days' },
  { value: '90d', label: 'Last Quarter' },
  { value: '1y', label: 'Last Year' },
];

export default function TimelineSlider({ value, onChange }: TimelineSliderProps) {
  const { theme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <Calendar className={`h-5 w-5 ${theme.textColor}`} />
      <Select
        value={value}
        onValueChange={onChange}
        className="min-w-[150px]"
      >
        {timeRanges.map((range) => (
          <SelectItem key={range.value} value={range.value}>
            {range.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}