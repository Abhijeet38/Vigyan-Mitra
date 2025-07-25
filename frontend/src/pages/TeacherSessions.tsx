import React from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';

const TeacherSessions: React.FC = () => {
  const userName = localStorage.getItem('userName') || 'Ms. Sharma';
  const sessions = [
    { date: '2025-06-03', time: '10:00 AM', topic: 'Algebra Basics', className: 'Class 08' },
    { date: '2025-06-04', time: '11:30 AM', topic: 'Geometry Fundamentals', className: 'Class 06' },
    { date: '2025-06-05', time: '01:00 AM', topic: 'Calculus Introduction', className: 'Class 07' }
  ];

  return (
    <DashboardLayout role="teacher" userName={userName}>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">All Sessions</h2>
        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Time</th>
                <th className="p-2 text-left">Topic</th>
                <th className="p-2 text-left">Class</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((s, i) => (
                <tr key={i} className="border-t">
                  <td className="p-2 text-blue-600">{s.date}</td>
                  <td className="p-2">{s.time}</td>
                  <td className="p-2">{s.topic}</td>
                  <td className="p-2">{s.className}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeacherSessions;
