import { ThemedText } from '@/presentation/theme/components/themed-text'
import { ThemedView } from '@/presentation/theme/components/themed-view'
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color'
import { Link } from 'expo-router'
import { Pressable } from 'react-native'
const ContractScreen = () => {
    const iconColor = useThemeColor({}, 'icon')
  return (
    <ThemedView>
      <ThemedText>ContractScreen</ThemedText>
      <ThemedText>Hola</ThemedText>
       <Link href='/(user-movil-app)/(tabs)/home/invoices' asChild>
                      <Pressable style={{backgroundColor: iconColor, width: 200, padding: 12}}>
                          <ThemedText >invoices</ThemedText>
                      </Pressable>
                  </Link>
    </ThemedView>
  )
}
export default ContractScreen