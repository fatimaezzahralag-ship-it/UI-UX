import { useMemo, useState } from 'react';
import { Plus, Trash2, X } from 'lucide-react';
import { Button, Input } from './UIKit';

export interface TimetableEvent {
  id: string;
  day: number;
  startHour: number;
  duration: number;
  title: string;
  type: string;
  room: string;
  teacher: string;
  color: string;
}

type Role = 'student' | 'teacher' | 'admin';

interface WeeklyCalendarProps {
  events: TimetableEvent[];
  role: Role;
  editable?: boolean;
  onAddEvent?: (event: TimetableEvent) => void;
  onDeleteEvent?: (id: string) => void;
}

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const START_HOUR = 8;
const END_HOUR = 18;

function formatHour(hour: number): string {
  return `${hour.toString().padStart(2, '0')}:00`;
}

const ROLE_LABEL: Record<Role, string> = {
  admin: 'Administration',
  student: 'Student View',
  teacher: 'Teacher View',
};

export function WeeklyCalendar({
  events,
  role,
  editable = false,
  onAddEvent,
  onDeleteEvent,
}: WeeklyCalendarProps) {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [form, setForm] = useState({
    title: '',
    room: '',
    teacher: '',
    type: 'theory',
    day: 0,
    startHour: START_HOUR,
    duration: 2,
    color: '#3b82f6',
  });

  const hours = Array.from({ length: END_HOUR - START_HOUR }, (_, i) => START_HOUR + i);
  const sortedEvents = useMemo(
    () => [...events].sort((a, b) => a.day - b.day || a.startHour - b.startHour),
    [events],
  );

  const addEvent = () => {
    if (!onAddEvent || !form.title.trim() || !form.room.trim()) return;
    onAddEvent({
      id: `${Date.now()}`,
      title: form.title.trim(),
      room: form.room.trim(),
      teacher: form.teacher.trim() || 'TBD',
      type: form.type,
      day: Number(form.day),
      startHour: Number(form.startHour),
      duration: Number(form.duration),
      color: form.color,
    });
    setIsAddOpen(false);
    setForm({
      title: '',
      room: '',
      teacher: '',
      type: 'theory',
      day: 0,
      startHour: START_HOUR,
      duration: 2,
      color: '#3b82f6',
    });
  };

  return (
    <div className="card overflow-hidden">
      <div className="px-4 md:px-5 py-4 border-b-2 border-ink-950 bg-gradient-to-r from-ink-50 via-white to-ink-50">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-widest font-extrabold text-ink-500">{ROLE_LABEL[role]}</p>
            <h3 className="text-base font-extrabold text-ink-950">Weekly Timetable Planner</h3>
          </div>
          {editable && onAddEvent && (
            <Button size="sm" variant="primary" leftIcon={<Plus size={14} />} onClick={() => setIsAddOpen(true)}>
              Add Session
            </Button>
          )}
        </div>
      </div>

      {isAddOpen && editable && onAddEvent && (
        <div className="m-3 md:m-4 border-2 border-ink-200 rounded-2xl p-4 bg-white">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-extrabold text-ink-900">Create New Session</h4>
            <button onClick={() => setIsAddOpen(false)} className="p-1.5 rounded-lg hover:bg-ink-100">
              <X size={14} className="text-ink-500" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Input label="Title" value={form.title} onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))} placeholder="e.g. Database Systems" />
            <Input label="Room" value={form.room} onChange={(e) => setForm((prev) => ({ ...prev, room: e.target.value }))} placeholder="e.g. Lab 402" />
            <Input label="Teacher" value={form.teacher} onChange={(e) => setForm((prev) => ({ ...prev, teacher: e.target.value }))} placeholder="e.g. Dr. Chen" />
            <div>
              <label className="section-header block mb-1">Day</label>
              <select className="input-field" value={form.day} onChange={(e) => setForm((prev) => ({ ...prev, day: Number(e.target.value) }))}>
                {DAYS.map((day, index) => (
                  <option key={day} value={index}>{day}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="section-header block mb-1">Start Hour</label>
              <select className="input-field" value={form.startHour} onChange={(e) => setForm((prev) => ({ ...prev, startHour: Number(e.target.value) }))}>
                {hours.map((hour) => (
                  <option key={hour} value={hour}>{formatHour(hour)}</option>
                ))}
              </select>
            </div>
            <Input label="Duration (hours)" type="number" min={1} max={4} value={form.duration} onChange={(e) => setForm((prev) => ({ ...prev, duration: Number(e.target.value) || 1 }))} />
            <div>
              <label className="section-header block mb-1">Type</label>
              <select className="input-field" value={form.type} onChange={(e) => setForm((prev) => ({ ...prev, type: e.target.value }))}>
                <option value="theory">Theory</option>
                <option value="lab">Lab</option>
                <option value="practical">Practical</option>
                <option value="online">Online</option>
              </select>
            </div>
            <Input label="Color" type="color" value={form.color} onChange={(e) => setForm((prev) => ({ ...prev, color: e.target.value }))} className="h-[45px] p-1" />
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <Button size="sm" variant="ghost" onClick={() => setIsAddOpen(false)}>Cancel</Button>
            <Button size="sm" variant="primary" onClick={addEvent}>Save Session</Button>
          </div>
        </div>
      )}

      <div className="hidden md:block">
        <div className="grid border-b-2 border-ink-950" style={{ gridTemplateColumns: '90px repeat(5, minmax(0, 1fr))' }}>
          <div className="bg-ink-50 p-3" />
          {DAYS.map((day) => (
            <div key={day} className="bg-ink-50 p-3 text-center text-xs font-extrabold text-ink-700 border-l-2 border-ink-200">
              {day}
            </div>
          ))}
        </div>

        {hours.map((hour) => (
          <div key={hour} className="grid border-b border-ink-100 last:border-0" style={{ gridTemplateColumns: '90px repeat(5, minmax(0, 1fr))' }}>
            <div className="p-2 text-[11px] font-mono font-bold text-ink-500 bg-white border-r border-ink-100">
              {formatHour(hour)}
            </div>
            {DAYS.map((_, dayIndex) => {
              const slotEvents = sortedEvents.filter(
              (event) => event.day === dayIndex && event.startHour === hour,
              );

              return (
                <div key={`${dayIndex}-${hour}`} className="min-h-[58px] border-l border-ink-100 p-1.5 bg-white/80">
                  {slotEvents.map((event) => (
                    <div
                      key={event.id}
                      className="rounded-lg border border-ink-200 px-2 py-1.5 mb-1 text-[11px] font-semibold text-ink-800"
                      style={{ backgroundColor: `${event.color}20` }}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <p className="font-extrabold text-ink-900 leading-tight">{event.title}</p>
                        {editable && onDeleteEvent && (
                          <button
                            onClick={() => onDeleteEvent(event.id)}
                            className="text-red-600 hover:text-red-700 p-0.5 rounded"
                            title="Delete session"
                          >
                            <Trash2 size={12} />
                          </button>
                        )}
                      </div>
                      <p className="text-[10px] text-ink-600 mt-0.5">{event.room}</p>
                      <p className="text-[10px] text-ink-500">{event.duration}h · {role === 'student' ? event.teacher : event.type}</p>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="md:hidden p-3 space-y-2">
        {sortedEvents.length === 0 && (
          <div className="border-2 border-dashed border-ink-200 rounded-xl p-4 text-sm text-ink-500 font-medium">
            No sessions yet. Add your first one.
          </div>
        )}
        {sortedEvents.map((event) => (
          <div key={event.id} className="border-2 border-ink-200 rounded-xl p-3 bg-white">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-sm font-extrabold text-ink-900">{event.title}</p>
                <p className="text-xs text-ink-500 font-medium mt-0.5">{DAYS[event.day]} · {formatHour(event.startHour)} · {event.duration}h</p>
              </div>
              {editable && onDeleteEvent && (
                <button
                  onClick={() => onDeleteEvent(event.id)}
                  className="p-1.5 rounded-lg text-red-600 hover:bg-red-50"
                  title="Delete session"
                >
                  <Trash2 size={14} />
                </button>
              )}
            </div>
            <p className="text-xs text-ink-600 mt-2">{event.room} · {role === 'student' ? event.teacher : event.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
