import { useAuthStore } from '@/presentation/auth/store/useAuthStore';
import { Redirect, Stack } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
const CheckAuthenticationLayout = () => {

  const status  = useAuthStore(state => state.status);
  const checkStatus  = useAuthStore(state => state.checkStatus);

  useEffect(() => {
    checkStatus();
  }, [])
  
  
  if (status === 'checking') {
    return (
      <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
      }}
      >
        <ActivityIndicator />
      </View>
    );
  }
  
  if (status === 'unauthenticated') {
    return <Redirect href="/auth/login" />;
  }

  return (
    <Stack
        screenOptions={{
            headerShown: false
        }}
    >
      <Stack.Screen
        name='(tabs)/home'
      />
    </Stack>
  )
}
export default CheckAuthenticationLayout