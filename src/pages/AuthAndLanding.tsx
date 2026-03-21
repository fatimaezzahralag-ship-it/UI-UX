import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, ArrowRight, Zap, Calendar, Users, Layers, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/UIKit';

// ─── LandingPage ──────────────────────────────────────────────────────────────
export function LandingPage() {
  return (
    <div className="min-h-screen bg-ink-950 text-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-ink-800">
        <div className="flex items-center gap-3 font-extrabold text-xl">
          <div className="w-9 h-9 bg-brand-500 rounded-xl flex items-center justify-center border-2 border-white">
            <GraduationCap size={20} />
          </div>
          UniSmart
        </div>
        <div className="flex items-center gap-3">
          <Link to="/auth" className="text-sm font-bold text-ink-300 hover:text-white transition-colors px-4 py-2">Login</Link>
          <Link to="/auth" className="btn-primary text-sm">Get Started</Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/30 rounded-full px-4 py-1.5 text-sm font-bold text-brand-300 mb-6">
          <Zap size={14} /> AI-Powered University Dashboard
        </div>
        <h1 className="text-5xl font-extrabold leading-tight mb-6">
          Smart scheduling for<br />
          <span className="text-brand-400">modern universities</span>
        </h1>
        <p className="text-lg text-ink-400 mb-8 max-w-xl mx-auto font-medium">
          Automated timetables, room management, skill exchange, and conflict resolution — all in one platform.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link to="/admin"><Button variant="primary" rightIcon={<ArrowRight size={16} />}>Admin Dashboard</Button></Link>
          <Link to="/student"><Button variant="outline" className="!border-ink-600 !text-ink-200 hover:!border-white hover:!text-white">Student View</Button></Link>
          <Link to="/teacher"><Button variant="ghost" className="!text-ink-400 hover:!text-white">Teacher View</Button></Link>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-5xl mx-auto px-8 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: <Zap size={20} />, title: 'AI Optimization', desc: '94% idle time reduction' },
          { icon: <Calendar size={20} />, title: 'Smart Timetables', desc: 'Conflict-free scheduling' },
          { icon: <Users size={20} />, title: 'Multi-role Access', desc: 'Students, teachers, admins' },
          { icon: <Layers size={20} />, title: 'Skill Exchange', desc: 'Student-to-student learning' },
        ].map(f => (
          <div key={f.title} className="bg-ink-900 border border-ink-700 rounded-2xl p-5">
            <div className="w-10 h-10 bg-brand-500/20 text-brand-400 rounded-xl flex items-center justify-center mb-3 border border-brand-500/30">
              {f.icon}
            </div>
            <h3 className="font-extrabold text-white mb-1">{f.title}</h3>
            <p className="text-sm text-ink-400 font-medium">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── AuthPage ─────────────────────────────────────────────────────────────────
export function AuthPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState<'student' | 'teacher' | 'admin'>('student');

  return (
    <div className="min-h-screen bg-ink-50 flex items-center justify-center p-6">
      <div className="card w-full max-w-sm p-0 overflow-hidden">
        <div className="bg-ink-950 p-6 text-center">
          <div className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center mx-auto mb-3 border-2 border-white">
            <GraduationCap size={22} className="text-white" />
          </div>
          <h2 className="text-lg font-extrabold text-white">UniSmart</h2>
          <p className="text-xs text-ink-400 mt-0.5 font-medium">Sign in to your account</p>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="section-header block mb-2">Role</label>
            <div className="grid grid-cols-3 gap-2">
              {(['student', 'teacher', 'admin'] as const).map(r => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className={`py-2 text-xs font-extrabold rounded-xl border-2 capitalize transition-all ${role === r ? 'bg-ink-950 text-white border-ink-950' : 'bg-white text-ink-600 border-ink-200 hover:border-ink-950'}`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="section-header block mb-1">Email</label>
            <input className="input-field" type="email" placeholder="you@unismart.edu" />
          </div>
          <div>
            <label className="section-header block mb-1">Password</label>
            <input className="input-field" type="password" placeholder="••••••••" />
          </div>
          <button
            onClick={() => navigate(`/${role}`)}
            className="btn-primary w-full text-sm justify-center flex items-center gap-2"
          >
            Sign In <ArrowRight size={14} />
          </button>
          <p className="text-center text-xs text-ink-400 font-medium">Demo: click Sign In to enter as {role}</p>
        </div>
      </div>
    </div>
  );
}
