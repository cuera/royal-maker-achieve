export interface SkillData {
  skill: string;
  currentLevel: number;
  targetLevel: number;
  category: 'robotics' | 'electronics' | 'coding' | 'aeromodelling' | 'leadership' | 'problemSolving' | 'ai' | 'analytics';
  projects: string[];
  timeSpent: number; // in hours
  improvement: number; // percentage
}

export interface TimelineActivity {
  day: 1 | 2 | 3;
  time: string;
  activity: string;
  skillsGained: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  collaborators: string[];
  outcome: string;
  category: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  earnedDate: string;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic';
  points: number;
}

export interface UserProfile {
  name: string;
  avatar: string;
  role: string;
  teamLead: string;
  skills: string[];
  totalHours: number;
  projects: number;
  level: number;
  currentPoints: number;
  nextLevelRequirement: number;
}

export interface FeedbackData {
  id: string;
  name: string;
  role: string;
  avatar: string;
  feedback: string;
  date: string;
  rating: number;
}