import create from 'zustand';

interface ThemeState {
  theme: {
    name: string;
    bgColor: string;
    textColor: string;
    accentColor: string;
  };
  setTheme: (name: string) => void;
}

const themes = {
  nebulaPurple: {
    name: 'nebulaPurple',
    bgColor: 'bg-gradient-to-br from-purple-900 via-gray-900 to-black',
    textColor: 'text-purple-50',
    accentColor: 'purple',
  },
  starburstBlue: {
    name: 'starburstBlue',
    bgColor: 'bg-gradient-to-br from-blue-900 via-gray-900 to-black',
    textColor: 'text-blue-50',
    accentColor: 'blue',
  },
  cosmicRed: {
    name: 'cosmicRed',
    bgColor: 'bg-gradient-to-br from-red-900 via-gray-900 to-black',
    textColor: 'text-red-50',
    accentColor: 'red',
  },
};

export const useTheme = create<ThemeState>((set) => ({
  theme: themes.nebulaPurple,
  setTheme: (name) => set({ theme: themes[name as keyof typeof themes] }),
}));