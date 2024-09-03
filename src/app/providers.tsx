import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { UserProvider } from './contexts/userContext';
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <UserProvider>
        {children}
      </UserProvider>
    </SessionProvider>
  );
}