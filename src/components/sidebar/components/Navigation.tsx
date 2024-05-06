'use client';
import { LayoutGridIcon, MessageCircleIcon, Rss, SettingsIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ActiveLink from './ActiveLink';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="flex-1 space-y-4 overflow-y-auto flex items-center justify-start xl:p-8 flex-col">
      <div className="space-y-2 w-full">
        <div className="text-sm font-medium hidden xl:block text-muted-foreground">MENU</div>
        <div className="gap-1 w-full flex items-center  justify-center flex-col">
          <ActiveLink
            href="/dashboard/chat"
            icon={<MessageCircleIcon size={20} />}
            name="Chat"
            pathname={pathname}
          />

          <ActiveLink
            href="/dashboard/plans"
            icon={<LayoutGridIcon size={20} />}
            name="Plans"
            pathname={pathname}
          />
        </div>
      </div>

      <div className="space-y-2 w-full">
        <div className="text-sm font-medium hidden xl:block text-muted-foreground">LINKS</div>
        <div className="gap-1 w-full flex items-center  justify-center flex-col">
          <Link
            className="flex w-full  xl:justify-start justify-center  items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted transition-colors"
            href="/website"
            target="_blank"
          >
            <Rss size={20} />
            <span className="hidden xl:block"> Website</span>
          </Link>
        </div>
      </div>

      <div className="space-y-2 w-full">
        <div className="text-sm font-medium hidden xl:block text-muted-foreground">ACCOUNT</div>
        <div className="gap-1 w-full flex items-center  justify-center flex-col">
          <ActiveLink
            href="/dashboard/profile"
            icon={<UserIcon size={20} />}
            name="Profile"
            pathname={pathname}
          />

          <ActiveLink
            href="/dashboard/settings"
            icon={<SettingsIcon size={20} />}
            name="Settings"
            pathname={pathname}
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
