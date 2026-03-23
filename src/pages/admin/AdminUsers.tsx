import React, { useState } from 'react';
import { Sidebar } from '../../components/ui/Sidebar';
import { TopNav } from '../../components/ui/TopNav';
import { DataTable, StatusBadge, Button } from '../../components/ui/UIKit';
import { Plus, Download, MoreHorizontal } from 'lucide-react';
import { USERS } from '../../data';

const INITIALS = (name: string) => name.split(' ').map(p => p[0]).join('').slice(0, 2);
const COLORS = ['bg-teal-500', 'bg-violet-500', 'bg-amber-500', 'bg-blue-500', 'bg-pink-500', 'bg-emerald-500', 'bg-orange-500', 'bg-indigo-500'];

const columns = [
  {
    header: 'Name', accessorKey: 'name', sortable: true,
    cell: (r: any) => (
      <div className="flex items-center gap-2.5">
        <div className={`w-8 h-8 ${COLORS[parseInt(r.id) % COLORS.length]} rounded-lg flex items-center justify-center text-white text-xs font-extrabold border-2 border-ink-950`}>
          {INITIALS(r.name)}
        </div>
        <div>
          <p className="font-extrabold text-sm text-ink-950">{r.name}</p>
          <p className="text-[11px] text-ink-400 font-medium">{r.email}</p>
        </div>
      </div>
    ),
  },
  {
    header: 'Role', accessorKey: 'role',
    cell: (r: any) => (
      <span className={`tag text-[10px] ${r.role === 'Teacher' ? 'bg-violet-50 text-violet-800 border-violet-300' : 'bg-teal-50 text-teal-800 border-teal-300'}`}>
        {r.role}
      </span>
    ),
  },
  { header: 'Department', accessorKey: 'dept', sortable: true },
  { header: 'Status', accessorKey: 'status', cell: (r: any) => <StatusBadge status={r.status} /> },
  { header: 'Last Login', accessorKey: 'lastLogin' },
  {
    header: '', accessorKey: 'actions',
    cell: () => (
      <button className="p-1.5 rounded-lg border-2 border-ink-200 hover:border-ink-950 transition-colors">
        <MoreHorizontal size={14} />
      </button>
    ),
  },
];

export function AdminUsers() {
  const [tab, setTab] = useState('All');
  const data = tab === 'All' ? USERS : USERS.filter(u => u.role === (tab === 'Students' ? 'Student' : 'Teacher'));

  return (
    <div className="min-h-screen bg-ink-50 flex">
      <Sidebar role="admin" />
      <div className="flex-1 ml-[240px] flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-5">

            {/* Summary */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Total Users', value: USERS.length, color: 'border-brand-500' },
                { label: 'Students', value: USERS.filter(u => u.role === 'Student').length, color: 'border-teal-500' },
                { label: 'Teachers', value: USERS.filter(u => u.role === 'Teacher').length, color: 'border-violet-500' },
              ].map(s => (
                <div key={s.label} className={`card p-4 border-l-4 ${s.color}`}>
                  <p className="text-2xl font-extrabold text-ink-950">{s.value}</p>
                  <p className="text-xs font-bold text-ink-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="card overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b-2 border-ink-200">
                <div className="flex gap-1">
                  {['Students', 'Teachers', 'All'].map(t => (
                    <button
                      key={t}
                      onClick={() => setTab(t)}
                      className={`px-4 py-1.5 text-sm font-bold rounded-xl transition-colors ${tab === t ? 'bg-ink-950 text-white' : 'text-ink-600 hover:bg-ink-100'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" leftIcon={<Download size={14} />}>Export</Button>
                  <Button size="sm" variant="primary" leftIcon={<Plus size={14} />}>Add User</Button>
                </div>
              </div>
              <div className="p-4">
                <DataTable columns={columns} data={data} searchKey="name" searchPlaceholder={`Search ${tab.toLowerCase()}...`} />
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
