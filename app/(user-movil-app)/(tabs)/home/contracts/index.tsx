import { useAuthStore } from '@/presentation/auth/store/useAuthStore'
import { ThemedView } from '@/presentation/theme/components/themed-view'
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color'
import { Link } from 'expo-router'
import { Pressable, Text } from 'react-native'
const ContractsScreen = () => {
    const iconColor = useThemeColor({}, 'icon')
    const status = useAuthStore(state => state.status);
    return (
        <ThemedView style = {{marginHorizontal: 20}}>
            <Text>ContractsScreen</Text>

            <Link href='/(user-movil-app)/(tabs)/home/contracts/3' asChild>
                <Pressable style={{backgroundColor: iconColor, width: 200, padding: 12}}>
                    <Text >Contract id</Text>
                </Pressable>
            </Link>

            <Text>{status}</Text>
            

        </ThemedView>
    )
}
export default ContractsScreen