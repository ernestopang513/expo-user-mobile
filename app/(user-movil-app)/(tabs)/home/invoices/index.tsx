import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color'
import { Link } from 'expo-router'
import { Pressable, Text, View } from 'react-native'
const InvoicesScreen = () => {
     const iconColor = useThemeColor({}, 'icon')
  return (
    <View>
      <Text>InvoicesScreen</Text>
        <Link href='/(user-movil-app)/(tabs)/home/invoices/3' asChild>
                <Pressable style={{ backgroundColor: iconColor, width: 200, padding: 12 }}>
                    <Text >invoices id</Text>
                </Pressable>
            </Link>
    </View>
  )
}
export default InvoicesScreen