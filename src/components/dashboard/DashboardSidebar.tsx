import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  BarChart3, 
  Trophy, 
  Clock, 
  Users, 
  Target, 
  BookOpen,
  Search,
  Settings,
  Menu,
  X
} from 'lucide-react';
import UserProfileCard from './UserProfileCard';

interface DashboardSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigation = [
  { id: 'overview', name: 'Dashboard', icon: BarChart3 },
  { id: 'skills', name: 'My Skills', icon: Target },
  { id: 'activities', name: 'Activities', icon: Clock },
  { id: 'achievements', name: 'Achievements', icon: Trophy },
  { id: 'team', name: 'Team', icon: Users },
  { id: 'resources', name: 'Resources', icon: BookOpen },
];

const DashboardSidebar = ({ activeSection, onSectionChange }: DashboardSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={cn(
      "dashboard-theme bg-sidebar border-r border-sidebar-border transition-all duration-300",
      isCollapsed ? "w-16" : "w-80"
    )}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <div>
                <h1 className="text-xl font-bold text-sidebar-foreground">Royal MakerCamp</h1>
                <p className="text-sm text-sidebar-foreground/70">Skills Dashboard</p>
              </div>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="text-sidebar-foreground hover:bg-sidebar-accent"
            >
              {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Search */}
        {!isCollapsed && (
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-sidebar-foreground/50" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 bg-sidebar-accent border border-sidebar-border rounded-lg text-sm text-sidebar-foreground placeholder:text-sidebar-foreground/50 focus:outline-none focus:ring-2 focus:ring-sidebar-ring"
              />
            </div>
          </div>
        )}

        {/* User Profile */}
        {!isCollapsed && (
          <div className="px-4 mb-4">
            <UserProfileCard />
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 px-4">
          <div className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent",
                    isCollapsed ? "px-2" : "px-4",
                    activeSection === item.id && "bg-sidebar-primary text-sidebar-primary-foreground"
                  )}
                  onClick={() => onSectionChange(item.id)}
                >
                  <Icon className={cn("h-4 w-4", !isCollapsed && "mr-3")} />
                  {!isCollapsed && <span>{item.name}</span>}
                </Button>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-sidebar-border">
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent",
              isCollapsed ? "px-2" : "px-4"
            )}
          >
            <Settings className={cn("h-4 w-4", !isCollapsed && "mr-3")} />
            {!isCollapsed && <span>Settings</span>}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;