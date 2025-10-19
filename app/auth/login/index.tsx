import { ThemedView } from '@/presentation/theme/components/themed-view'
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color'
import { Link } from 'expo-router'
import { Pressable, Text } from 'react-native'
const LoginScreen = () => {
  const iconColor = useThemeColor({}, 'icon')
  return (

    <ThemedView safe>
      <Text>LoginScreen</Text>

      <Link href='/auth/register' asChild>
        <Pressable style={{ backgroundColor: iconColor, width: 200, padding: 12 }}>
          <Text >Contract id</Text>
        </Pressable>
      </Link>


    </ThemedView>
  )
}
export default LoginScreen