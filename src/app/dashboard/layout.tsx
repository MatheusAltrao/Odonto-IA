import Sidebar from '@/components/sidebar/page';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

const Dashboard = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect('/');
  }

  return (
    <div className="grid grid-cols-[256px_1fr]">
      <Sidebar />
      <div className="p-8 min-h-screen"> {children} </div>
    </div>
  );
};

export default Dashboard;
