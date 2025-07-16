import { SkillData, TimelineActivity, Achievement, UserProfile, FeedbackData } from '@/types/dashboard';

export const skillsData: SkillData[] = [
  {
    skill: 'Robot Building',
    currentLevel: 85,
    targetLevel: 100,
    category: 'robotics',
    projects: ['Line-Following Bot', 'Remote Control Car'],
    timeSpent: 8,
    improvement: 25
  },
  {
    skill: 'Circuit Design',
    currentLevel: 78,
    targetLevel: 90,
    category: 'electronics',
    projects: ['Traffic Light System', 'LED Matrix Display'],
    timeSpent: 6,
    improvement: 30
  },
  {
    skill: 'Programming Logic',
    currentLevel: 82,
    targetLevel: 95,
    category: 'coding',
    projects: ['Sensor Integration', 'Motor Control'],
    timeSpent: 7,
    improvement: 28
  },
  {
    skill: 'Aerodynamics',
    currentLevel: 73,
    targetLevel: 85,
    category: 'aeromodelling',
    projects: ['Paper Rockets', 'Glider Design'],
    timeSpent: 4,
    improvement: 35
  },
  {
    skill: 'Team Leadership',
    currentLevel: 88,
    targetLevel: 95,
    category: 'leadership',
    projects: ['Project Presentation', 'Peer Mentoring'],
    timeSpent: 5,
    improvement: 20
  },
  {
    skill: 'Problem Solving',
    currentLevel: 90,
    targetLevel: 95,
    category: 'problemSolving',
    projects: ['Debug Sessions', 'Creative Solutions'],
    timeSpent: 9,
    improvement: 15
  }
];

export const timelineData: TimelineActivity[] = [
  {
    day: 1,
    time: '9:00 AM',
    activity: 'Circuit Basics & LED Control',
    skillsGained: ['Electronics', 'Circuit Design'],
    difficulty: 'Beginner',
    collaborators: ['Alex Cooper', 'Sarah Johnson'],
    outcome: 'Built first functioning LED circuit',
    category: 'Electronics'
  },
  {
    day: 1,
    time: '11:00 AM',
    activity: 'Introduction to Robotics',
    skillsGained: ['Robotics', 'Mechanical Design'],
    difficulty: 'Beginner',
    collaborators: ['Mike Chen', 'Lisa Park'],
    outcome: 'Assembled basic robot chassis',
    category: 'Robotics'
  },
  {
    day: 1,
    time: '2:00 PM',
    activity: 'Programming Fundamentals',
    skillsGained: ['Coding', 'Logic Building'],
    difficulty: 'Beginner',
    collaborators: ['Emma Davis', 'Ryan Kumar'],
    outcome: 'Created first automated program',
    category: 'Coding'
  },
  {
    day: 2,
    time: '9:30 AM',
    activity: 'Advanced Circuit Integration',
    skillsGained: ['Electronics', 'System Design'],
    difficulty: 'Intermediate',
    collaborators: ['Alex Cooper', 'Maria Santos'],
    outcome: 'Built traffic light automation system',
    category: 'Electronics'
  },
  {
    day: 2,
    time: '1:00 PM',
    activity: 'Line-Following Robot Challenge',
    skillsGained: ['Robotics', 'Sensor Integration'],
    difficulty: 'Intermediate',
    collaborators: ['David Kim', 'Priya Patel'],
    outcome: 'Successfully navigated complex course',
    category: 'Robotics'
  },
  {
    day: 3,
    time: '10:00 AM',
    activity: 'Rocket Design & Launch',
    skillsGained: ['Aerodynamics', 'Physics'],
    difficulty: 'Advanced',
    collaborators: ['Sophie Wilson', 'Ahmed Ali'],
    outcome: 'Achieved highest altitude record',
    category: 'Aeromodelling'
  }
];

export const achievements: Achievement[] = [
  {
    id: 'first-robot',
    title: 'Robot Builder',
    description: 'Successfully built and programmed first robot',
    icon: '🤖',
    category: 'Robotics',
    earnedDate: '2025-07-08',
    rarity: 'Common',
    points: 100
  },
  {
    id: 'circuit-master',
    title: 'Circuit Wizard',
    description: 'Designed complex traffic light automation system',
    icon: '⚡',
    category: 'Electronics',
    earnedDate: '2025-07-09',
    rarity: 'Uncommon',
    points: 250
  },
  {
    id: 'code-ninja',
    title: 'Code Ninja',
    description: 'Mastered sensor integration programming',
    icon: '💻',
    category: 'Coding',
    earnedDate: '2025-07-09',
    rarity: 'Rare',
    points: 400
  },
  {
    id: 'rocket-scientist',
    title: 'Rocket Scientist',
    description: 'Achieved highest altitude in rocket challenge',
    icon: '🚀',
    category: 'Aeromodelling',
    earnedDate: '2025-07-10',
    rarity: 'Epic',
    points: 750
  },
  {
    id: 'team-leader',
    title: 'Team Leader',
    description: 'Successfully led project team to completion',
    icon: '👥',
    category: 'Leadership',
    earnedDate: '2025-07-10',
    rarity: 'Uncommon',
    points: 300
  },
  {
    id: 'innovator',
    title: 'Innovation Master',
    description: 'Created unique solution to complex problem',
    icon: '💡',
    category: 'Problem Solving',
    earnedDate: '2025-07-10',
    rarity: 'Rare',
    points: 500
  }
];

export const userProfile: UserProfile = {
  name: 'Monica Austin',
  avatar: '/lovable-uploads/536d3df2-484e-41cb-a5e5-5f08fc096bb9.png',
  role: 'STEM Innovator',
  teamLead: 'Alex Cooper',
  skills: ['Robotics', 'Electronics', 'Programming', 'Leadership'],
  totalHours: 24,
  projects: 6,
  level: 3,
  currentPoints: 2300,
  nextLevelRequirement: 3000
};

export const feedbackData: FeedbackData[] = [
  {
    id: '1',
    name: 'Alex Cooper',
    role: 'Team Lead',
    avatar: '/lovable-uploads/536d3df2-484e-41cb-a5e5-5f08fc096bb9.png',
    feedback: 'Exceptional problem-solving skills and great teamwork throughout the program',
    date: 'July 10, 2025',
    rating: 5
  },
  {
    id: '2',
    name: 'Dr. Sarah Johnson',
    role: 'Robotics Instructor',
    avatar: '/lovable-uploads/536d3df2-484e-41cb-a5e5-5f08fc096bb9.png',
    feedback: 'Outstanding technical understanding and creative approach to challenges',
    date: 'July 10, 2025',
    rating: 5
  },
  {
    id: '3',
    name: 'Prof. Mike Chen',
    role: 'Electronics Mentor',
    avatar: '/lovable-uploads/536d3df2-484e-41cb-a5e5-5f08fc096bb9.png',
    feedback: 'Impressive circuit design skills and attention to detail',
    date: 'July 9, 2025',
    rating: 4
  }
];

export const skillCategories = {
  robotics: { color: '#3b82f6', icon: '🤖', name: 'Robotics' },
  electronics: { color: '#f59e0b', icon: '⚡', name: 'Electronics' },
  coding: { color: '#10b981', icon: '💻', name: 'Coding' },
  aeromodelling: { color: '#ef4444', icon: '🚀', name: 'Aeromodelling' },
  leadership: { color: '#8b5cf6', icon: '👥', name: 'Leadership' },
  problemSolving: { color: '#f97316', icon: '🧠', name: 'Problem Solving' }
};