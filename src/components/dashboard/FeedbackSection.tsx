import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { feedbackData } from '@/data/mockData';
import { Star, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const FeedbackSection = () => {
  const [currentFeedback, setCurrentFeedback] = useState(0);
  
  const nextFeedback = () => {
    setCurrentFeedback((prev) => (prev + 1) % feedbackData.length);
  };
  
  const prevFeedback = () => {
    setCurrentFeedback((prev) => (prev - 1 + feedbackData.length) % feedbackData.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}
      />
    ));
  };

  const feedback = feedbackData[currentFeedback];

  return (
    <Card className="dashboard-theme bg-card border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg font-bold text-card-foreground">Mentor Feedback</CardTitle>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="sm"
              onClick={prevFeedback}
              className="h-8 w-8 p-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm text-muted-foreground px-2">
              {currentFeedback + 1} of {feedbackData.length}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={nextFeedback}
              className="h-8 w-8 p-0"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src={feedback.avatar} alt={feedback.name} />
              <AvatarFallback className="bg-primary text-primary-foreground">
                {feedback.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-semibold text-card-foreground">{feedback.name}</h4>
                <Badge variant="outline" className="text-xs">
                  {feedback.role}
                </Badge>
              </div>
              <div className="flex items-center gap-2 mb-2">
                {renderStars(feedback.rating)}
                <span className="text-sm text-muted-foreground">({feedback.rating}/5)</span>
              </div>
              <p className="text-sm text-muted-foreground italic">
                "{feedback.feedback}"
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                {feedback.date}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-lg bg-gradient-skill border border-border">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg font-bold text-card-foreground">
                {(feedbackData.reduce((sum, f) => sum + f.rating, 0) / feedbackData.length).toFixed(1)}
              </div>
              <div className="text-xs text-muted-foreground">Avg Rating</div>
            </div>
            <div>
              <div className="text-lg font-bold text-card-foreground">{feedbackData.length}</div>
              <div className="text-xs text-muted-foreground">Reviews</div>
            </div>
            <div>
              <div className="text-lg font-bold text-card-foreground">100%</div>
              <div className="text-xs text-muted-foreground">Positive</div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-lg bg-muted/30 border border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong>Royal Skill Matrix dashboard</strong> is a powerful tool designed to help you optimize your learning journey. It provides a comprehensive and interactive overview of your skill development, enabling you to track progress, identify strengths, and pinpoint areas for improvement. With more data this will improve.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeedbackSection;