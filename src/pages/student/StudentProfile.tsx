import React from 'react';
import { Sidebar } from '../../components/ui/Sidebar';
import { TopNav } from '../../components/ui/TopNav';
import { Input, Button } from '../../components/ui/UIKit';
import { Save } from 'lucide-react';

export function StudentProfile() {
  return (
    <div className="min-h-screen bg-ink-50 flex">
      <Sidebar role="student" />
      <div className="flex-1 md:ml-[240px] flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="max-w-2xl mx-auto card p-5 space-y-4">
            <h3 className="text-base font-extrabold text-ink-950">My Profile</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Input label="First Name" defaultValue="Sarah" />
              <Input label="Last Name" defaultValue="Jenkins" />
              <Input label="Email" defaultValue="s.jenkins@unismart.edu" type="email" />
              <Input label="Department" defaultValue="Computer Science" />
            </div>
            <Button size="sm" variant="primary" leftIcon={<Save size={14} />}>Save Changes</Button>
          </div>
        </main>
      </div>
    </div>
  );
}
