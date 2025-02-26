import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
  colors: typeof themes.light;
}

export const themes = {
  light: {
    primary: '#6366f1',
    background: '#ffffff',
    card: '#ffffff',
    text: '#111827',
    subtext: '#6b7280',
    border: '#e5e7eb',
    input: '#f3f4f6',
    error: '#ef4444',
    success: '#10b981',
    warning: '#f59e0b',
  },
  dark: {
    primary: '#818cf8',
    background: '#111827',
    card: '#1f2937',
    text: '#f3f4f6',
    subtext: '#9ca3af',
    border: '#374151',
    input: '#374151',
    error: '#f87171',
    success: '#34d399',
    warning: '#fbbf24',
  },
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
  isDark: false,
  colors: themes.light,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>(systemColorScheme || 'light');

  useEffect(() => {
    if (systemColorScheme) {
      setTheme(systemColorScheme);
    }
  }, [systemColorScheme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
    colors: themes[theme],
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);