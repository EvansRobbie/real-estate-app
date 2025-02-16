import { createContext, useContext } from "react";
import { useAppwrite } from "./use-appwrite";
import { getCurrentUser } from "./appwrite";

interface User {
  $id: string;
  name: string;
  email: string;
  avatar: string;
}

interface GlobalContextType {
  isLoggedIn: boolean;
  user: User | null | undefined;
  loading: boolean;
  refetch: (
    newParams?: Record<string, string | number> | undefined
  ) => Promise<void>;
}

const GlobaContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: user, loading, refetch } = useAppwrite({ fn: getCurrentUser });
  const isLoggedIn = !!user;
  return (
    <GlobaContext.Provider value={{ isLoggedIn, user, loading, refetch }}>
      {children}
    </GlobaContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobaContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
