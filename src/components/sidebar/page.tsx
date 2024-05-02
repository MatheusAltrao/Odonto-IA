import Navigation from './components/Navigation';

const Sidebar = () => {
  return (
    <div className="flex h-full flex-col bg-background border-r  ">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="text-xl font-bold">Dashboard</div>
      </div>

      <Navigation />

      <div className="border-t border-border px-4 py-4">
        <div className="text-sm">
          <div className="font-medium">Jared Palmer</div>
          <div className="text-muted-foreground">jared@example.com</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
