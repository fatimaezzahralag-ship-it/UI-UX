import { Sidebar } from '../../components/ui/Sidebar';
import { TopNav } from '../../components/ui/TopNav';
import { StatCard, StatusBadge } from '../../components/ui/UIKit';
import { MODULES, TIMETABLE_EVENTS } from '../../data';
import { Calendar, BookOpen, MessageSquare, GraduationCap } from 'lucide-react';

export function StudentDashboard() {
  const myModules = MODULES.filter((module) => module.semester === 'S5').slice(0, 4);
  const myEvents = TIMETABLE_EVENTS.slice(0, 5);

  return (
    <div className="min-h-screen bg-ink-50 flex">
      <Sidebar role="student" />
      <div className="flex-1 ml-[240px] flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard title="My Modules" value={myModules.length} icon={<BookOpen size={16} />} accent="bg-brand-500" />
              <StatCard title="Classes This Week" value={myEvents.length} icon={<Calendar size={16} />} accent="bg-blue-500" />
              <StatCard title="Unread Messages" value={2} icon={<MessageSquare size={16} />} accent="bg-violet-500" />
              <StatCard title="Current Level" value="S5" icon={<GraduationCap size={16} />} accent="bg-emerald-500" />
            </div>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="card p-5">
                <h3 className="text-base font-extrabold text-ink-950 mb-4">Today Schedule</h3>
                <div className="space-y-3">
                  {myEvents.slice(0, 3).map((event) => (
                    <div key={event.id} className="border-2 border-ink-100 rounded-xl p-3 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-extrabold text-ink-900">{event.title}</p>
                        <p className="text-xs text-ink-500 font-medium mt-0.5">{event.startHour}:00 · {event.room}</p>
                      </div>
                      <StatusBadge status={event.type === 'theory' ? 'approved' : 'online'} label={event.type} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-5">
                <h3 className="text-base font-extrabold text-ink-950 mb-4">My Modules</h3>
                <div className="space-y-3">
                  {myModules.map((module) => (
                    <div key={module.id} className="border-2 border-ink-100 rounded-xl p-3">
                      <p className="text-sm font-extrabold text-ink-900">{module.name}</p>
                      <p className="text-xs text-ink-500 font-medium mt-0.5">{module.teacher}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
