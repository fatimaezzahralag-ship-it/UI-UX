import { Sidebar } from '../../components/ui/Sidebar';
import { TopNav } from '../../components/ui/TopNav';
import { Button, Input } from '../../components/ui/UIKit';
import { Save } from 'lucide-react';

export function StudentProfile() {
  return (
    <div className="min-h-screen bg-ink-50 flex">
      <Sidebar role="student" />
      <div className="flex-1 ml-[240px] flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-2xl mx-auto space-y-5">
            <div className="card p-6 flex items-center gap-5">
              <div className="w-16 h-16 bg-teal-500 rounded-2xl border-2 border-ink-950 flex items-center justify-center text-white text-xl font-extrabold shadow-hard-sm">
                SJ
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-ink-950">Sarah Jenkins</h2>
                <p className="text-sm text-ink-500 font-medium">Student · Computer Science S5</p>
              </div>
            </div>

            <div className="card p-5 space-y-4">
              <h3 className="font-extrabold text-ink-950">Profile Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <Input label="First Name" defaultValue="Sarah" />
                <Input label="Last Name" defaultValue="Jenkins" />
                <Input label="Email" defaultValue="s.jenkins@unismart.edu" type="email" />
                <Input label="Program" defaultValue="Computer Science" />
                <Input label="Semester" defaultValue="S5" />
                <Input label="Phone" defaultValue="+1 555 302 118" />
              </div>
              <Button variant="primary" size="sm" leftIcon={<Save size={14} />}>Save Changes</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
