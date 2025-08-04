'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ChartType } from '@/types/dashboard';
import { BarChart3, LineChart, PieChart, Filter } from 'lucide-react';

interface DashboardHeaderProps {
  chartType: ChartType;
  onChartTypeChange: (type: ChartType) => void;
  threshold: number;
  onThresholdChange: (threshold: number) => void;
  category: string;
  onCategoryChange: (category: string) => void;
}

export default function DashboardHeader({
  chartType,
  onChartTypeChange,
  threshold,
  onThresholdChange,
  category,
  onCategoryChange,
}: DashboardHeaderProps) {
  const chartTypes: { value: ChartType; label: string; icon: any }[] = [
    { value: 'bar', label: 'Bar Chart', icon: BarChart3 },
    { value: 'line', label: 'Line Chart', icon: LineChart },
    { value: 'pie', label: 'Pie Chart', icon: PieChart },
  ];

  return (
    <div className="border-b border-gray-200 bg-white px-6 py-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Sales Dashboard</h1>
          <p className="text-sm text-gray-600">
            Track and analyze your sales performance
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          {/* Chart Type Selector */}
          <div className="flex gap-2">
            {chartTypes.map((type) => {
              const Icon = type.icon;
              return (
                <Button
                  key={type.value}
                  variant={chartType === type.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => onChartTypeChange(type.value)}
                  className="flex items-center gap-2"
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{type.label}</span>
                </Button>
              );
            })}
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4 rounded-lg border border-gray-200 p-3">
            <Filter className="h-4 w-4 text-gray-500" />
            
            <div className="flex items-center gap-2">
              <Label htmlFor="threshold" className="text-xs font-medium text-gray-600">
                Min Sales:
              </Label>
              <Input
                id="threshold"
                type="number"
                value={threshold}
                onChange={(e) => onThresholdChange(Number(e.target.value))}
                className="w-24 h-8"
                placeholder="0"
              />
            </div>

            <div className="flex items-center gap-2">
              <Label htmlFor="category" className="text-xs font-medium text-gray-600">
                Category:
              </Label>
              <Select value={category} onValueChange={onCategoryChange}>
                <SelectTrigger className="w-32 h-8">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="Electronics">Electronics</SelectItem>
                  <SelectItem value="Clothing">Clothing</SelectItem>
                  <SelectItem value="Home & Garden">Home & Garden</SelectItem>
                  <SelectItem value="Sports">Sports</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}