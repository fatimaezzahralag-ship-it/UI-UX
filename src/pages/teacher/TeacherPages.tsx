import React, { useState } from 'react';
import { Sidebar } from '../../components/ui/Sidebar';
import { TopNav } from '../../components/ui/TopNav';
import { TimetableEvent, WeeklyCalendar } from '../../components/ui/WeeklyCalendar';
import { StatusBadge, Button, Input, DataTable } from '../../components/ui/UIKit';
import { TIMETABLE_EVENTS, MODULES } from '../../data';
import { Download, Plus, Video, Calendar, Clock, Users, BookOpen, Save } from 'lucide-react';

// ─── TeacherTimetable ─────────────────────────────────────────────────────────
export function TeacherTimetable() {
  const [events, setEvents] = useState<TimetableEvent[]>(TIMETABLE_EVENTS);

  const addEvent = (event: TimetableEvent) => {
    setEvents((prev) => [...prev, event]);
  };

  const deleteEvent = (id: string) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };

  return (
    <div className="min-h-screen bg-ink-50 flex">
      <Sidebar role="teacher" />
      <div className="flex-1 md:ml-[240px] flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="flex items-center justify-end">
              <Button size="sm" variant="outline" leftIcon={<Download size={14} />}>Export PDF</Button>
            </div>
            <WeeklyCalendar
              events={events}
              role="teacher"
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

// ─── TeacherModules ───────────────────────────────────────────────────────────
const modCols = [
  { header: 'Module', accessorKey: 'name', sortable: true },
  { header: 'Type', accessorKey: 'type', cell: (r: any) => <span className={`tag text-[10px] ${r.type === 'Theory' ? 'bg-blue-50 text-blue-800 border-blue-300' : 'bg-emerald-50 text-emerald-800 border-emerald-300'}`}>{r.type}</span> },
  { header: 'Semester', accessorKey: 'semester' },
  { header: 'Students', accessorKey: 'students' },
  { header: 'Status', accessorKey: 'status', cell: (r: any) => <StatusBadge status={r.status} /> },
  { header: '', accessorKey: 'actions', cell: () => <Button size="sm" variant="ghost" className="h-7 text-xs">Edit</Button> },
];

export function TeacherModules() {
  return (
    <div className="min-h-screen bg-ink-50 flex">
      <Sidebar role="teacher" />
      <div className="flex-1 ml-[240px] flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-5xl mx-auto space-y-4">
            <div className="flex justify-end">
              <Button size="sm" variant="primary" leftIcon={<Plus size={14} />}>Add Module</Button>
            </div>
            <div className="card p-5">
              <DataTable columns={modCols} data={MODULES} searchKey="name" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// ─── OnlineClasses ────────────────────────────────────────────────────────────
const ONLINE = [
  { id: 1, title: 'Advanced Algorithms Q&A', date: 'Fri Oct 25', time: '14:00–15:30', students: 42, platform: 'Zoom', status: 'upcoming' },
  { id: 2, title: 'Office Hours — AI Fundamentals', date: 'Wed Oct 23', time: '10:00–11:00', students: 18, platform: 'Teams', status: 'active' },
  { id: 3, title: 'Mid-term Review', date: 'Mon Oct 21', time: '09:00–10:30', students: 89, platform: 'Zoom', status: 'completed' },
];

export function OnlineClasses() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="min-h-screen bg-ink-50 flex">
      <Sidebar role="teacher" />
      <div className="flex-1 ml-[240px] flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-5">
            <div className="flex justify-end">
              <Button size="sm" variant="primary" leftIcon={<Plus size={14} />} onClick={() => setShowForm(true)}>Schedule Class</Button>
            </div>

            {showForm && (
              <div className="card p-5 space-y-4">
                <h3 className="font-extrabold text-ink-950">New Online Session</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Input label="Session Title" placeholder="e.g. Q&A — Week 8" />
                  <div>
                    <label className="section-header block mb-1">Platform</label>
                    <select className="input-field"><option>Zoom</option><option>Teams</option><option>Google Meet</option></select>
                  </div>
                  <Input label="Date" type="date" />
                  <Input label="Time" type="time" />
                  <Input label="Duration (min)" type="number" defaultValue={90} />
                  <div>
                    <label className="section-header block mb-1">Module</label>
                    <select className="input-field">{MODULES.map(m => <option key={m.id}>{m.name}</option>)}</select>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="primary" leftIcon={<Save size={14} />} onClick={() => setShowForm(false)}>Create Session</Button>
                  <Button size="sm" variant="ghost" onClick={() => setShowForm(false)}>Cancel</Button>
                </div>
              </div>
            )}

            <div className="space-y-3">
              {ONLINE.map(s => (
                <div key={s.id} className="card p-4 flex items-center gap-4">
                  <div className={`p-3 border-2 border-ink-950 rounded-xl ${s.status === 'active' ? 'bg-emerald-500 text-white' : 'bg-ink-100 text-ink-600'}`}>
                    <Video size={18} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-extrabold text-ink-950 text-sm">{s.title}</h4>
                    <p className="text-xs text-ink-500 font-medium mt-0.5">{s.date} · {s.time} · {s.platform}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-ink-600">
                    <Users size={12} /> {s.students} students
                  </div>
                  <StatusBadge status={s.status} />
                  {s.status === 'active' && (
                    <Button size="sm" variant="primary" className="h-8 text-xs">Join Now</Button>
                  )}
                  {s.status === 'upcoming' && (
                    <Button size="sm" variant="outline" className="h-8 text-xs">Edit</Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// ─── TeacherAvailability ──────────────────────────────────────────────────────
const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const SLOTS = ['08:00–10:00', '10:00–12:00', '12:00–14:00', '14:00–16:00', '16:00–18:00'];

export function TeacherAvailability() {
  const [selected, setSelected] = useState<Set<string>>(new Set(['Monday-08:00–10:00', 'Wednesday-14:00–16:00']));

  const toggle = (key: string) => {
    setSelected(prev => {
      const s = new Set(prev);
      s.has(key) ? s.delete(key) : s.add(key);
      return s;
    });
  };

  return (
    <div className="min-h-screen bg-ink-50 flex">
      <Sidebar role="teacher" />
      <div className="flex-1 ml-[240px] flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-3xl mx-auto space-y-5">
            <p className="text-sm text-ink-500 font-medium">Click cells to toggle your available time slots. The AI scheduler will prioritize your preferences.</p>

            <div className="card overflow-hidden">
              <div className="grid border-b-2 border-ink-950" style={{ gridTemplateColumns: '120px repeat(5, 1fr)' }}>
                <div className="p-3 bg-ink-50"></div>
                {DAYS.map(d => (
                  <div key={d} className="p-3 bg-ink-50 text-center text-xs font-extrabold text-ink-700 border-l-2 border-ink-200">{d.slice(0,3)}</div>
                ))}
              </div>
              {SLOTS.map(slot => (
                <div key={slot} className="grid border-b border-ink-100 last:border-0" style={{ gridTemplateColumns: '120px repeat(5, 1fr)' }}>
                  <div className="p-3 text-[11px] font-bold text-ink-500 font-mono">{slot}</div>
                  {DAYS.map(day => {
                    const key = `${day}-${slot}`;
                    const on = selected.has(key);
                    return (
                      <button
                        key={day}
                        onClick={() => toggle(key)}
                        className={`border-l-2 border-ink-100 py-4 transition-colors ${on ? 'bg-brand-500 hover:bg-brand-600' : 'hover:bg-ink-50'}`}
                      >
                        {on && <div className="w-3 h-3 rounded-full bg-white mx-auto border border-white/50"></div>}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm font-bold text-ink-600">
                <div className="w-4 h-4 bg-brand-500 rounded border-2 border-ink-950"></div> Available
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-ink-600">
                <div className="w-4 h-4 bg-ink-100 rounded border-2 border-ink-300"></div> Unavailable
              </div>
              <Button size="sm" variant="primary" leftIcon={<Save size={14} />} className="ml-auto">Save Availability</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// ─── TeacherMessages ──────────────────────────────────────────────────────────
export function TeacherMessages() {
  return (
    <div className="min-h-screen bg-ink-50 flex">
      <Sidebar role="teacher" />
      <div className="flex-1 ml-[240px] flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-2xl mx-auto">
            <div className="card p-5 text-center text-sm font-medium text-ink-500 py-16">
              <p className="text-3xl mb-3">📨</p>
              <p className="font-extrabold text-ink-800 mb-1">3 unread messages</p>
              <p>Message center for teachers — use the admin messages view for full functionality.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// ─── TeacherProfile ───────────────────────────────────────────────────────────
export function TeacherProfile() {
  return (
    <div className="min-h-screen bg-ink-50 flex">
      <Sidebar role="teacher" />
      <div className="flex-1 ml-[240px] flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-2xl mx-auto space-y-5">
            <div className="card p-6 flex items-center gap-5">
              <div className="w-16 h-16 bg-violet-500 rounded-2xl border-2 border-ink-950 flex items-center justify-center text-white text-xl font-extrabold shadow-hard-sm">RC</div>
              <div>
                <h2 className="text-lg font-extrabold text-ink-950">Dr. Robert Chen</h2>
                <p className="text-sm text-ink-500 font-medium">Professor · Computer Science</p>
              </div>
            </div>
            <div className="card p-5 space-y-4">
              <h3 className="font-extrabold text-ink-950">Profile Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <Input label="First Name" defaultValue="Robert" />
                <Input label="Last Name" defaultValue="Chen" />
                <Input label="Email" defaultValue="r.chen@unismart.edu" type="email" />
                <Input label="Office" defaultValue="North Wing 302" />
              </div>
              <Button variant="primary" size="sm" leftIcon={<Save size={14} />}>Save Changes</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
