import React from 'react';
import { Sidebar } from '../../components/ui/Sidebar';
import { TopNav } from '../../components/ui/TopNav';
import { DataTable, StatusBadge } from '../../components/ui/UIKit';
import { MODULES } from '../../data';

const columns = [
  { header: 'Module', accessorKey: 'name', sortable: true },
  { header: 'Type', accessorKey: 'type' },
  { header: 'Semester', accessorKey: 'semester' },
  { header: 'Teacher', accessorKey: 'teacher' },
  { header: 'Status', accessorKey: 'status', cell: (row: any) => <StatusBadge status={row.status} /> },
];

export function StudentModules() {
  return (
    <div className="min-h-screen bg-ink-50 flex">
      <Sidebar role="student" />
      <div className="flex-1 md:ml-[240px] flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <div className="card p-5">
              <DataTable columns={columns} data={MODULES} searchKey="name" searchPlaceholder="Search modules..." />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
