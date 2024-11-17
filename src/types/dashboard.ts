export interface ChartData {
  id: string;
  type: 'line' | 'pie' | 'bar' | 'heatmap';
  title: string;
  data: any[];
}

export interface Widget {
  id: string;
  type: string;
  title: string;
  x: number;
  y: number;
  w: number;
  h: number;
  data?: ChartData;
}

export interface UserSettings {
  theme: 'light' | 'dark';
  layout: Widget[];
}