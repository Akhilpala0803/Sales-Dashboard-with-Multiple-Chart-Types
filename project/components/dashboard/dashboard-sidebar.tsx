'use client';

import { cn } from '@/lib/utils';
import { 
  BarChart3, 
  Home, 
  Settings, 
  Users, 
  FileText, 
  TrendingUp,
  PieChart,
  Activity
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Sales', href: '/sales', icon: TrendingUp },
  { name: 'Reports', href: '/reports', icon: FileText },
  { name: 'Customers', href: '/customers', icon: Users },
  { name: 'Activity', href: '/activity', icon: Activity },
  { name: 'Insights', href: '/insights', icon: PieChart },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <BarChart3 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">SalesDash</span>
          </div>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          isActive
                            ? 'bg-blue-50 text-blue-700'
                            : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium transition-colors duration-200'
                        )}
                      >
                        <item.icon
                          className={cn(
                            isActive ? 'text-blue-700' : 'text-gray-400 group-hover:text-blue-700',
                            'h-5 w-5 shrink-0 transition-colors duration-200'
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}