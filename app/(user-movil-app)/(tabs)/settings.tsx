import { useAuthStore } from '@/presentation/auth/store/useAuthStore'
import { ThemedView } from '@/presentation/theme/components/themed-view'
import ThemedButton from '@/presentation/theme/components/ThemedButton'
import { Text, View } from 'react-native'
const SettingsScreen = () => {
  const logout = useAuthStore(state => state.logout);
  return (
    <ThemedView safe style = {{paddingHorizontal: 40, paddingTop: 40}}  >
      
      <Text>SettingsScreen</Text>

      <View style = {{flex:1}} />

      <ThemedButton 
        onPress={logout}
      style={{marginBottom: 20}}>
        Salir
      </ThemedButton>

    </ThemedView>
  )
}
export default SettingsScreen