import React from 'react';
import { Button } from './UIKit';
import { Zap, Play, CheckCircle2 } from 'lucide-react';

export function OptimizationPanel() {
  return (
    <section className="card p-5 border-l-4 border-brand-500">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-wider text-brand-700">AI Scheduler</p>
          <h3 className="text-base font-extrabold text-ink-950 mt-1">Optimization Engine</h3>
          <p className="text-sm text-ink-500 mt-1">Generate conflict-aware timetables with one click.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="tag bg-emerald-50 text-emerald-800 border-emerald-300">
            <CheckCircle2 size={12} className="mr-1" /> Ready
          </span>
          <Button size="sm" variant="primary" leftIcon={<Play size={14} />}>Run Optimization</Button>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="p-3 rounded-xl border border-ink-200 bg-ink-50">
          <p className="text-xs text-ink-500 font-bold">Last runtime</p>
          <p className="text-sm font-extrabold text-ink-900 mt-1">2.3s</p>
        </div>
        <div className="p-3 rounded-xl border border-ink-200 bg-ink-50">
          <p className="text-xs text-ink-500 font-bold">Conflicts resolved</p>
          <p className="text-sm font-extrabold text-ink-900 mt-1">127</p>
        </div>
        <div className="p-3 rounded-xl border border-ink-200 bg-ink-50">
          <p className="text-xs text-ink-500 font-bold">Engine status</p>
          <p className="text-sm font-extrabold text-ink-900 mt-1 flex items-center gap-1"><Zap size={14} className="text-brand-600" /> Active</p>
        </div>
      </div>
    </section>
  );
}
