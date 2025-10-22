import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { darkTheme, lightTheme, useThemeStore } from '../store/useThemeStore';

export function useSystemTheme() {
  const colorScheme = useColorScheme();
  const setTheme = useThemeStore((s) => s.setTheme);

  useEffect(() => {
    setTheme(colorScheme === 'dark' ? darkTheme : lightTheme);
  }, [colorScheme]);
}
