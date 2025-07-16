import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from 'recharts';
import { skillsData, skillCategories } from '@/data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsRadarChart = () => {
  const chartData = skillsData.map(skill => ({
    skill: skillCategories[skill.category]?.name || skill.skill,
    current: skill.currentLevel,
    target: skill.targetLevel,
    fullMark: 100,
    category: skill.category,
    improvement: skill.improvement,
    timeSpent: skill.timeSpent
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-elevated">
          <p className="font-semibold text-card-foreground">{label}</p>
          <p className="text-sm text-muted-foreground">
            Current: <span className="text-accent font-medium">{data.current}%</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Target: <span className="text-primary font-medium">{data.target}%</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Improvement: <span className="text-secondary font-medium">+{data.improvement}%</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Time spent: <span className="font-medium">{data.timeSpent}h</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="dashboard-theme col-span-2 bg-card border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-card-foreground">Skills Assessment</CardTitle>
          <Badge variant="outline" className="text-sm">
            Overall Progress: 82%
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          Track your STEM skills development throughout the Royal MakerCamp journey
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={chartData} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
              <PolarGrid 
                stroke="hsl(var(--border))"
                className="opacity-30"
              />
              <PolarAngleAxis 
                dataKey="skill" 
                tick={{ 
                  fill: 'hsl(var(--card-foreground))', 
                  fontSize: 12,
                  fontWeight: 500
                }}
                className="text-xs"
              />
              <PolarRadiusAxis
                angle={90}
                domain={[0, 100]}
                tick={{ 
                  fill: 'hsl(var(--muted-foreground))', 
                  fontSize: 10 
                }}
                tickCount={6}
              />
              <Radar
                name="Target"
                dataKey="target"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.1}
                strokeWidth={2}
                strokeDasharray="5 5"
              />
              <Radar
                name="Current"
                dataKey="current"
                stroke="hsl(var(--accent))"
                fill="hsl(var(--accent))"
                fillOpacity={0.2}
                strokeWidth={3}
                className="drop-shadow-glow"
              />
              <Tooltip content={<CustomTooltip />} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          {skillsData.map((skill, index) => {
            const category = skillCategories[skill.category];
            return (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                <div className="text-2xl">{category?.icon}</div>
                <div className="flex-1">
                  <div className="font-medium text-sm text-card-foreground">{skill.skill}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-accent transition-all duration-500 ease-out"
                        style={{ width: `${skill.currentLevel}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">
                      {skill.currentLevel}%
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsRadarChart;