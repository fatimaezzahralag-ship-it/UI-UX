import React, { useState } from 'react';
import { Sidebar } from '../../components/ui/Sidebar';
import { TopNav } from '../../components/ui/TopNav';
import { StatusBadge, Button, Input } from '../../components/ui/UIKit';
import { Search, Plus, Edit2, Users, Monitor, Wifi } from 'lucide-react';
import { ROOMS } from '../../data';

const EQUIP_ICONS: Record<string, string> = {
  Projector: '📽', Wifi: '📶', Computers: '💻', Audio: '🔊',
  Whiteboard: '📋', Software: '⚙️', 'Hardware': '🔧', 'High-end PCs': '🖥',
  'VR Headsets': '🥽', 'Audio System': '🔊',
};

export function AdminRooms() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const buildings = ['All', ...Array.from(new Set(ROOMS.map(r => r.building)))];
  const filtered = ROOMS.filter(r =>
    (filter === 'All' || r.building === filter) &&
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-ink-50 flex">
      <Sidebar role="admin" />
      <div className="flex-1 ml-[240px] flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-5">

            {/* Summary row */}
            <div className="grid grid-cols-4 gap-3">
              {[
                { label: 'Total Rooms', value: ROOMS.length, color: 'border-brand-500' },
                { label: 'Active', value: ROOMS.filter(r => r.status === 'active').length, color: 'border-emerald-500' },
                { label: 'In Maintenance', value: ROOMS.filter(r => r.status === 'maintenance').length, color: 'border-amber-500' },
                { label: 'Avg Occupancy', value: `${Math.round(ROOMS.filter(r=>r.status==='active').reduce((s,r)=>s+r.occupancy,0)/ROOMS.filter(r=>r.status==='active').length)}%`, color: 'border-violet-500' },
              ].map(s => (
                <div key={s.label} className={`card p-4 border-l-4 ${s.color}`}>
                  <p className="text-2xl font-extrabold text-ink-950">{s.value}</p>
                  <p className="text-xs font-bold text-ink-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <div className="flex-1 min-w-[200px]">
                <Input placeholder="Search rooms..." value={search} onChange={e => setSearch((e.target as HTMLInputElement).value)} leftIcon={<Search size={14} />} />
              </div>
              <div className="flex gap-2">
                {buildings.map(b => (
                  <button
                    key={b}
                    onClick={() => setFilter(b)}
                    className={`px-3 py-2 text-xs font-bold rounded-xl border-2 transition-all ${filter === b ? 'bg-ink-950 text-white border-ink-950' : 'bg-white text-ink-700 border-ink-200 hover:border-ink-950'}`}
                  >
                    {b}
                  </button>
                ))}
              </div>
              <Button size="sm" variant="primary" leftIcon={<Plus size={14} />}>Add Room</Button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filtered.map(room => (
                <div key={room.id} className="card p-5 flex flex-col gap-3">
                  <div className="flex items-start justify-between">
                    <StatusBadge status={room.status} label={room.status === 'active' ? 'Available' : 'Maintenance'} />
                    <button className="p-1.5 rounded-lg border-2 border-ink-200 hover:border-ink-950 transition-colors">
                      <Edit2 size={12} />
                    </button>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-ink-950">{room.name}</h3>
                    <p className="text-xs font-semibold text-ink-400 mt-0.5">{room.building} Building</p>
                  </div>

                  <div className="flex items-center gap-2 bg-ink-50 border-2 border-ink-200 rounded-xl px-3 py-2">
                    <Users size={14} className="text-brand-600" />
                    <span className="text-sm font-bold text-ink-800">Capacity: {room.capacity}</span>
                  </div>

                  <div>
                    <p className="section-header mb-1.5">Equipment</p>
                    <div className="flex flex-wrap gap-1.5">
                      {room.equipment.map(eq => (
                        <span key={eq} className="text-[11px] font-bold bg-ink-50 border-2 border-ink-200 rounded-lg px-2 py-0.5 text-ink-700">
                          {EQUIP_ICONS[eq] || '🔹'} {eq}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-3 border-t-2 border-ink-100">
                    <div className="flex justify-between text-xs font-bold mb-1.5">
                      <span className="text-ink-500">Occupancy</span>
                      <span className={room.occupancy > 90 ? 'text-red-600' : room.occupancy > 70 ? 'text-amber-600' : 'text-emerald-600'}>
                        {room.occupancy}%
                      </span>
                    </div>
                    <div className="w-full bg-ink-200 rounded-full h-2 border border-ink-300 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${room.occupancy > 90 ? 'bg-red-500' : room.occupancy > 70 ? 'bg-amber-500' : 'bg-emerald-500'}`}
                        style={{ width: `${room.occupancy}%` }}
                      ></div>
                    </div>
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
