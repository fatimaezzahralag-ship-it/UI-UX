import React, { useState } from 'react';
import { Sidebar } from '../../components/ui/Sidebar';
import { TopNav } from '../../components/ui/TopNav';
import { Button, Input } from '../../components/ui/UIKit';
import { Send, Search, Star, Archive } from 'lucide-react';
import { MESSAGES } from '../../data';

export function AdminMessages() {
  const [selected, setSelected] = useState(MESSAGES[0]);
  const [reply, setReply] = useState('');

  return (
    <div className="min-h-screen bg-ink-50 flex">
      <Sidebar role="admin" />
      <div className="flex-1 ml-[240px] flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 p-6 overflow-hidden">
          <div className="max-w-7xl mx-auto h-full">
            <div className="card overflow-hidden flex" style={{ height: 'calc(100vh - 140px)' }}>

              {/* List */}
              <div className="w-72 border-r-2 border-ink-200 flex flex-col">
                <div className="p-3 border-b-2 border-ink-100">
                  <Input placeholder="Search messages..." leftIcon={<Search size={14} />} />
                </div>
                <div className="flex-1 overflow-y-auto divide-y divide-ink-100">
                  {MESSAGES.map(m => (
                    <div
                      key={m.id}
                      onClick={() => setSelected(m)}
                      className={`p-3 cursor-pointer hover:bg-ink-50 transition-colors ${selected.id === m.id ? 'bg-brand-50 border-l-4 border-brand-500' : ''}`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-7 h-7 bg-ink-800 rounded-lg flex items-center justify-center text-white text-[10px] font-extrabold">{m.avatar}</div>
                        <span className="text-xs font-extrabold text-ink-900 flex-1 truncate">{m.from}</span>
                        <span className="text-[10px] text-ink-400 font-medium">{m.time}</span>
                        {m.unread && <span className="w-2 h-2 rounded-full bg-brand-500"></span>}
                      </div>
                      <p className="text-xs font-bold text-ink-700 truncate">{m.subject}</p>
                      <p className="text-[11px] text-ink-400 truncate mt-0.5">{m.preview}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detail */}
              <div className="flex-1 flex flex-col">
                <div className="p-5 border-b-2 border-ink-200 flex items-center justify-between">
                  <div>
                    <h3 className="font-extrabold text-ink-950">{selected.subject}</h3>
                    <p className="text-xs text-ink-500 font-medium mt-0.5">From: {selected.from} · {selected.time}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 border-2 border-ink-200 rounded-xl hover:border-ink-950 transition-colors"><Star size={14} /></button>
                    <button className="p-2 border-2 border-ink-200 rounded-xl hover:border-ink-950 transition-colors"><Archive size={14} /></button>
                  </div>
                </div>
                <div className="flex-1 p-5 overflow-y-auto">
                  <div className="bg-ink-50 border-2 border-ink-200 rounded-xl p-4 text-sm text-ink-700 font-medium leading-relaxed">
                    {selected.preview} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                  </div>
                </div>
                <div className="p-4 border-t-2 border-ink-200">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Write a reply..."
                      value={reply}
                      onChange={e => setReply((e.target as HTMLInputElement).value)}
                      className="flex-1"
                    />
                    <Button size="sm" variant="primary" leftIcon={<Send size={14} />} onClick={() => setReply('')}>Send</Button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
