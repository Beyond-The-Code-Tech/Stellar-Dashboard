import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserSettings } from '../types/dashboard';

interface DashboardState {
  theme: 'light' | 'dark';
  isAuthenticated: boolean;
  settings: UserSettings;
  setTheme: (theme: 'light' | 'dark') => void;
  setAuthenticated: (status: boolean) => void;
  updateSettings: (settings: Partial<UserSettings>) => void;
}

export const useStore = create<DashboardState>()(
  persist(
    (set) => ({
      theme: 'light',
      isAuthenticated: false,
      settings: {
        theme: 'light',
        layout: [],
      },
      setTheme: (theme) => set({ theme }),
      setAuthenticated: (status) => set({ isAuthenticated: status }),
      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),
    }),
    {
      name: 'stellar-dashboard-storage',
    }
  )
);