export const ROOMS = [
  { id: 1, name: 'Amphi A', building: 'Main', capacity: 250, status: 'active', occupancy: 85, equipment: ['Projector', 'Audio', 'Wifi'] },
  { id: 2, name: 'Amphi B', building: 'Main', capacity: 150, status: 'active', occupancy: 92, equipment: ['Projector', 'Wifi'] },
  { id: 3, name: 'Lab 402', building: 'Science', capacity: 40, status: 'active', occupancy: 100, equipment: ['Computers', 'Projector', 'Software'] },
  { id: 4, name: 'Lab 405', building: 'Science', capacity: 30, status: 'maintenance', occupancy: 0, equipment: ['Computers', 'Hardware'] },
  { id: 5, name: 'Room 105', building: 'North', capacity: 60, status: 'active', occupancy: 45, equipment: ['Whiteboard', 'Wifi'] },
  { id: 6, name: 'Room 201', building: 'North', capacity: 50, status: 'active', occupancy: 60, equipment: ['Projector', 'Whiteboard'] },
  { id: 7, name: 'Room 304', building: 'North', capacity: 45, status: 'active', occupancy: 75, equipment: ['Projector', 'Wifi'] },
  { id: 8, name: 'Lab 501', building: 'Science', capacity: 25, status: 'active', occupancy: 90, equipment: ['High-end PCs', 'VR Headsets'] },
];

export const TIMETABLE_EVENTS = [
  { id: '1', day: 0, startHour: 8, duration: 2, title: 'Advanced Algorithms', type: 'theory', room: 'Amphi A', teacher: 'Dr. Chen', color: '#3b82f6' },
  { id: '2', day: 0, startHour: 10, duration: 2, title: 'Database Systems', type: 'theory', room: 'Amphi B', teacher: 'Prof. Smith', color: '#3b82f6' },
  { id: '3', day: 0, startHour: 13, duration: 3, title: 'Web Dev Lab', type: 'practical', room: 'Lab 402', teacher: 'Mr. Davis', color: '#10b981' },
  { id: '4', day: 1, startHour: 8, duration: 2, title: 'Linear Algebra', type: 'theory', room: 'Room 105', teacher: 'Dr. Wilson', color: '#3b82f6' },
  { id: '5', day: 1, startHour: 10, duration: 2, title: 'Operating Systems', type: 'theory', room: 'Amphi A', teacher: 'Dr. Roberts', color: '#3b82f6' },
  { id: '6', day: 1, startHour: 14, duration: 2, title: 'OS Lab', type: 'lab', room: 'Lab 402', teacher: 'Dr. Roberts', color: '#8b5cf6' },
  { id: '7', day: 2, startHour: 9, duration: 3, title: 'Database Lab', type: 'lab', room: 'Lab 405', teacher: 'Prof. Smith', color: '#8b5cf6' },
  { id: '8', day: 2, startHour: 13, duration: 2, title: 'Software Eng', type: 'theory', room: 'Room 201', teacher: 'Dr. Taylor', color: '#3b82f6' },
  { id: '9', day: 3, startHour: 8, duration: 2, title: 'Advanced Algorithms', type: 'theory', room: 'Amphi A', teacher: 'Dr. Chen', color: '#3b82f6' },
  { id: '10', day: 3, startHour: 10, duration: 2, title: 'AI Fundamentals', type: 'theory', room: 'Room 304', teacher: 'Dr. Lee', color: '#3b82f6' },
  { id: '11', day: 3, startHour: 13, duration: 3, title: 'AI Lab', type: 'lab', room: 'Lab 501', teacher: 'Dr. Lee', color: '#8b5cf6' },
  { id: '12', day: 4, startHour: 9, duration: 2, title: 'Career Seminar', type: 'online', room: 'Zoom', teacher: 'Guest Speaker', color: '#06b6d4' },
  { id: '13', day: 4, startHour: 14, duration: 2, title: 'Thesis Workshop', type: 'theory', room: 'Room 304', teacher: 'Dr. Wilson', color: '#3b82f6' },
];

