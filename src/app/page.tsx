import ProfileCard from '@/components/ProfileCard';
import StatsCard from '@/components/StatsCard';
import { Code2, Zap, BarChart3, Star, Send, FileText } from 'lucide-react';

const generateData = (trend: 'up' | 'down' | 'stable') => {
  const data = [];
  const months = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];
  let value = 20000;

  for (const month of months) {
    if (trend === 'up') value += Math.random() * 5000;
    else if (trend === 'down') value -= Math.random() * 2000;
    else value += (Math.random() - 0.5) * 5000;

    // Ensure positive
    value = Math.max(value, 1000);

    data.push({
      name: month,
      value: Math.round(value)
    });
  }
  return data;
};

const projects = [
  {
    title: 'SomeProject',
    revenue: '$22.1k/mo',
    description: 'Learn to code in weeks, not years',
    icon: <Code2 size={24} />,
    data: generateData('down'),
    isActive: false
  },
  {
    title: 'SomeProject',
    revenue: '$20.9k/mo',
    description: 'Ship your startup in days, not months',
    icon: <Zap size={24} color="#f59e0b" fill="#f59e0b" />,
    data: generateData('stable'),
    isActive: false
  },
  {
    title: 'SomeProject',
    revenue: '$16.2k/mo',
    description: 'Grow your startup with data, not guesses',
    icon: <BarChart3 size={24} color="#ef4444" />,
    data: generateData('up'),
    isActive: false
  },
  {
    title: 'SomeProject',
    revenue: '$18.6k/mo',
    description: 'The database of verified startup revenues',
    icon: <Star size={24} color="#3b82f6" fill="#3b82f6" />,
    data: generateData('up'),
    isActive: false
  },
  {
    title: 'SomeProject',
    revenue: '$483/mo',
    description: 'Focus on your startup, not the invoices',
    icon: <Send size={24} color="#10b981" />,
    data: generateData('up'),
    isActive: false
  },
  {
    title: 'SomeProject',
    revenue: '$830/mo',
    description: 'All your startups in a page, like this one',
    icon: <FileText size={24} color="#6366f1" />,
    data: generateData('up'),
    isActive: false
  }
];

export default function Home() {
  return (
    <main className="dashboardContainer">
      <aside>
        <ProfileCard />
      </aside>

      <div className="dashboardGrid">
        {projects.map((project) => (
          <StatsCard
            key={project.title}
            title={project.title}
            revenue={project.revenue}
            description={project.description}
            icon={project.icon}
            data={project.data}
            isActive={project.isActive}
          />
        ))}
      </div>
    </main>
  );
}
