import { createContext } from 'react';

interface AuthContextValue {
  hasAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <AuthContext.Provider value={{ hasAuthenticated: false }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
