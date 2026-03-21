import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Calendar, BookOpen, MessageSquare,
  User, LogOut, CheckSquare, BarChart3, Users, Settings,
  Layers, Clock, Video, GraduationCap, ChevronLeft, ChevronRight,
  Menu
} from 'lucide-react';

type Role = 'student' | 'teacher' | 'admin';

const NAV = {
  student: [
    { name: 'Dashboard', path: '/student', icon: LayoutDashboard },
    { name: 'Timetable', path: '/student/timetable', icon: Calendar },
    { name: 'My Modules', path: '/student/modules', icon: BookOpen },
    { name: 'Skill Exchange', path: '/student/exchange', icon: Layers },
    { name: 'Messages', path: '/student/messages', icon: MessageSquare },
    { name: 'Profile', path: '/student/profile', icon: User },
  ],
  teacher: [
    { name: 'Dashboard', path: '/teacher', icon: LayoutDashboard },
    { name: 'My Modules', path: '/teacher/modules', icon: BookOpen },
    { name: 'Timetable', path: '/teacher/timetable', icon: Calendar },
    { name: 'Online Classes', path: '/teacher/online-classes', icon: Video },
    { name: 'Availability', path: '/teacher/availability', icon: Clock },
    { name: 'Messages', path: '/teacher/messages', icon: MessageSquare },
    { name: 'Profile', path: '/teacher/profile', icon: User },
  ],
  admin: [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Module Approvals', path: '/admin/approvals', icon: CheckSquare },
    { name: 'Timetable Mgmt', path: '/admin/timetable', icon: Calendar },
    { name: 'Room Mgmt', path: '/admin/rooms', icon: Layers },
    { name: 'Analytics', path: '/admin/analytics', icon: BarChart3 },
    { name: 'Users', path: '/admin/users', icon: Users },
    { name: 'Messages', path: '/admin/messages', icon: MessageSquare },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ],
};

const USER_MOCK = {
  student: { name: 'Sarah Jenkins', role: 'Student — S5 CS', initials: 'SJ', color: 'bg-teal-500' },
  teacher: { name: 'Dr. Robert Chen', role: 'Professor — CS Dept', initials: 'RC', color: 'bg-violet-500' },
  admin: { name: 'Admin Portal', role: 'System Administrator', initials: 'AD', color: 'bg-amber-500' },
};

export function Sidebar({ role }: { role: Role }) {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const items = NAV[role];
  const user = USER_MOCK[role];

  return (
    <>
      {!mobileOpen && (
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden fixed top-3 left-3 z-30 h-10 w-10 rounded-xl border-2 border-ink-950 bg-white shadow-hard-sm flex items-center justify-center"
          aria-label="Open menu"
        >
          <Menu size={18} className="text-ink-900" />
        </button>
      )}

      {mobileOpen && (
        <button
          onClick={() => setMobileOpen(false)}
          className="md:hidden fixed inset-0 bg-ink-950/40 z-20"
          aria-label="Close menu overlay"
        />
      )}

      <div
        className={`h-screen bg-ink-950 text-ink-300 flex flex-col fixed left-0 top-0 z-30 transition-all duration-300 transform ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 ${collapsed ? 'w-[240px] md:w-[72px]' : 'w-[240px]'}`}
      >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-ink-800">
        {!collapsed && (
          <Link to="/" className="flex items-center gap-2.5 text-white font-extrabold text-lg tracking-tight">
            <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <GraduationCap size={18} className="text-white" />
            </div>
            UniSmart
          </Link>
        )}
        {collapsed && (
          <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center mx-auto">
            <GraduationCap size={18} className="text-white" />
          </div>
        )}
        {!collapsed && (
          <button onClick={() => setCollapsed(true)} className="text-ink-500 hover:text-white p-1 rounded-lg hover:bg-ink-800 transition-colors ml-auto">
            <ChevronLeft size={16} />
          </button>
        )}
      </div>

      {collapsed && (
        <button onClick={() => setCollapsed(false)} className="flex items-center justify-center py-2 text-ink-500 hover:text-white hover:bg-ink-800 transition-colors">
          <ChevronRight size={16} />
        </button>
      )}

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-0.5">
        {!collapsed && (
          <p className="section-header px-3 mb-3">
            {role === 'admin' ? 'Administration' : role === 'teacher' ? 'Teaching' : 'Learning'}
          </p>
        )}
        {items.map((item) => {
          const isActive = location.pathname === item.path ||
            (item.path !== `/${role}` && location.pathname.startsWith(item.path));
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              title={collapsed ? item.name : undefined}
              className={isActive ? 'nav-link-active' : 'nav-link'}
            >
              <Icon size={18} className="flex-shrink-0" />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* User */}
      <div className="p-3 border-t border-ink-800">
        <div className={`flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-ink-800 transition-colors cursor-pointer ${collapsed ? 'justify-center' : ''}`}>
          <div className={`w-8 h-8 ${user.color} rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
            {user.initials}
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-white truncate">{user.name}</p>
              <p className="text-[11px] text-ink-400 truncate">{user.role}</p>
            </div>
          )}
        </div>
        {!collapsed && (
          <Link to="/auth" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-ink-500 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-colors mt-1">
            <LogOut size={14} />
            Sign out
          </Link>
        )}
      </div>
      </div>
    </>
  );
}
