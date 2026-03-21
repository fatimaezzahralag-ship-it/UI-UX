import { Sidebar } from '../../components/ui/Sidebar';
import { TopNav } from '../../components/ui/TopNav';
import { StatCard, StatusBadge } from '../../components/ui/UIKit';
import { TIMETABLE_EVENTS, MODULES } from '../../data';
import { CalendarDays, BookOpen, Users, Clock } from 'lucide-react';

export function TeacherDashboard() {
  const teacherEvents = TIMETABLE_EVENTS.filter((event) => event.teacher === 'Dr. Chen');
  const upcomingEvents = teacherEvents.slice(0, 4);
  const teacherModules = MODULES.filter((module) => module.teacher === 'Dr. Chen');

  return (
    <div className="min-h-screen bg-ink-50 flex">
      <Sidebar role="teacher" />
      <div className="flex-1 ml-[240px] flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard title="This Week Classes" value={teacherEvents.length} icon={<CalendarDays size={16} />} accent="bg-violet-500" />
              <StatCard title="Active Modules" value={teacherModules.length} icon={<BookOpen size={16} />} accent="bg-blue-500" />
              <StatCard title="Total Students" value={teacherModules.reduce((acc, module) => acc + module.students, 0)} icon={<Users size={16} />} accent="bg-emerald-500" />
              <StatCard title="Teaching Hours" value={`${teacherEvents.reduce((acc, event) => acc + event.duration, 0)}h`} icon={<Clock size={16} />} accent="bg-amber-500" />
            </div>

            <section className="card p-5">
              <h3 className="text-base font-extrabold text-ink-950 mb-4">Upcoming Sessions</h3>
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border-2 border-ink-100 rounded-xl p-3 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-extrabold text-ink-900">{event.title}</p>
                      <p className="text-xs text-ink-500 font-medium mt-0.5">{event.room} · {event.duration}h</p>
                    </div>
                    <StatusBadge status={event.type === 'theory' ? 'approved' : 'online'} label={event.type} />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
