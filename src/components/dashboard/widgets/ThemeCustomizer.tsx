import React from 'react';
import { Palette } from 'lucide-react';
import { Select, SelectItem } from '@tremor/react';
import { useTheme } from '../../../hooks/useTheme';

const themes = [
  { value: 'nebulaPurple', label: 'Nebula Purple' },
  { value: 'starburstBlue', label: 'Starburst Blue' },
  { value: 'cosmicRed', label: 'Cosmic Red' },
];

export default function ThemeCustomizer() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <Palette className={`h-5 w-5 ${theme.textColor}`} />
      <Select
        value={theme.name}
        onValueChange={setTheme}
        className="min-w-[150px]"
      >
        {themes.map((t) => (
          <SelectItem key={t.value} value={t.value}>
            {t.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}