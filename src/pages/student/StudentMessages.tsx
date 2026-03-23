import React from 'react';
import { Sidebar } from '../../components/ui/Sidebar';
import { TopNav } from '../../components/ui/TopNav';
import { MESSAGES } from '../../data';

export function StudentMessages() {
  return (
    <div className="min-h-screen bg-ink-50 flex">
      <Sidebar role="student" />
      <div className="flex-1 md:ml-[240px] flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-3">
            {MESSAGES.map((msg) => (
              <div key={msg.id} className="card p-4">
                <p className="text-sm font-extrabold text-ink-900">{msg.subject}</p>
                <p className="text-xs text-ink-500 mt-1">From: {msg.from}</p>
                <p className="text-sm text-ink-700 mt-2">{msg.preview}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
