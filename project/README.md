# Sales Dashboard

A modern, interactive sales dashboard built with Next.js 15, TypeScript, and Tailwind CSS. Features multiple chart visualizations, real-time filtering, and a responsive design.

## Features

- 📊 **Multiple Chart Types**: Switch between bar, line, and pie charts
- 🔍 **Custom Filtering**: Set custom sales thresholds to filter data
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile
- 🎨 **Modern UI**: Clean, professional interface with smooth animations
- 📈 **Real-time Updates**: Dynamic data filtering and chart updates
- 🌙 **Theme Support**: Built-in light/dark theme capabilities

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **UI Components**: Radix UI (shadcn/ui)
- **Icons**: Lucide React

## Project Structure

```
├── app/
│   ├── dashboard/
│   │   └── page.tsx          # Main dashboard page
│   ├── globals.css           # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── charts/
│   │   ├── bar-chart.tsx    # Bar chart component
│   │   ├── line-chart.tsx   # Line chart component
│   │   └── pie-chart.tsx    # Pie chart component
│   ├── dashboard/
│   │   ├── dashboard-header.tsx  # Header with filters
│   │   ├── dashboard-sidebar.tsx # Navigation sidebar
│   │   └── stats-cards.tsx      # Statistics cards
│   └── ui/                  # Reusable UI components
├── lib/
│   ├── mock-data.ts         # Mock sales data
│   └── utils.ts             # Utility functions
└── types/
    └── dashboard.ts         # TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd sales-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Usage

### Dashboard Features

1. **Chart Types**: Use the chart type selector to switch between:
   - Bar Chart: Monthly sales comparison
   - Line Chart: Sales trends over time
   - Pie Chart: Sales distribution by category

2. **Filtering**: Set a custom sales threshold using the input field to filter data points above your specified value.

3. **Statistics**: View key metrics including total sales, average sales, top performer, and growth rate.

### API Integration

The dashboard currently uses mock data. To integrate with a real API:

1. Replace the mock data in `lib/mock-data.ts`
2. Add API calls in your components
3. Update the data fetching logic in the dashboard page

### Customization

- **Themes**: Modify CSS variables in `globals.css`
- **Colors**: Update the color palette in `tailwind.config.ts`
- **Charts**: Customize chart configurations in the respective component files
- **Data**: Modify mock data structure in `lib/mock-data.ts`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) for the React framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Recharts](https://recharts.org/) for chart components
- [Radix UI](https://www.radix-ui.com/) for accessible UI primitives