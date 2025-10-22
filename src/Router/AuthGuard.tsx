import { Navigate, Outlet } from 'react-router-dom';

interface AuthGuardProps {
  isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const hasAuthenticated = false;

  if (!hasAuthenticated && isPrivate) {
    return <Navigate to="/login" replace />;
  }

  if (hasAuthenticated && !isPrivate) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
