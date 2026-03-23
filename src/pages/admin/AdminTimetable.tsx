import React, { useState } from 'react';
import { Sidebar } from '../../components/ui/Sidebar';
import { TopNav } from '../../components/ui/TopNav';
import { TimetableEvent, WeeklyCalendar } from '../../components/ui/WeeklyCalendar';
import { Button } from '../../components/ui/UIKit';
import { Download, CheckCircle2, AlertTriangle } from 'lucide-react';
import { TIMETABLE_EVENTS } from '../../data';

export function AdminTimetable() {
  const [major, setMajor] = useState('Computer Science');
  const [semester, setSemester] = useState('Semester 5');
  const [events, setEvents] = useState<TimetableEvent[]>(TIMETABLE_EVENTS);

  const addEvent = (event: TimetableEvent) => {
    setEvents((prev) => [...prev, event]);
  };

  const deleteEvent = (id: string) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };

  return (
    <div className="min-h-screen bg-ink-50 flex">
      <Sidebar role="admin" />
      <div className="flex-1 md:ml-[240px] flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-5">

            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
                <div>
                  <label className="section-header block">Department</label>
                  <select value={major} onChange={e => setMajor(e.target.value)} className="input-field w-full sm:w-56">
                    <option>Computer Science</option><option>Mathematics</option>
                    <option>Physics</option><option>Electrical Engineering</option>
                  </select>
                </div>
                <div>
                  <label className="section-header block">Semester</label>
                  <select value={semester} onChange={e => setSemester(e.target.value)} className="input-field w-full sm:w-44">
                    {[1,2,3,4,5,6].map(n => <option key={n}>Semester {n}</option>)}
                  </select>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 lg:border-l-2 lg:border-ink-200 lg:pl-4">
                <div className="flex items-center gap-1.5 text-sm font-bold text-emerald-700">
                  <CheckCircle2 size={16} className="text-emerald-500" /> 0 Conflicts
                </div>
                <div className="flex items-center gap-1.5 text-sm font-medium text-ink-400">
                  <AlertTriangle size={16} /> 0 Warnings
                </div>
                <Button size="sm" variant="outline" leftIcon={<Download size={14} />}>Export PDF</Button>
              </div>
            </div>

            <WeeklyCalendar
              events={events}
              role="admin"
              editable
              onAddEvent={addEvent}
              onDeleteEvent={deleteEvent}
            />

          </div>
        </main>
      </div>
    </div>
  );
}
