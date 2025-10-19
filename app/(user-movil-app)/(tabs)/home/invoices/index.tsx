import { ThemedView } from '@/presentation/theme/components/themed-view'
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color'
import { Link } from 'expo-router'
import { Pressable, Text } from 'react-native'
const InvoicesScreen = () => {
     const iconColor = useThemeColor({}, 'icon')
  return (
    <ThemedView>
      <Text>InvoicesScreen</Text>
        <Link href='/(user-movil-app)/(tabs)/home/invoices/3' asChild>
                <Pressable style={{ backgroundColor: iconColor, width: 200, padding: 12 }}>
                    <Text >invoices id</Text>
                </Pressable>
            </Link>
    </ThemedView>
  )
}
export default InvoicesScreen