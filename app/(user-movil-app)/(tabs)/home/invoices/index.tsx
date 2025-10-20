import { ThemedText } from '@/presentation/theme/components/themed-text'
import { ThemedView } from '@/presentation/theme/components/themed-view'
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color'
import { Link } from 'expo-router'
import { Pressable } from 'react-native'
const InvoicesScreen = () => {
     const iconColor = useThemeColor({}, 'icon')
  return (
    <ThemedView>
      <ThemedText>InvoicesScreen</ThemedText>
        <Link href='/(user-movil-app)/(tabs)/home/invoices/3' asChild>
                <Pressable style={{ backgroundColor: iconColor, width: 200, padding: 12 }}>
                    <ThemedText >invoices id</ThemedText>
                </Pressable>
            </Link>
    </ThemedView>
  )
}
export default InvoicesScreen