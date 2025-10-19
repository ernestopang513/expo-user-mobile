import { ThemedText } from '@/presentation/theme/components/themed-text'
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color'
import { Link } from 'expo-router'
import { KeyboardAvoidingView, Pressable, Text, useWindowDimensions, View } from 'react-native'
const LoginScreen = () => {
  const iconColor = useThemeColor({}, 'icon')

  const {height} = useWindowDimensions();
  return (

    <KeyboardAvoidingView
      behavior='padding'
      style = {{flex: 1}}
    >

    {/* <ThemedView safe> */}
      <View style ={{
        paddingTop: height * 0.35
      }}>

      <ThemedText type='title'>LoginScreen</ThemedText>
      </View>

      <Link href='/auth/register' asChild>
        <Pressable style={{ backgroundColor: iconColor, width: 200, padding: 12 }}>
          <Text >Contract id</Text>
        </Pressable>
      </Link>


    {/* </ThemedView> */}
    </KeyboardAvoidingView>
  )
}
export default LoginScreen