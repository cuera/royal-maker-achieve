import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { timelineData, skillCategories } from '@/data/mockData';
import { Clock, Users, Target, ChevronLeft, ChevronRight } from 'lucide-react';

const ActivityTimeline = () => {
  const [selectedDay, setSelectedDay] = useState(1);
  
  const filteredActivities = timelineData.filter(activity => activity.day === selectedDay);
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-skill-coding text-white';
      case 'Intermediate': return 'bg-skill-electronics text-white';
      case 'Advanced': return 'bg-skill-aero text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getCategoryIcon = (category: string) => {
    const categoryKey = category.toLowerCase();
    return skillCategories[categoryKey as keyof typeof skillCategories]?.icon || '📚';
  };

  return (
    <Card className="dashboard-theme bg-card border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-card-foreground">3-Day Journey</CardTitle>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedDay(Math.max(1, selectedDay - 1))}
              disabled={selectedDay === 1}
              className="h-8 w-8 p-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium text-card-foreground px-3">
              Day {selectedDay}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedDay(Math.min(3, selectedDay + 1))}
              disabled={selectedDay === 3}
              className="h-8 w-8 p-0"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex gap-2">
          {[1, 2, 3].map(day => (
            <Button
              key={day}
              variant={selectedDay === day ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedDay(day)}
              className="h-8"
            >
              Day {day}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredActivities.map((activity, index) => (
            <div key={index} className="relative">
              {index !== filteredActivities.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-16 bg-border"></div>
              )}
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-xl">
                  {getCategoryIcon(activity.category)}
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {activity.time}
                    </Badge>
                    <Badge className={getDifficultyColor(activity.difficulty)}>
                      {activity.difficulty}
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-card-foreground">{activity.activity}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{activity.outcome}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {activity.skillsGained.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>With: {activity.collaborators.slice(0, 2).join(', ')}</span>
                    {activity.collaborators.length > 2 && (
                      <span>+{activity.collaborators.length - 2} more</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 rounded-lg bg-gradient-skill border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-primary" />
            <span className="font-medium text-card-foreground">Day {selectedDay} Achievements</span>
          </div>
          <p className="text-sm text-muted-foreground">
            {selectedDay === 1 && "Foundation day: Mastered basic electronics and robotics fundamentals"}
            {selectedDay === 2 && "Integration day: Combined skills to build complex automated systems"}
            {selectedDay === 3 && "Innovation day: Applied knowledge to create advanced aerodynamic solutions"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityTimeline;