import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from '../components/ui/Sidebar';
import { TopNav } from '../components/ui/TopNav';
import { Button, Input, StatusBadge } from '../components/ui/UIKit';
import { Search, Star, Plus, ArrowLeftRight } from 'lucide-react';

const SKILLS = [
  { id: 1, title: 'React Native Development', author: 'Mike T.', pts: 50, stars: 4.8, reviews: 12, tags: ['Frontend', 'Mobile'], available: true },
  { id: 2, title: 'Advanced Calculus Tutoring', author: 'Emma W.', pts: 80, stars: 5.0, reviews: 8, tags: ['Math', 'S2–S4'], available: true },
  { id: 3, title: 'Figma UI/UX Design', author: 'Alex K.', pts: 60, stars: 4.9, reviews: 21, tags: ['Design', 'Prototyping'], available: true },
  { id: 4, title: 'Python Data Analysis', author: 'James R.', pts: 70, stars: 4.6, reviews: 15, tags: ['Python', 'ML'], available: false },
  { id: 5, title: 'French Language Exchange', author: 'Léa B.', pts: 30, stars: 4.7, reviews: 9, tags: ['Language', 'S1+'], available: true },
  { id: 6, title: 'Arduino & IoT Basics', author: 'Omar S.', pts: 55, stars: 4.5, reviews: 6, tags: ['Hardware', 'IoT'], available: true },
];

const TAG_COLORS: Record<string, string> = {
  Frontend: 'bg-blue-50 text-blue-800 border-blue-200',
  Mobile: 'bg-cyan-50 text-cyan-800 border-cyan-200',
  Math: 'bg-violet-50 text-violet-800 border-violet-200',
  Design: 'bg-pink-50 text-pink-800 border-pink-200',
  Python: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  Language: 'bg-amber-50 text-amber-800 border-amber-200',
  Hardware: 'bg-orange-50 text-orange-800 border-orange-200',
};

export function SkillExchange() {
  const [search, setSearch] = useState('');
  const [myPts] = useState(350);
  const skills = SKILLS.filter(s => s.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-ink-50 flex">
      <Sidebar role="student" />
      <div className="flex-1 ml-[240px] flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-5">

            {/* Header bar */}
            <div className="flex items-center gap-4">
              <div className="card flex items-center gap-3 px-4 py-3">
                <Star size={16} className="text-amber-500" />
                <span className="font-extrabold text-ink-950">{myPts}</span>
                <span className="text-xs font-bold text-ink-500">Skill Points</span>
              </div>
              <div className="flex-1">
                <Input placeholder="Search skills..." value={search} onChange={e => setSearch((e.target as HTMLInputElement).value)} leftIcon={<Search size={14} />} />
              </div>
              <Button variant="primary" size="sm" leftIcon={<Plus size={14} />}>Offer a Skill</Button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map(s => (
                <div key={s.id} className="card p-5 flex flex-col gap-3 hover:-translate-y-0.5 transition-transform">
                  <div className="flex items-start justify-between">
                    <StatusBadge status={s.available ? 'active' : 'pending'} label={s.available ? 'Available' : 'Unavailable'} />
                    <span className="text-sm font-extrabold text-brand-700 bg-brand-50 border-2 border-brand-200 rounded-xl px-2.5 py-1">{s.pts} pts</span>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-ink-950">{s.title}</h3>
                    <p className="text-xs font-medium text-ink-500 mt-0.5">by {s.author}</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {'★'.repeat(Math.round(s.stars)).split('').map((_, i) => (
                      <Star key={i} size={12} className="text-amber-500 fill-amber-500" />
                    ))}
                    <span className="text-xs font-bold text-ink-600 ml-1">{s.stars} ({s.reviews})</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map(t => (
                      <span key={t} className={`tag text-[10px] ${TAG_COLORS[t] || 'bg-ink-50 text-ink-700 border-ink-200'}`}>{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto pt-2">
                    <Button size="sm" variant="primary" className="flex-1 h-8 text-xs" disabled={!s.available || myPts < s.pts} leftIcon={<ArrowLeftRight size={12} />}>
                      Exchange
                    </Button>
                    <Button size="sm" variant="outline" className="h-8 text-xs">Details</Button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
