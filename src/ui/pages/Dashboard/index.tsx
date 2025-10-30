import { useAuth } from '../../../app/hooks/useAuth';
import { Button } from '../../components/Button';

export function Dashboard() {
  const { signOut } = useAuth();
  return (
    <div className="flex-1 bg-amber-100 justify-center items-center flex gap-2">
      <h1>Dashboard</h1>
      <Button className="bg-amber-700" onClick={signOut}>
        Logout
      </Button>
    </div>
  );
}
