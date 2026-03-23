import { useState } from 'react';
import { Download } from 'lucide-react';
import { Sidebar } from '../../components/ui/Sidebar';
import { TopNav } from '../../components/ui/TopNav';
import { Button } from '../../components/ui/UIKit';
import { TimetableEvent, WeeklyCalendar } from '../../components/ui/WeeklyCalendar';
import { TIMETABLE_EVENTS } from '../../data';

export function StudentTimetable() {
  const [events, setEvents] = useState<TimetableEvent[]>(TIMETABLE_EVENTS);

  const addEvent = (event: TimetableEvent) => {
    setEvents((prev) => [...prev, event]);
  };

  const deleteEvent = (id: string) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };

  return (
    <div className="min-h-screen bg-ink-50 flex">
      <Sidebar role="student" />
      <div className="flex-1 md:ml-[240px] flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-4 md:space-y-5">
            <div className="flex items-center justify-end gap-2">
              <Button size="sm" variant="outline" leftIcon={<Download size={14} />}>Export PDF</Button>
            </div>
            <WeeklyCalendar
              events={events}
              role="student"
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
