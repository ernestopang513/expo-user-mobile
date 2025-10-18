import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color'
import { Link } from 'expo-router'
import { Pressable, Text, View } from 'react-native'
const ContractScreen = () => {
    const iconColor = useThemeColor({}, 'icon')
  return (
    <View>
      <Text>ContractScreen</Text>
      <Text>Hola</Text>
       <Link href='/(user-movil-app)/(tabs)/home/invoices' asChild>
                      <Pressable style={{backgroundColor: iconColor, width: 200, padding: 12}}>
                          <Text >invoices</Text>
                      </Pressable>
                  </Link>
    </View>
  )
}
export default ContractScreen