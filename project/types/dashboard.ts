export interface SalesData {
  id: string;
  month: string;
  sales: number;
  target: number;
  category: string;
  region: string;
  profit: number;
  date: string;
}

export interface ChartData {
  name: string;
  value: number;
  sales?: number;
  target?: number;
  profit?: number;
  fill?: string;
}

export interface StatsCard {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: string;
}

export type ChartType = 'bar' | 'line' | 'pie';

export interface FilterOptions {
  threshold: number;
  category: string;
  region: string;
  dateRange: {
    start: string;
    end: string;
  };
}