import { useState, createContext, useContext, useEffect } from 'react';
import { users, User } from './users';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (usernameOrEmail: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('promptix_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = async (usernameOrEmail: string, password: string) => {
    // Check if input matches any username or email
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
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('promptix_user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
