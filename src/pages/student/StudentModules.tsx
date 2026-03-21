import { Sidebar } from '../../components/ui/Sidebar';
import { TopNav } from '../../components/ui/TopNav';
import { DataTable, StatusBadge } from '../../components/ui/UIKit';
import { MODULES } from '../../data';

interface ModuleRow {
  id: string;
  name: string;
  type: string;
  semester: string;
  teacher: string;
  status: string;
}

const moduleColumns = [
  { header: 'Module', accessorKey: 'name', sortable: true },
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
  { header: 'Teacher', accessorKey: 'teacher' },
  { header: 'Status', accessorKey: 'status', cell: (row: ModuleRow) => <StatusBadge status={row.status} /> },
];

export function StudentModules() {
  const rows = MODULES.filter((module) => module.semester === 'S5') as ModuleRow[];

  return (
    <div className="min-h-screen bg-ink-50 flex">
      <Sidebar role="student" />
      <div className="flex-1 ml-[240px] flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            <div className="card p-5">
              <DataTable columns={moduleColumns} data={rows} searchKey="name" searchPlaceholder="Search my modules..." />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
