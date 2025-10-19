import { ThemedView } from '@/presentation/theme/components/themed-view'
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color'
import { router } from 'expo-router'
import { Pressable, Text } from 'react-native'
const RegisterScreen = () => {
    const iconColor = useThemeColor({}, 'icon')
  
  return (
    <ThemedView safe>
      <Text style = {{color: 'red'}}>RegisterScreen</Text>

      {/* <Link href='/auth/login' asChild> */}
        <Pressable 
        onPress={router.back}
        style={{ backgroundColor: iconColor, width: 200, padding: 12 }}>
          <Text >log in</Text>
        </Pressable>
      {/* </Link> */}


    </ThemedView>
  )
}
export default RegisterScreen