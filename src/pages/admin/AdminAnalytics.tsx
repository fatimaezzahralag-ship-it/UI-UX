import { Sidebar } from '../../components/ui/Sidebar';
import { TopNav } from '../../components/ui/TopNav';
import { StatCard, StatusBadge } from '../../components/ui/UIKit';
import { BarChart3, TrendingUp, Users, BookOpen, Clock, Zap } from 'lucide-react';

const WEEKLY_UTILIZATION = [72, 78, 81, 76, 88, 84, 91];
const DAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export function AdminAnalytics() {
  const max = Math.max(...WEEKLY_UTILIZATION);

  return (
    <div className="min-h-screen bg-ink-50 flex">
      <Sidebar role="admin" />
      <div className="flex-1 md:ml-[240px] flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <StatCard title="Utilization Rate" value="91%" icon={<BarChart3 size={16} />} accent="bg-blue-500" trend="up" trendValue="+4.1%" />
              <StatCard title="Room Efficiency" value="87%" icon={<TrendingUp size={16} />} accent="bg-emerald-500" trend="up" trendValue="+2.3%" />
              <StatCard title="Active Students" value="3,847" icon={<Users size={16} />} accent="bg-violet-500" />
              <StatCard title="Module Load" value="128" icon={<BookOpen size={16} />} accent="bg-brand-500" />
              <StatCard title="Idle Hours" value="6%" icon={<Clock size={16} />} accent="bg-amber-500" trend="down" trendValue="-1.8%" />
              <StatCard title="Solver Avg" value="2.3s" icon={<Zap size={16} />} accent="bg-pink-500" trend="down" trendValue="-0.2s" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <section className="card p-5 lg:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-extrabold text-ink-950">Weekly Space Utilization</h3>
                  <StatusBadge status="approved" label="Healthy" />
                </div>
                <div className="h-64 flex items-end gap-3">
                  {WEEKLY_UTILIZATION.map((value, index) => (
                    <div key={DAY_LABELS[index]} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full rounded-t-xl border-2 border-ink-950 bg-gradient-to-t from-brand-500 to-brand-300"
                        style={{ height: `${Math.max(14, Math.round((value / max) * 180))}px` }}
                      />
                      <p className="text-[11px] font-bold text-ink-500">{DAY_LABELS[index]}</p>
                      <p className="text-[11px] font-extrabold text-ink-800">{value}%</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="card p-5 space-y-3">
                <h3 className="text-base font-extrabold text-ink-950">Insights</h3>
                <div className="p-3 rounded-xl border-2 border-emerald-200 bg-emerald-50">
                  <p className="text-xs font-extrabold text-emerald-800">Peak day</p>
                  <p className="text-sm font-bold text-emerald-900 mt-1">Sunday at 91% utilization</p>
                </div>
                <div className="p-3 rounded-xl border-2 border-amber-200 bg-amber-50">
                  <p className="text-xs font-extrabold text-amber-800">Optimization chance</p>
                  <p className="text-sm font-bold text-amber-900 mt-1">Thursday can absorb +8% load</p>
                </div>
                <div className="p-3 rounded-xl border-2 border-blue-200 bg-blue-50">
                  <p className="text-xs font-extrabold text-blue-800">Recommendation</p>
                  <p className="text-sm font-bold text-blue-900 mt-1">Move two lab blocks to Thursday</p>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
