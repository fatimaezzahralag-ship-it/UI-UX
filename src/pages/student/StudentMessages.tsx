import { Sidebar } from '../../components/ui/Sidebar';
import { TopNav } from '../../components/ui/TopNav';
import { Button, StatusBadge } from '../../components/ui/UIKit';
import { MESSAGES } from '../../data';

export function StudentMessages() {
  const items = MESSAGES.filter((message) => message.role !== 'Admin');

  return (
    <div className="min-h-screen bg-ink-50 flex">
      <Sidebar role="student" />
      <div className="flex-1 ml-[240px] flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-3">
            {items.map((message) => (
              <div key={message.id} className="card p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl border-2 border-ink-950 bg-ink-100 flex items-center justify-center text-xs font-extrabold text-ink-700">
                  {message.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-sm font-extrabold text-ink-900 truncate">{message.subject}</p>
                    {message.unread && <StatusBadge status="active" label="Unread" />}
                  </div>
                  <p className="text-xs font-semibold text-ink-500 truncate">From {message.from}</p>
                  <p className="text-xs text-ink-400 mt-1 truncate">{message.preview}</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] font-medium text-ink-400 mb-2">{message.time}</p>
                  <Button size="sm" variant="outline" className="h-8 text-xs">Open</Button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
