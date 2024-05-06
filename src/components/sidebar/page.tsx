import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Navigation from './components/Navigation';

const Sidebar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex h-full flex-col bg-background border-r  ">
      <Navigation />

      <div className="border-t border-border px-4 py-4 hidden xl:block">
        <div className="text-sm">
          <div className="font-medium">{session?.user?.name}</div>
          <div className="text-muted-foreground">{session?.user?.email}</div>
        </div>
      </div>

      <div className="flex cursor-pointer xl:hidden justify-center  items-center gap-2 rounded px-4 py-2 transition-colors ">
        <Avatar>
          <AvatarImage src={session?.user?.image!} />
          <AvatarFallback>MA</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Sidebar;
