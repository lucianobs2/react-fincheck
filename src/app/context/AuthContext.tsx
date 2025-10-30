import { useQuery } from '@tanstack/react-query';
import { createContext, useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { LaunchScreen } from '../../ui/components/LaunchScreen';
import { LOCAL_STORAGE_KEYS } from '../config/localStorageKeys';
import { usersService } from '../services/usersService';

interface AuthContextValue {
  hasAccessToken: boolean;
  signIn: (accessToken: string) => void;
  signOut?: () => void;
}

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [hasAccessToken, setHasAccessToken] = useState<boolean>(() => {
    const hasLocalStorageToken = localStorage.getItem(
      LOCAL_STORAGE_KEYS.ACCESS_TOKEN
    );
    return !!hasLocalStorageToken;
  });

  const { isError, isSuccess, isFetching } = useQuery({
    queryKey: ['users', 'me'],
    enabled: hasAccessToken,
    queryFn: () => usersService.me(),
  });

  const signIn = useCallback((accessToken: string) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);
    localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
    setHasAccessToken(true);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
    setHasAccessToken(false);
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error('Sua sessão expirou. Por favor, faça login novamente.');

      signOut();
    }
  }, [isError, signOut]);

  return (
    <AuthContext.Provider
      value={{ hasAccessToken: isSuccess && hasAccessToken, signIn, signOut }}
    >
      <LaunchScreen isLoading={isFetching} />

      {!isFetching && children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
