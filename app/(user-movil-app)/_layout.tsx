import { useAuthStore } from '@/presentation/auth/store/useAuthStore';
import { ThemedView } from '@/presentation/theme/components/themed-view';
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color';
import { Redirect, Stack } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
const CheckAuthenticationLayout = () => {

  const status = useAuthStore(state => state.status);
  const checkStatus = useAuthStore(state => state.checkStatus);
  const backgroundColor = useThemeColor({}, 'background');

  useEffect(() => {
    checkStatus();
  }, [])


  if (status === 'checking') {
    return (
      <ThemedView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 5,
        }}
      >
        <ActivityIndicator />
      </ThemedView>
    );
  }

  if (status === 'unauthenticated') {
    return <Redirect href="/auth/login" />;
  }

  return (
    <ThemedView>

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: backgroundColor,
          }
        }}
      >
        <Stack.Screen
          name='(tabs)'
        />
      </Stack>
    </ThemedView>
  )
}
export default CheckAuthenticationLayout