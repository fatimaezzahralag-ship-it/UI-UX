import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

// ─── StatCard ────────────────────────────────────────────────────────────────
interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  accent?: string; // tailwind bg color class
  sub?: string;
}

export function StatCard({ title, value, icon, trend, trendValue, accent = 'bg-brand-500', sub }: StatCardProps) {
  return (
    <div className="stat-card">
      <div className="flex items-start justify-between">
        <div className={`${accent} text-white p-2 rounded-xl border-2 border-ink-950`}>
          {icon}
        </div>
        {trend && trendValue && (
          <span className={`flex items-center gap-0.5 text-xs font-bold px-2 py-1 rounded-lg border-2 border-ink-200 ${
            trend === 'up' ? 'text-emerald-700 bg-emerald-50' :
            trend === 'down' ? 'text-red-700 bg-red-50' : 'text-ink-600 bg-ink-50'
          }`}>
            {trend === 'up' ? <ArrowUpRight size={12} /> : trend === 'down' ? <ArrowDownRight size={12} /> : <Minus size={12} />}
            {trendValue}
          </span>
        )}
      </div>
      <div className="mt-2">
        <p className="text-2xl font-extrabold text-ink-950 tracking-tight">{value}</p>
        <p className="text-xs font-semibold text-ink-500 mt-0.5">{title}</p>
        {sub && <p className="text-[11px] text-ink-400 mt-1">{sub}</p>}
      </div>
    </div>
  );
}

// ─── StatusBadge ─────────────────────────────────────────────────────────────
const STATUS_CONFIG: Record<string, { label: string; classes: string }> = {
  active:      { label: 'Active',      classes: 'bg-emerald-50 text-emerald-800 border-emerald-300' },
  pending:     { label: 'Pending',     classes: 'bg-amber-50 text-amber-800 border-amber-300' },
  approved:    { label: 'Approved',    classes: 'bg-blue-50 text-blue-800 border-blue-300' },
  rejected:    { label: 'Rejected',    classes: 'bg-red-50 text-red-800 border-red-300' },
  maintenance: { label: 'Maintenance', classes: 'bg-orange-50 text-orange-800 border-orange-300' },
  high:        { label: 'High',        classes: 'bg-red-100 text-red-800 border-red-400' },
  medium:      { label: 'Medium',      classes: 'bg-amber-100 text-amber-800 border-amber-400' },
  low:         { label: 'Low',         classes: 'bg-blue-100 text-blue-800 border-blue-400' },
  online:      { label: 'Online',      classes: 'bg-cyan-50 text-cyan-800 border-cyan-300' },
};

export function StatusBadge({ status, label }: { status: string; label?: string }) {
  const cfg = STATUS_CONFIG[status] || { label: status, classes: 'bg-ink-50 text-ink-700 border-ink-300' };
  return (
    <span className={`tag text-[10px] ${cfg.classes}`}>
      {label || cfg.label}
    </span>
  );
}

// ─── Button ──────────────────────────────────────────────────────────────────
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export function Button({
  children, variant = 'primary', size = 'md', leftIcon, rightIcon, fullWidth, className = '', ...props
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-bold transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
    danger: 'bg-red-500 text-white border-2 border-ink-950 shadow-hard-sm rounded-xl font-bold px-4 py-2 transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard active:translate-x-0 active:translate-y-0 active:shadow-none',
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-xs rounded-lg',
    md: 'px-4 py-2 text-sm rounded-xl',
    lg: 'px-5 py-2.5 text-sm rounded-xl',
  };
  return (
    <button
      className={`${base} ${variants[variant]} ${size !== 'md' ? sizes[size] : ''} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}

// ─── Card ────────────────────────────────────────────────────────────────────
export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`card ${className}`}>{children}</div>;
}

export function CardHeader({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`px-6 py-4 border-b-2 border-ink-100 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <h3 className={`text-base font-extrabold text-ink-950 ${className}`}>{children}</h3>;
}

export function CardContent({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>;
}

// ─── Input ───────────────────────────────────────────────────────────────────
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  leftIcon?: React.ReactNode;
  multiline?: boolean;
  rows?: number;
  error?: string;
}

export function Input({ label, leftIcon, multiline, rows = 3, error, className = '', ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && <label className="block text-xs font-bold text-ink-700 mb-1.5 uppercase tracking-wide">{label}</label>}
      <div className="relative">
        {leftIcon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400">{leftIcon}</span>
        )}
        {multiline ? (
          <textarea
            rows={rows}
            className={`input-field resize-none ${leftIcon ? 'pl-10' : ''} ${className}`}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            className={`input-field ${leftIcon ? 'pl-10' : ''} ${className}`}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
      </div>
      {error && <p className="text-xs text-red-600 mt-1 font-medium">{error}</p>}
    </div>
  );
}

// ─── DataTable ───────────────────────────────────────────────────────────────
interface Column {
  header: string;
  accessorKey: string;
  sortable?: boolean;
  cell?: (row: any) => React.ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  searchKey?: string;
  searchPlaceholder?: string;
}

export function DataTable({ columns, data, searchKey, searchPlaceholder }: DataTableProps) {
  const [query, setQuery] = React.useState('');
  const [sortKey, setSortKey] = React.useState('');
  const [sortDir, setSortDir] = React.useState<'asc' | 'desc'>('asc');

  const filtered = React.useMemo(() => {
    let rows = [...data];
    if (searchKey && query) {
      rows = rows.filter(r => String(r[searchKey]).toLowerCase().includes(query.toLowerCase()));
    }
    if (sortKey) {
      rows.sort((a, b) => {
        const av = String(a[sortKey]).toLowerCase();
        const bv = String(b[sortKey]).toLowerCase();
        return sortDir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
      });
    }
    return rows;
  }, [data, query, sortKey, sortDir]);

  const toggleSort = (key: string) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setSortDir('asc'); }
  };

  return (
    <div>
      {searchKey && (
        <div className="mb-4">
          <Input
            placeholder={searchPlaceholder || 'Search...'}
            value={query}
            onChange={e => setQuery((e.target as HTMLInputElement).value)}
            className="max-w-xs"
          />
        </div>
      )}
      <div className="overflow-x-auto border-2 border-ink-950 rounded-2xl">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-ink-50 border-b-2 border-ink-950">
              {columns.map(col => (
                <th
                  key={col.accessorKey}
                  onClick={() => col.sortable && toggleSort(col.accessorKey)}
                  className={`px-4 py-3 text-left text-xs font-extrabold text-ink-600 uppercase tracking-wider whitespace-nowrap ${col.sortable ? 'cursor-pointer hover:text-ink-950 select-none' : ''}`}
                >
                  {col.header}
                  {col.sortable && sortKey === col.accessorKey && (
                    <span className="ml-1">{sortDir === 'asc' ? '↑' : '↓'}</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-4 py-8 text-center text-sm text-ink-400 font-medium">
                  No results found
                </td>
              </tr>
            ) : (
              filtered.map((row, i) => (
                <tr key={row.id || i} className="hover:bg-ink-50 transition-colors">
                  {columns.map(col => (
                    <td key={col.accessorKey} className="px-4 py-3 text-ink-800">
                      {col.cell ? col.cell(row) : row[col.accessorKey]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-ink-400 font-medium mt-2">{filtered.length} result{filtered.length !== 1 ? 's' : ''}</p>
    </div>
  );
}
