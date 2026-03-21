import { Sidebar } from '../../components/ui/Sidebar';
import { TopNav } from '../../components/ui/TopNav';
import { DataTable, StatusBadge, Button } from '../../components/ui/UIKit';
import { Check, X, Filter } from 'lucide-react';
import { MODULES } from '../../data';

type ModuleRow = {
  id: string;
  name: string;
  teacher: string;
  type: string;
  semester: string;
  status: string;
  weeks: number;
};

const approvalColumns = [
  { header: 'Module', accessorKey: 'name', sortable: true },
  { header: 'Teacher', accessorKey: 'teacher', sortable: true },
  {
    header: 'Type',
    accessorKey: 'type',
    cell: (row: ModuleRow) => (
      <span className={`tag text-[10px] ${row.type === 'Theory' ? 'bg-blue-50 text-blue-800 border-blue-300' : 'bg-emerald-50 text-emerald-800 border-emerald-300'}`}>
        {row.type}
      </span>
    ),
  },
  { header: 'Semester', accessorKey: 'semester' },
  { header: 'Duration', accessorKey: 'weeks', cell: (row: ModuleRow) => `${row.weeks} weeks` },
  { header: 'Status', accessorKey: 'status', cell: (row: ModuleRow) => <StatusBadge status={row.status} /> },
  {
    header: '',
    accessorKey: 'actions',
    cell: (row: ModuleRow) => (
      row.status === 'pending' ? (
        <div className="flex gap-1.5">
          <Button size="sm" variant="primary" className="h-7 text-[11px] px-2.5 py-0" leftIcon={<Check size={12} />}>
            Approve
          </Button>
          <Button size="sm" variant="outline" className="h-7 text-[11px] px-2.5 py-0 !text-red-700 !border-red-300" leftIcon={<X size={12} />}>
            Reject
          </Button>
        </div>
      ) : (
        <Button size="sm" variant="ghost" className="h-7 text-[11px]">Reviewed</Button>
      )
    ),
  },
];

export function AdminApprovals() {
  const rows = MODULES as ModuleRow[];
  const pendingCount = rows.filter((row) => row.status === 'pending').length;

  return (
    <div className="min-h-screen bg-ink-50 flex">
      <Sidebar role="admin" />
      <div className="flex-1 md:ml-[240px] flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="card p-4 border-l-4 border-amber-500">
                <p className="text-2xl font-extrabold text-ink-950">{pendingCount}</p>
                <p className="text-xs font-bold text-ink-500 mt-0.5">Pending Approvals</p>
              </div>
              <div className="card p-4 border-l-4 border-emerald-500">
                <p className="text-2xl font-extrabold text-ink-950">{rows.filter((row) => row.status === 'approved').length}</p>
                <p className="text-xs font-bold text-ink-500 mt-0.5">Approved Modules</p>
              </div>
              <div className="card p-4 border-l-4 border-red-500">
                <p className="text-2xl font-extrabold text-ink-950">{rows.filter((row) => row.status === 'rejected').length}</p>
                <p className="text-xs font-bold text-ink-500 mt-0.5">Rejected Modules</p>
              </div>
            </div>

            <div className="card p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-extrabold text-ink-950">Module Review Queue</h3>
                <Button size="sm" variant="outline" leftIcon={<Filter size={14} />}>Filter</Button>
              </div>
              <DataTable columns={approvalColumns} data={rows} searchKey="name" searchPlaceholder="Search module for review..." />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
