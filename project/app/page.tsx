import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { BarChart3, LineChart, PieChart, Filter, TrendingUp, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">SalesDash</span>
            </div>
            <Link href="/dashboard">
              <Button>Go to Dashboard</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Sales Dashboard
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            A modern, interactive sales dashboard built with Next.js 15, TypeScript, and Tailwind CSS. 
            Visualize your sales data with multiple chart types and advanced filtering capabilities.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/dashboard">
              <Button size="lg" className="px-8 py-3">
                View Dashboard
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 py-3">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Powerful Features</h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to analyze and visualize your sales data
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="transition-all duration-200 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                <CardTitle>Multiple Chart Types</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Switch between bar, line, and pie charts to visualize your data in different ways
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="transition-all duration-200 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-green-600" />
                <CardTitle>Advanced Filtering</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Set custom sales thresholds and filter by categories to focus on specific data
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="transition-all duration-200 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-orange-600" />
                <CardTitle>Real-time Analytics</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Track key metrics including total sales, growth rates, and performance trends
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="transition-all duration-200 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-2">
                <LineChart className="h-5 w-5 text-purple-600" />
                <CardTitle>Interactive Charts</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Hover over data points for detailed information and smooth animations
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="transition-all duration-200 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-red-600" />
                <CardTitle>Responsive Design</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Optimized for all devices - desktop, tablet, and mobile with touch-friendly interfaces
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="transition-all duration-200 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-teal-600" />
                <CardTitle>Professional UI</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Clean, modern interface with smooth transitions and intuitive navigation
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">
              Ready to explore your data?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Start analyzing your sales performance with our interactive dashboard
            </p>
            <div className="mt-8">
              <Link href="/dashboard">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Get Started Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="text-center text-sm text-gray-600">
            <p>&copy; 2024 SalesDash. Built with Next.js 15, TypeScript, and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}