export const MODULES = [
  { id: '1', name: 'Advanced Algorithms', type: 'Theory', semester: 'S5', dept: 'CS', weeks: 14, teacher: 'Dr. Chen', status: 'approved', students: 124 },
  { id: '2', name: 'Data Structures Lab', type: 'Practical', semester: 'S3', dept: 'CS', weeks: 10, teacher: 'Prof. Smith', status: 'approved', students: 42 },
  { id: '3', name: 'Machine Learning', type: 'Theory', semester: 'S5', dept: 'CS', weeks: 14, teacher: 'Dr. Lee', status: 'pending', students: 98 },
  { id: '4', name: 'Web Dev Lab', type: 'Practical', semester: 'S4', dept: 'CS', weeks: 12, teacher: 'Mr. Davis', status: 'approved', students: 38 },
  { id: '5', name: 'Database Systems', type: 'Theory', semester: 'S4', dept: 'CS', weeks: 14, teacher: 'Prof. Smith', status: 'approved', students: 110 },
  { id: '6', name: 'Linear Algebra', type: 'Theory', semester: 'S2', dept: 'Math', weeks: 14, teacher: 'Dr. Wilson', status: 'approved', students: 145 },
  { id: '7', name: 'Operating Systems', type: 'Theory', semester: 'S5', dept: 'CS', weeks: 14, teacher: 'Dr. Roberts', status: 'approved', students: 107 },
  { id: '8', name: 'AI Fundamentals', type: 'Theory', semester: 'S5', dept: 'CS', weeks: 14, teacher: 'Dr. Lee', status: 'approved', students: 89 },
];

export const USERS = [
  { id: '1', name: 'Sarah Jenkins', email: 's.jenkins@unismart.edu', role: 'Student', dept: 'CS', status: 'active', lastLogin: '2h ago' },
  { id: '2', name: 'Alex Kim', email: 'a.kim@unismart.edu', role: 'Student', dept: 'Math', status: 'active', lastLogin: '1d ago' },
  { id: '3', name: 'Dr. Robert Chen', email: 'r.chen@unismart.edu', role: 'Teacher', dept: 'CS', status: 'active', lastLogin: '5m ago' },
  { id: '4', name: 'Prof. Smith', email: 'smith@unismart.edu', role: 'Teacher', dept: 'CS', status: 'active', lastLogin: '3h ago' },
  { id: '5', name: 'Emma Wilson', email: 'e.wilson@unismart.edu', role: 'Student', dept: 'Physics', status: 'pending', lastLogin: 'Never' },
  { id: '6', name: 'Dr. Lee', email: 'lee@unismart.edu', role: 'Teacher', dept: 'Physics', status: 'active', lastLogin: 'Yesterday' },
  { id: '7', name: 'Marcus Day', email: 'm.day@unismart.edu', role: 'Student', dept: 'CS', status: 'active', lastLogin: '4h ago' },
  { id: '8', name: 'Dr. Roberts', email: 'roberts@unismart.edu', role: 'Teacher', dept: 'CS', status: 'active', lastLogin: '1h ago' },
];

export const CONFLICTS = [
  { id: 1, severity: 'high', title: 'Room Double Booking', desc: 'Amphi A requested by Dr. Chen & Prof. Smith — Mon 10:00', time: '2h ago' },
  { id: 2, severity: 'medium', title: 'Material Shortage', desc: 'Lab 402 requires 40 computers, only 30 available', time: '5h ago' },
  { id: 3, severity: 'low', title: 'Teacher Overload', desc: 'Dr. Lee scheduled 6 consecutive hours on Wed', time: '1d ago' },
];

export const MESSAGES = [
  { id: 1, from: 'Dr. Chen', avatar: 'DC', subject: 'Advanced Algorithms — Midterm prep', preview: 'Please review chapters 8-12 before next session...', time: '10:32', unread: true, role: 'Teacher' },
  { id: 2, from: 'Prof. Smith', avatar: 'PS', subject: 'Lab Assignment due Friday', preview: 'Reminder: submit your lab report by end of day...', time: 'Yesterday', unread: true, role: 'Teacher' },
  { id: 3, from: 'Admin Portal', avatar: 'AD', subject: 'Timetable updated for Week 8', preview: 'Your schedule for Week 8 has been published...', time: 'Mon', unread: false, role: 'Admin' },
  { id: 4, from: 'Alex Kim', avatar: 'AK', subject: 'Skill Exchange request', preview: 'Hey! I would like to exchange React skills...', time: 'Sun', unread: false, role: 'Student' },
];
