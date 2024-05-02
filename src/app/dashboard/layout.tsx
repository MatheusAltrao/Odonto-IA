import Sidebar from '@/components/sidebar/page';
import { ReactNode } from 'react';

const Dashboard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-[256px_1fr]">
      <Sidebar />
      <div> {children} </div>
    </div>
  );
};

export default Dashboard;
