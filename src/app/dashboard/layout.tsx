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
    <div className="grid h-screen w-full  grid-cols-[60px_5fr] xl:grid-cols-[1fr_5fr]">
      <Sidebar />
      <div className=" p-2 xl:p-8 h-screen flex flex-1 "> {children} </div>
    </div>
  );
};

export default Dashboard;
