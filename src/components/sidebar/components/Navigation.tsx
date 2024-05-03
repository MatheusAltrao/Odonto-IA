'use client';
import {
  HelpCircle,
  LayoutGridIcon,
  LogOutIcon,
  MessageCircleIcon,
  Rss,
  SettingsIcon,
  UserIcon,
} from 'lucide-react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ActiveLink from './ActiveLink';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="flex-1 space-y-4 overflow-y-auto px-4 py-6">
      <div className="space-y-2">
        <div className="text-sm font-medium text-muted-foreground">MENU</div>
        <div className="space-y-1">
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
      <div className="space-y-2">
        <div className="text-sm font-medium text-muted-foreground">LINKS</div>
        <div className="space-y-1">
          <Link
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted transition-colors"
            href="#"
          >
            <HelpCircle size={20} />
            Precisa de ajuda?
          </Link>
          <Link
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted transiti"
            href="/website"
            target="_blank"
          >
            <Rss size={20} />
            Website
          </Link>
        </div>
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium text-muted-foreground">ACCOUNT</div>
        <div className="space-y-1">
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

          <button
            className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted transition-colors"
            onClick={() => signOut()}
          >
            <LogOutIcon size={20} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
