import { ThemedView } from '@/presentation/theme/components/themed-view';
import { useColorScheme } from '@/presentation/theme/hooks/use-color-scheme';
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

// export const unstable_settings = {
//   anchor: '(tabs)',
// };

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const backgroudColor = useThemeColor({}, 'background');
  const [loaded] = useFonts({
    KanitRegural: require('../assets/fonts/Kanit-Regular.ttf'),
    KanitBold: require('../assets/fonts/Kanit-Bold.ttf'),
    KanitThin: require('../assets/fonts/Kanit-Thin.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
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
  );
}

