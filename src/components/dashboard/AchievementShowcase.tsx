import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { achievements, userProfile } from '@/data/mockData';
import { Trophy, Star, Award, Zap } from 'lucide-react';

const AchievementShowcase = () => {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'border-skill-coding bg-skill-coding/10 text-skill-coding';
      case 'Uncommon': return 'border-skill-electronics bg-skill-electronics/10 text-skill-electronics';
      case 'Rare': return 'border-skill-aero bg-skill-aero/10 text-skill-aero';
      case 'Epic': return 'border-skill-leadership bg-skill-leadership/10 text-skill-leadership';
      default: return 'border-border bg-muted/10 text-muted-foreground';
    }
  };

  const getRarityIcon = (rarity: string) => {
    switch (rarity) {
      case 'Common': return <Star className="w-4 h-4" />;
      case 'Uncommon': return <Award className="w-4 h-4" />;
      case 'Rare': return <Trophy className="w-4 h-4" />;
      case 'Epic': return <Zap className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  const progressToNextLevel = (userProfile.currentPoints / userProfile.nextLevelRequirement) * 100;

  return (
    <Card className="dashboard-theme bg-card border-border">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-card-foreground">Achievements</CardTitle>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Level {userProfile.level}</span>
            <span className="text-sm text-muted-foreground">
              {userProfile.currentPoints} / {userProfile.nextLevelRequirement} XP
            </span>
          </div>
          <Progress value={progressToNextLevel} className="h-2" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-glow ${getRarityColor(achievement.rarity)} overflow-hidden`}
            >
              <div className="flex items-start gap-3 h-full">
                <div className="text-3xl flex-shrink-0">{achievement.icon}</div>
                <div className="flex-1 min-w-0 space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-semibold text-card-foreground truncate">{achievement.title}</h4>
                    <Badge variant="outline" className={`text-xs flex-shrink-0 ${getRarityColor(achievement.rarity)}`}>
                      {getRarityIcon(achievement.rarity)}
                      {achievement.rarity}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {achievement.description}
                  </p>
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="secondary" className="text-xs flex-shrink-0">
                      {achievement.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground flex-shrink-0">
                      <Trophy className="w-3 h-3" />
                      {achievement.points} XP
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Earned: {new Date(achievement.earnedDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-lg bg-gradient-primary">
          <div className="flex items-center gap-3 mb-3">
            <Trophy className="w-6 h-6 text-primary-foreground" />
            <div>
              <h4 className="font-semibold text-primary-foreground">Achievement Summary</h4>
              <p className="text-sm text-primary-foreground/80">Royal MakerCamp Progress</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground">{achievements.length}</div>
              <div className="text-xs text-primary-foreground/80">Achievements</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground">
                {achievements.reduce((sum, achievement) => sum + achievement.points, 0)}
              </div>
              <div className="text-xs text-primary-foreground/80">Total XP</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground">{userProfile.level}</div>
              <div className="text-xs text-primary-foreground/80">Current Level</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AchievementShowcase;