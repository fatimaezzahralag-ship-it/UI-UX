import React, { useState } from 'react';
import { Sidebar } from '../../components/ui/Sidebar';
import { TopNav } from '../../components/ui/TopNav';
import { StatCard, StatusBadge, Button, Card, CardHeader, CardTitle, CardContent, DataTable } from '../../components/ui/UIKit';
import { OptimizationPanel } from '../../components/ui/OptimizationPanel';
import { Clock, AlertTriangle, Zap, Users, BookOpen, Layers, CheckCircle2, TrendingUp, BarChart3 } from 'lucide-react';
import { CONFLICTS, MODULES } from '../../data';

const approvalColumns = [
  { header: 'Module', accessorKey: 'name', sortable: true },
  { header: 'Teacher', accessorKey: 'teacher', sortable: true },
  { header: 'Type', accessorKey: 'type', cell: (r: any) => (
    <span className={`tag text-[10px] ${r.type === 'Theory' ? 'bg-blue-50 text-blue-800 border-blue-300' : 'bg-emerald-50 text-emerald-800 border-emerald-300'}`}>{r.type}</span>
  )},
  { header: 'Semester', accessorKey: 'semester' },
  { header: 'Status', accessorKey: 'status', cell: (r: any) => <StatusBadge status={r.status} /> },
  { header: '', accessorKey: 'actions', cell: (r: any) => r.status === 'pending' ? (
    <div className="flex gap-1.5">
      <Button size="sm" variant="primary" className="h-7 text-[11px] px-2.5 py-0">Approve</Button>
      <Button size="sm" variant="outline" className="h-7 text-[11px] px-2.5 py-0 !text-red-700 !border-red-300">Reject</Button>
    </div>
  ) : <Button size="sm" variant="ghost" className="h-7 text-[11px]">View</Button>},
];

const SEV_COLORS: Record<string, string> = {
  high: 'bg-red-500',
  medium: 'bg-amber-500',
  low: 'bg-blue-500',
};

export function AdminDashboard() {
  const [tab, setTab] = useState<'overview' | 'conflicts'>('overview');

  return (
    <div className="min-h-screen bg-ink-50 flex">
      <Sidebar role="admin" />
      <div className="flex-1 ml-[240px] flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-6">

            {/* KPI Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <StatCard title="Idle Hours ↓" value="94%" icon={<Clock size={16} />} accent="bg-emerald-500" trend="up" trendValue="+12%" />
              <StatCard title="Conflicts" value="127" icon={<AlertTriangle size={16} />} accent="bg-amber-500" />
              <StatCard title="Avg Gen Time" value="2.3s" icon={<Zap size={16} />} accent="bg-brand-500" trend="down" trendValue="−0.5s" />
              <StatCard title="Students" value="3,847" icon={<Users size={16} />} accent="bg-blue-500" trend="up" trendValue="+5%" />
              <StatCard title="Teachers" value="156" icon={<BookOpen size={16} />} accent="bg-violet-500" />
              <StatCard title="Skill Exchanges" value="892" icon={<Layers size={16} />} accent="bg-pink-500" trend="up" trendValue="+24%" />
            </div>

            {/* AI Engine */}
            <OptimizationPanel />

            {/* Tabs */}
            <div className="flex gap-1 border-b-2 border-ink-200">
              {(['overview', 'conflicts'] as const).map(t => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-4 py-2 text-sm font-bold capitalize transition-colors border-b-2 -mb-0.5 ${tab === t ? 'border-brand-500 text-brand-700' : 'border-transparent text-ink-500 hover:text-ink-800'}`}
                >
                  {t}
                </button>
              ))}
            </div>

            {tab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-base font-extrabold text-ink-950">Pending Module Approvals</h2>
                    <Button size="sm" variant="ghost">View All</Button>
                  </div>
                  <DataTable columns={approvalColumns} data={MODULES} searchKey="name" searchPlaceholder="Search modules..." />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-base font-extrabold text-ink-950">Active Conflicts</h2>
                    <span className="tag text-[10px] bg-red-50 text-red-700 border-red-300">{CONFLICTS.length} open</span>
                  </div>
                  <div className="card divide-y-2 divide-ink-100 overflow-hidden">
                    {CONFLICTS.map(c => (
                      <div key={c.id} className="p-4 hover:bg-ink-50 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`w-2 h-2 rounded-full ${SEV_COLORS[c.severity]}`}></span>
                          <StatusBadge status={c.severity} />
                          <span className="text-[11px] font-medium text-ink-400 ml-auto">{c.time}</span>
                        </div>
                        <h4 className="font-extrabold text-sm text-ink-950 mb-1">{c.title}</h4>
                        <p className="text-xs text-ink-500 mb-3 leading-relaxed">{c.desc}</p>
                        <Button size="sm" variant="outline" fullWidth className="h-8 text-xs">Resolve Manually</Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {tab === 'conflicts' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {CONFLICTS.map(c => (
                  <div key={c.id} className="card p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`w-3 h-3 rounded-full ${SEV_COLORS[c.severity]} border-2 border-ink-950`}></span>
                      <StatusBadge status={c.severity} />
                      <span className="text-[11px] text-ink-400 ml-auto">{c.time}</span>
                    </div>
                    <h4 className="font-extrabold text-sm text-ink-950 mb-2">{c.title}</h4>
                    <p className="text-xs text-ink-500 mb-4 leading-relaxed">{c.desc}</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="primary" className="flex-1 h-8 text-xs">Auto-fix</Button>
                      <Button size="sm" variant="outline" className="flex-1 h-8 text-xs">Ignore</Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </main>
      </div>
    </div>
  );
}
