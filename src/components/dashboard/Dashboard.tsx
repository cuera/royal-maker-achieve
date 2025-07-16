import { useState } from 'react';
import DashboardSidebar from './DashboardSidebar';
import SkillsRadarChart from './SkillsRadarChart';
import ActivityTimeline from './ActivityTimeline';
import AchievementShowcase from './AchievementShowcase';
import FeedbackSection from './FeedbackSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Clock, Trophy, Users } from 'lucide-react';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const statsCards = [
    {
      title: 'Skills Mastered',
      value: '8',
      change: '+2 this week',
      icon: TrendingUp,
      color: 'text-skill-coding'
    },
    {
      title: 'Hours Logged',
      value: '32',
      change: '10 hrs/day avg',
      icon: Clock,
      color: 'text-skill-electronics'
    },
    {
      title: 'Achievements',
      value: '8',
      change: '3 Epic unlocked',
      icon: Trophy,
      color: 'text-skill-aero'
    },
    {
      title: 'Team Projects',
      value: '6',
      change: '100% completion',
      icon: Users,
      color: 'text-skill-leadership'
    }
  ];

  return (
    <div className="dashboard-theme min-h-screen bg-background flex">
      <DashboardSidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Welcome back, Nabojyoti!</h1>
                <p className="text-muted-foreground mt-1">
                  Track your incredible STEM journey at Royal MakerCamp
                </p>
              </div>
              <Badge variant="outline" className="text-sm bg-primary/10 text-primary border-primary hover:bg-primary/20 transition-colors">
                Level 7 Master ✨
              </Badge>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsCards.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="dashboard-theme bg-card border-border hover:shadow-hover hover:scale-105 transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                        <p className="text-3xl font-bold text-card-foreground group-hover:text-primary transition-colors">{stat.value}</p>
                        <p className="text-sm text-muted-foreground mt-1">{stat.change}</p>
                      </div>
                      <Icon className={`h-8 w-8 ${stat.color} group-hover:scale-110 transition-transform`} />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <SkillsRadarChart />
            <ActivityTimeline />
          </div>

          {/* Secondary Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AchievementShowcase />
            <FeedbackSection />
          </div>

          {/* Footer Section */}
          <div className="mt-8 p-6 rounded-lg bg-gradient-neon hover:shadow-neon transition-all duration-500">
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary-foreground mb-2">
                🎉 Congratulations on Mastering Royal MakerCamp!
              </h3>
              <p className="text-primary-foreground/90 mb-4">
                You've conquered robotics, AI, analytics, coding, and beyond. The future is yours to build!
              </p>
              <div className="flex items-center justify-center gap-6 text-primary-foreground/80">
                <div className="text-center">
                  <div className="text-2xl font-bold">35,000</div>
                  <div className="text-sm">Fellow Innovators</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-sm">Days of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">∞</div>
                  <div className="text-sm">Future Possibilities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;