import React, { useState } from 'react';
import { Search, Bell, ChevronDown, X } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const ROLE_COLORS: Record<string, string> = {
  student: 'bg-teal-500',
  teacher: 'bg-violet-500',
  admin: 'bg-amber-500',
};

const ROUTE_TITLES: Record<string, { title: string; subtitle: string; role: string }> = {
  '/student': { title: 'Dashboard', subtitle: 'Good morning, Sarah 👋', role: 'student' },
  '/student/timetable': { title: 'My Timetable', subtitle: 'Week 7 · Semester 5', role: 'student' },
  '/student/modules': { title: 'My Modules', subtitle: 'Computer Science · S5', role: 'student' },
  '/student/exchange': { title: 'Skill Exchange', subtitle: 'Browse & trade skills', role: 'student' },
  '/student/messages': { title: 'Messages', subtitle: '2 unread messages', role: 'student' },
  '/student/profile': { title: 'My Profile', subtitle: 'Sarah Jenkins', role: 'student' },
  '/teacher': { title: 'Dashboard', subtitle: 'Welcome back, Dr. Chen', role: 'teacher' },
  '/teacher/modules': { title: 'My Modules', subtitle: 'Declared & pending', role: 'teacher' },
  '/teacher/timetable': { title: 'My Timetable', subtitle: 'Your weekly schedule', role: 'teacher' },
  '/teacher/online-classes': { title: 'Online Classes', subtitle: 'Zoom & virtual sessions', role: 'teacher' },
  '/teacher/availability': { title: 'Availability', subtitle: 'Set your preferred slots', role: 'teacher' },
  '/teacher/messages': { title: 'Messages', subtitle: '3 unread messages', role: 'teacher' },
  '/teacher/profile': { title: 'My Profile', subtitle: 'Dr. Robert Chen', role: 'teacher' },
  '/admin': { title: 'System Overview', subtitle: 'Academic Year 2026/27 · Semester 5', role: 'admin' },
  '/admin/timetable': { title: 'Timetable Management', subtitle: 'All departments & schedules', role: 'admin' },
  '/admin/rooms': { title: 'Room Management', subtitle: 'Spaces, capacity & equipment', role: 'admin' },
  '/admin/users': { title: 'User Management', subtitle: 'Students, teachers & accounts', role: 'admin' },
  '/admin/messages': { title: 'Messages', subtitle: 'System-wide communications', role: 'admin' },
  '/admin/settings': { title: 'Settings', subtitle: 'System configuration', role: 'admin' },
  '/admin/approvals': { title: 'Module Approvals', subtitle: 'Pending review', role: 'admin' },
  '/admin/analytics': { title: 'Analytics', subtitle: 'System performance metrics', role: 'admin' },
};

export function TopNav() {
  const location = useLocation();
  const info = ROUTE_TITLES[location.pathname] || { title: 'UniSmart', subtitle: '', role: 'student' };
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <header className="min-h-16 bg-white/90 border-b border-ink-200 flex items-center justify-between px-4 md:px-6 pl-16 md:pl-6 py-2 sticky top-0 z-10 backdrop-blur">
      <div className="min-w-0">
        <h2 className="text-sm md:text-base font-extrabold text-ink-950 leading-none truncate">{info.title}</h2>
        {info.subtitle && <p className="text-[11px] md:text-xs text-ink-500 mt-0.5 font-medium truncate">{info.subtitle}</p>}
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" size={14} />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 py-2 bg-ink-50 border-2 border-ink-200 rounded-xl text-sm font-medium focus:outline-none focus:border-brand-500 w-48 placeholder:text-ink-400 transition-all focus:w-64"
          />
        </div>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setNotifOpen(!notifOpen)}
            className="relative p-2 border border-ink-200 rounded-xl hover:border-brand-500 transition-colors bg-white shadow-sm"
          >
            <Bell size={16} className="text-ink-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
          {notifOpen && (
            <div className="absolute right-0 top-12 w-[92vw] max-w-80 bg-white border border-ink-200 rounded-2xl shadow-hard z-50 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-ink-200">
                <span className="font-bold text-sm text-ink-950">Notifications</span>
                <button onClick={() => setNotifOpen(false)}><X size={14} className="text-ink-400" /></button>
              </div>
              {[
                { icon: '📅', text: 'Timetable updated for Week 8', time: '5m ago' },
                { icon: '✅', text: 'Module "Web Dev Lab" approved', time: '1h ago' },
                { icon: '💬', text: 'New message from Dr. Chen', time: '2h ago' },
                { icon: '⚠️', text: 'Room conflict detected — Amphi A', time: '3h ago' },
              ].map((n, i) => (
                <div key={i} className="flex items-start gap-3 px-4 py-3 hover:bg-ink-50 cursor-pointer border-b border-ink-100 last:border-0">
                  <span className="text-base mt-0.5">{n.icon}</span>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-ink-800">{n.text}</p>
                    <p className="text-[11px] text-ink-400 mt-0.5">{n.time}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Role switcher */}
        <div className="hidden md:flex items-center gap-2 border-2 border-ink-200 rounded-xl px-3 py-1.5 bg-ink-50">
          <div className={`w-2 h-2 rounded-full ${ROLE_COLORS[info.role]}`}></div>
          <span className="text-xs font-bold text-ink-700 capitalize">{info.role}</span>
          <ChevronDown size={12} className="text-ink-400" />
        </div>
      </div>
    </header>
  );
}
