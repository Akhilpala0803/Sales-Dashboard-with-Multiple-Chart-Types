'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatsCard } from '@/types/dashboard';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Award, 
  BarChart3,
  ArrowUpIcon,
  ArrowDownIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatsCardsProps {
  stats: StatsCard[];
}

const iconMap = {
  DollarSign,
  TrendingUp,
  Award,
  BarChart3,
};

export default function StatsCards({ stats }: StatsCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = iconMap[stat.icon as keyof typeof iconMap] || DollarSign;
        const TrendIcon = stat.trend === 'up' ? ArrowUpIcon : ArrowDownIcon;
        
        return (
          <Card key={index} className="transition-all duration-200 hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="flex items-center mt-1">
                <TrendIcon 
                  className={cn(
                    "h-3 w-3 mr-1",
                    stat.trend === 'up' ? "text-green-500" : "text-red-500"
                  )} 
                />
                <p className={cn(
                  "text-xs font-medium",
                  stat.trend === 'up' ? "text-green-600" : "text-red-600"
                )}>
                  {stat.change}
                  <span className="text-gray-500 ml-1">from last month</span>
                </p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}