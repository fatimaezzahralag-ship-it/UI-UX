import React from 'react';
import { Sidebar } from '../../components/ui/Sidebar';
import { TopNav } from '../../components/ui/TopNav';
import { StatCard } from '../../components/ui/UIKit';
import { BookOpen, Calendar, MessageSquare, Star } from 'lucide-react';

export function StudentDashboard() {
  return (
    <div className="min-h-screen bg-ink-50 flex">
      <Sidebar role="student" />
      <div className="flex-1 md:ml-[240px] flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard title="My Modules" value="6" icon={<BookOpen size={16} />} accent="bg-brand-500" />
              <StatCard title="Classes Today" value="3" icon={<Calendar size={16} />} accent="bg-blue-500" />
              <StatCard title="Unread Messages" value="2" icon={<MessageSquare size={16} />} accent="bg-violet-500" />
              <StatCard title="Skill Points" value="350" icon={<Star size={16} />} accent="bg-amber-500" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
