import React, { useState } from 'react';
import { Sidebar } from '../../components/ui/Sidebar';
import { TopNav } from '../../components/ui/TopNav';
import { Button, Input } from '../../components/ui/UIKit';
import { Save, Bell, Shield, Globe, Zap, Users } from 'lucide-react';

const SECTIONS = [
  { id: 'general', label: 'General', icon: Globe },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'optimization', label: 'AI Engine', icon: Zap },
  { id: 'users', label: 'User Policies', icon: Users },
];

export function AdminSettings() {
  const [section, setSection] = useState('general');
  const [saved, setSaved] = useState(false);

  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  return (
    <div className="min-h-screen bg-ink-50 flex">
      <Sidebar role="admin" />
      <div className="flex-1 ml-[240px] flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            <div className="card overflow-hidden flex" style={{ minHeight: '500px' }}>

              {/* Sidebar nav */}
              <div className="w-52 border-r-2 border-ink-200 p-3 bg-ink-50">
                <p className="section-header px-3 mb-2">Settings</p>
                {SECTIONS.map(s => {
                  const Icon = s.icon;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setSection(s.id)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-bold transition-colors ${section === s.id ? 'bg-brand-500 text-white' : 'text-ink-600 hover:bg-ink-100'}`}
                    >
                      <Icon size={15} />
                      {s.label}
                    </button>
                  );
                })}
              </div>

              {/* Content */}
              <div className="flex-1 p-6">
                {section === 'general' && (
                  <div className="space-y-5 max-w-lg">
                    <h3 className="text-base font-extrabold text-ink-950">General Settings</h3>
                    <Input label="Institution Name" defaultValue="UniSmart University" />
                    <Input label="Academic Year" defaultValue="2026/27" />
                    <div>
                      <label className="section-header block mb-1.5">Default Language</label>
                      <select className="input-field w-full">
                        <option>English</option><option>French</option><option>Arabic</option>
                      </select>
                    </div>
                    <Input label="Contact Email" defaultValue="admin@unismart.edu" type="email" />
                  </div>
                )}

                {section === 'notifications' && (
                  <div className="space-y-4 max-w-lg">
                    <h3 className="text-base font-extrabold text-ink-950">Notification Preferences</h3>
                    {['Email notifications', 'Conflict alerts', 'Approval requests', 'System updates', 'Weekly digest'].map(item => (
                      <div key={item} className="flex items-center justify-between p-3 border-2 border-ink-200 rounded-xl">
                        <span className="text-sm font-bold text-ink-800">{item}</span>
                        <div className="w-10 h-5 bg-brand-500 rounded-full border-2 border-ink-950 relative cursor-pointer">
                          <div className="w-3.5 h-3.5 bg-white rounded-full absolute right-0.5 top-0.5 shadow border border-ink-200"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {section === 'optimization' && (
                  <div className="space-y-4 max-w-lg">
                    <h3 className="text-base font-extrabold text-ink-950">AI Optimization Settings</h3>
                    <div>
                      <label className="section-header block mb-1.5">Algorithm Mode</label>
                      <select className="input-field w-full">
                        <option>Balanced (default)</option>
                        <option>Prioritize Room Efficiency</option>
                        <option>Prioritize Teacher Preferences</option>
                        <option>Minimize Idle Hours</option>
                      </select>
                    </div>
                    <Input label="Max Weekly Hours per Teacher" type="number" defaultValue={20} />
                    <Input label="Min Break Between Sessions (min)" type="number" defaultValue={15} />
                    <div className="flex items-center justify-between p-3 border-2 border-ink-200 rounded-xl">
                      <span className="text-sm font-bold text-ink-800">Auto-resolve low conflicts</span>
                      <div className="w-10 h-5 bg-brand-500 rounded-full border-2 border-ink-950 relative cursor-pointer">
                        <div className="w-3.5 h-3.5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                      </div>
                    </div>
                  </div>
                )}

                {(section === 'security' || section === 'users') && (
                  <div className="space-y-4 max-w-lg">
                    <h3 className="text-base font-extrabold text-ink-950">{section === 'security' ? 'Security Settings' : 'User Policies'}</h3>
                    <div className="p-4 bg-ink-50 border-2 border-ink-200 rounded-xl text-sm font-medium text-ink-500">
                      Configuration options for this section coming soon.
                    </div>
                  </div>
                )}

                <div className="mt-8 pt-5 border-t-2 border-ink-200">
                  <Button onClick={handleSave} variant="primary" leftIcon={<Save size={16} />}>
                    {saved ? '✓ Saved!' : 'Save Changes'}
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
