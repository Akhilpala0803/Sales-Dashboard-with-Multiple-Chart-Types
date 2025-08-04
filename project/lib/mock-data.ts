import { SalesData, StatsCard } from '@/types/dashboard';

export const mockSalesData: SalesData[] = [
  {
    id: '1',
    month: 'Jan',
    sales: 45000,
    target: 50000,
    category: 'Electronics',
    region: 'North',
    profit: 12000,
    date: '2024-01-01'
  },
  {
    id: '2',
    month: 'Feb',
    sales: 52000,
    target: 55000,
    category: 'Clothing',
    region: 'South',
    profit: 15600,
    date: '2024-02-01'
  },
  {
    id: '3',
    month: 'Mar',
    sales: 48000,
    target: 50000,
    category: 'Electronics',
    region: 'East',
    profit: 14400,
    date: '2024-03-01'
  },
  {
    id: '4',
    month: 'Apr',
    sales: 61000,
    target: 60000,
    category: 'Home & Garden',
    region: 'West',
    profit: 18300,
    date: '2024-04-01'
  },
  {
    id: '5',
    month: 'May',
    sales: 55000,
    target: 58000,
    category: 'Sports',
    region: 'North',
    profit: 16500,
    date: '2024-05-01'
  },
  {
    id: '6',
    month: 'Jun',
    sales: 67000,
    target: 65000,
    category: 'Electronics',
    region: 'South',
    profit: 20100,
    date: '2024-06-01'
  },
  {
    id: '7',
    month: 'Jul',
    sales: 72000,
    target: 70000,
    category: 'Clothing',
    region: 'East',
    profit: 21600,
    date: '2024-07-01'
  },
  {
    id: '8',
    month: 'Aug',
    sales: 68000,
    target: 68000,
    category: 'Home & Garden',
    region: 'West',
    profit: 20400,
    date: '2024-08-01'
  },
  {
    id: '9',
    month: 'Sep',
    sales: 74000,
    target: 72000,
    category: 'Sports',
    region: 'North',
    profit: 22200,
    date: '2024-09-01'
  },
  {
    id: '10',
    month: 'Oct',
    sales: 79000,
    target: 75000,
    category: 'Electronics',
    region: 'South',
    profit: 23700,
    date: '2024-10-01'
  },
  {
    id: '11',
    month: 'Nov',
    sales: 82000,
    target: 80000,
    category: 'Clothing',
    region: 'East',
    profit: 24600,
    date: '2024-11-01'
  },
  {
    id: '12',
    month: 'Dec',
    sales: 88000,
    target: 85000,
    category: 'Home & Garden',
    region: 'West',
    profit: 26400,
    date: '2024-12-01'
  }
];

export const statsCards: StatsCard[] = [
  {
    title: 'Total Sales',
    value: '$751,000',
    change: '+12.5%',
    trend: 'up',
    icon: 'DollarSign'
  },
  {
    title: 'Average Monthly Sales',
    value: '$62,583',
    change: '+8.2%',
    trend: 'up',
    icon: 'TrendingUp'
  },
  {
    title: 'Best Performing Month',
    value: 'December',
    change: '$88,000',
    trend: 'up',
    icon: 'Award'
  },
  {
    title: 'Growth Rate',
    value: '15.3%',
    change: '+2.1%',
    trend: 'up',
    icon: 'BarChart3'
  }
];

export const categoryData = [
  { name: 'Electronics', value: 284000, fill: '#3B82F6' },
  { name: 'Clothing', value: 162000, fill: '#10B981' },
  { name: 'Home & Garden', value: 177000, fill: '#F59E0B' },
  { name: 'Sports', value: 128000, fill: '#EF4444' }
];

export const regionData = [
  { name: 'North', value: 246000 },
  { name: 'South', value: 187000 },
  { name: 'East', value: 164000 },
  { name: 'West', value: 154000 }
];