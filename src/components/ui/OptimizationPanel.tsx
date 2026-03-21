import { useState } from 'react';
import { Button, StatusBadge } from './UIKit';

interface Suggestion {
  id: number;
  title: string;
  impact: string;
  severity: 'high' | 'medium' | 'low';
}

const SUGGESTIONS: Suggestion[] = [
  { id: 1, title: 'Move Web Dev Lab to Lab 501 on Thursday 13:00', impact: 'Removes 2 room conflicts', severity: 'high' },
  { id: 2, title: 'Swap AI Fundamentals with Thesis Workshop slots', impact: 'Improves teacher load balance', severity: 'medium' },
  { id: 3, title: 'Split Room 201 cohort into two tutorial groups', impact: 'Reduces occupancy from 110% to 78%', severity: 'low' },
];

export function OptimizationPanel() {
  const [appliedIds, setAppliedIds] = useState<number[]>([]);

  const applySuggestion = (id: number) => {
    setAppliedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  return (
    <section className="card p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-extrabold text-ink-950">AI Optimization Suggestions</h3>
          <p className="text-xs font-medium text-ink-500 mt-0.5">Recommended scheduling improvements based on current constraints.</p>
        </div>
        <Button size="sm" variant="outline">Run Optimization</Button>
      </div>

      <div className="space-y-2.5">
        {SUGGESTIONS.map((item) => {
          const isApplied = appliedIds.includes(item.id);

          return (
            <div key={item.id} className="border-2 border-ink-100 rounded-xl p-3.5 flex flex-col md:flex-row md:items-center md:justify-between gap-2.5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <StatusBadge status={item.severity} />
                  {isApplied && <StatusBadge status="approved" label="Applied" />}
                </div>
                <p className="text-sm font-extrabold text-ink-900">{item.title}</p>
                <p className="text-xs font-medium text-ink-500 mt-0.5">{item.impact}</p>
              </div>
              <Button
                size="sm"
                variant={isApplied ? 'ghost' : 'primary'}
                disabled={isApplied}
                onClick={() => applySuggestion(item.id)}
              >
                {isApplied ? 'Applied' : 'Apply'}
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
