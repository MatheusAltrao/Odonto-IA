import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import DropdownTheme from './components/theme/DropdownTheme';

const Settings = () => {
  return (
    <Card className="space-y-4 border-0 p-0 shadow-none">
      <CardHeader className="p-0">
        <CardTitle>Aparência</CardTitle>
        <CardDescription className="max-w-[500px] ">
          Personalize a aparência do aplicativo. Alterne automaticamente entre light e dark.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-4">
          <div>
            <h2 className="text-base font-medium">Tema</h2>
            <p className="text-sm text-muted-foreground">Select the theme for the dashboard.</p>
          </div>

          <DropdownTheme />
        </div>
      </CardContent>
    </Card>
  );
};

export default Settings;
