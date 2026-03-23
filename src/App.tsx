import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { LandingPage, AuthPage } from './pages/AuthAndLanding';

import { StudentDashboard } from './pages/student/StudentDashboard';
import { StudentTimetable } from './pages/student/StudentTimetable';
import { StudentModules } from './pages/student/StudentModules';
import { StudentMessages } from './pages/student/StudentMessages';
import { StudentProfile } from './pages/student/StudentProfile';
import { SkillExchange } from './pages/SkillExchange';

import { TeacherDashboard } from './pages/teacher/TeacherDashboard';
import {
  TeacherTimetable,
  TeacherModules,
  OnlineClasses,
  TeacherAvailability,
  TeacherMessages,
  TeacherProfile,
} from './pages/teacher/TeacherPages';

import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminTimetable } from './pages/admin/AdminTimetable';
import { AdminRooms } from './pages/admin/AdminRooms';
import { AdminUsers } from './pages/admin/AdminUsers';
import { AdminMessages } from './pages/admin/AdminMessages';
import { AdminSettings } from './pages/admin/AdminSettings';
import { AdminApprovals } from './pages/admin/AdminApprovals';
import { AdminAnalytics } from './pages/admin/AdminAnalytics';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />

        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/student/timetable" element={<StudentTimetable />} />
        <Route path="/student/modules" element={<StudentModules />} />
        <Route path="/student/exchange" element={<SkillExchange />} />
        <Route path="/student/messages" element={<StudentMessages />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/student/*" element={<Navigate to="/student" replace />} />

        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/teacher/modules" element={<TeacherModules />} />
        <Route path="/teacher/timetable" element={<TeacherTimetable />} />
        <Route path="/teacher/online-classes" element={<OnlineClasses />} />
        <Route path="/teacher/availability" element={<TeacherAvailability />} />
        <Route path="/teacher/messages" element={<TeacherMessages />} />
        <Route path="/teacher/profile" element={<TeacherProfile />} />
        <Route path="/teacher/*" element={<Navigate to="/teacher" replace />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/timetable" element={<AdminTimetable />} />
        <Route path="/admin/rooms" element={<AdminRooms />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/messages" element={<AdminMessages />} />
        <Route path="/admin/settings" element={<AdminSettings />} />
        <Route path="/admin/approvals" element={<AdminApprovals />} />
        <Route path="/admin/analytics" element={<AdminAnalytics />} />
        <Route path="/admin/*" element={<Navigate to="/admin" replace />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
