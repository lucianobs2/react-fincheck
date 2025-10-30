import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../app/hooks/useAuth';

interface AuthGuardProps {
  isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const { hasAccessToken } = useAuth();

  if (!hasAccessToken && isPrivate) {
    return <Navigate to="/login" replace />;
  }

  if (hasAccessToken && !isPrivate) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
