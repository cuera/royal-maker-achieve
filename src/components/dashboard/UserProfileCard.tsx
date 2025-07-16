import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { userProfile } from '@/data/mockData';
import { Clock, BookOpen, Users, TrendingUp } from 'lucide-react';

const UserProfileCard = () => {
  const progressToNextLevel = (userProfile.currentPoints / userProfile.nextLevelRequirement) * 100;

  return (
    <Card className="dashboard-theme bg-card border-border">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <Avatar className="w-16 h-16 ring-2 ring-primary">
            <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
            <AvatarFallback className="text-lg font-semibold bg-primary text-primary-foreground">
              {userProfile.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-card-foreground">{userProfile.name}</h3>
            <p className="text-sm text-muted-foreground">{userProfile.role}</p>
            <Badge variant="outline" className="mt-1 text-xs">
              Level {userProfile.level}
            </Badge>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-card-foreground">Progress to Level {userProfile.level + 1}</span>
              <span className="text-xs text-muted-foreground">
                {userProfile.currentPoints} / {userProfile.nextLevelRequirement} XP
              </span>
            </div>
            <Progress value={progressToNextLevel} className="h-3" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/30">
              <Clock className="w-4 h-4 text-primary" />
              <div>
                <div className="text-lg font-semibold text-card-foreground">{userProfile.totalHours}</div>
                <div className="text-xs text-muted-foreground">Hours</div>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/30">
              <BookOpen className="w-4 h-4 text-accent" />
              <div>
                <div className="text-lg font-semibold text-card-foreground">{userProfile.projects}</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-card-foreground">Team Lead</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/lovable-uploads/536d3df2-484e-41cb-a5e5-5f08fc096bb9.png" />
                <AvatarFallback className="text-xs">AC</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium text-sm text-card-foreground">{userProfile.teamLead}</div>
                <div className="text-xs text-muted-foreground">Senior Mentor</div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-skill-coding" />
              <span className="text-sm font-medium text-card-foreground">Core Skills</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {userProfile.skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;