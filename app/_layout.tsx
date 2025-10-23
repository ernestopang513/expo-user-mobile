import { ThemedView } from '@/presentation/theme/components/themed-view';
import { useColorScheme } from '@/presentation/theme/hooks/use-color-scheme';
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useSystemTheme } from '../presentation/theme/hooks/useSystemTheme';

// export const unstable_settings = {
//   anchor: '(tabs)',
// };

const queryClient = new QueryClient();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  useSystemTheme();
  const backgroudColor = useThemeColor({}, 'background');
  const [loaded] = useFonts({
    KanitRegular: require('../assets/fonts/Kanit-Regular.ttf'),
    KanitBold: require('../assets/fonts/Kanit-Bold.ttf'),
    KanitThin: require('../assets/fonts/Kanit-Thin.ttf'),
  })

  if (!loaded) {
    return null
  }


  
  

  return (
    <QueryClientProvider client={queryClient}>

      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <ThemedView>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: {
                backgroundColor: backgroudColor
              },
              headerStyle: {
                backgroundColor: backgroudColor
              },

            }}
          >
            {/* <Stack.Screen name='(user-movil-app)/(tabs)' options={{ headerShown: false, title: '' }} /> */}
            {/* <Stack.Screen
          name='(user-movil-app)'
          /> */}
          </Stack>
        </ThemedView>
        <StatusBar style="auto" />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

