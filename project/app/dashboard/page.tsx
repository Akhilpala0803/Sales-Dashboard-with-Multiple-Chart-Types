'use client';

import { useState, useMemo } from 'react';
import DashboardSidebar from '@/components/dashboard/dashboard-sidebar';
import DashboardHeader from '@/components/dashboard/dashboard-header';
import StatsCards from '@/components/dashboard/stats-cards';
import BarChartComponent from '@/components/charts/bar-chart';
import LineChartComponent from '@/components/charts/line-chart';
import PieChartComponent from '@/components/charts/pie-chart';
import { ChartType } from '@/types/dashboard';
import { mockSalesData, statsCards, categoryData } from '@/lib/mock-data';

export default function Dashboard() {
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [threshold, setThreshold] = useState<number>(0);
  const [category, setCategory] = useState<string>('all');

  // Filter data based on threshold and category
  const filteredData = useMemo(() => {
    return mockSalesData.filter(item => {
      const meetsThreshold = item.sales >= threshold;
      const meetsCategory = category === 'all' || item.category === category;
      return meetsThreshold && meetsCategory;
    });
  }, [threshold, category]);

  // Transform data for charts
  const chartData = useMemo(() => {
    return filteredData.map(item => ({
      name: item.month,
      sales: item.sales,
      target: item.target,
      profit: item.profit,
      value: item.sales, // for pie chart
    }));
  }, [filteredData]);

  // Filter category data for pie chart
  const filteredCategoryData = useMemo(() => {
    if (category === 'all') {
      return categoryData;
    }
    return categoryData.filter(item => item.name === category);
  }, [category]);

  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return <BarChartComponent data={chartData} />;
      case 'line':
        return <LineChartComponent data={chartData} />;
      case 'pie':
        return <PieChartComponent data={filteredCategoryData} />;
      default:
        return <BarChartComponent data={chartData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardSidebar />
      
      <div className="lg:pl-72">
        <DashboardHeader
          chartType={chartType}
          onChartTypeChange={setChartType}
          threshold={threshold}
          onThresholdChange={setThreshold}
          category={category}
          onCategoryChange={setCategory}
        />
        
        <main className="py-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Stats Cards */}
            <div className="mb-8">
              <StatsCards stats={statsCards} />
            </div>

            {/* Charts Section */}
            <div className="grid gap-6 lg:grid-cols-3">
              {renderChart()}
              
              {/* Additional Info Card */}
              {chartType !== 'pie' && (
                <div className="lg:col-span-1">
                  <PieChartComponent 
                    data={filteredCategoryData} 
                    title="Category Breakdown"
                  />
                </div>
              )}
              
              {chartType === 'pie' && (
                <div className="lg:col-span-2">
                  <BarChartComponent 
                    data={chartData} 
                    title="Monthly Performance"
                  />
                </div>
              )}
            </div>

            {/* Data Summary */}
            <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Data Summary
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Filtered Records:</span>
                  <span className="ml-2 font-medium">{filteredData.length} months</span>
                </div>
                <div>
                  <span className="text-gray-600">Total Filtered Sales:</span>
                  <span className="ml-2 font-medium">
                    ${filteredData.reduce((sum, item) => sum + item.sales, 0).toLocaleString()}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Average Sales:</span>
                  <span className="ml-2 font-medium">
                    ${Math.round(filteredData.reduce((sum, item) => sum + item.sales, 0) / (filteredData.length || 1)).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}