import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { users, User } from './db';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (usernameOrEmail: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: async () => ({ success: false }),
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('promptix_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = useCallback(async (usernameOrEmail: string, password: string) => {
    const matchedUser = users.find(
      u => (u.username.toLowerCase() === usernameOrEmail.toLowerCase() ||
           u.email.toLowerCase() === usernameOrEmail.toLowerCase()) &&
           u.password === password
    );

    if (matchedUser) {
      setUser(matchedUser);
      localStorage.setItem('promptix_user', JSON.stringify(matchedUser));
      return { success: true };
    }

    return {
      success: false,
      error: 'Invalid credentials. Please check your username/email and password.'
    };
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('promptix_user');
  }, []);

  return (
    <AuthContext.Provider 
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
