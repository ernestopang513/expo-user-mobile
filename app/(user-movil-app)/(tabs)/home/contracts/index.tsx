import { useAuthStore } from '@/presentation/auth/store/useAuthStore'
import { ThemedText } from '@/presentation/theme/components/themed-text'
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { Link } from 'expo-router'
import { Pressable, ScrollView, View } from 'react-native'
const ContractsScreen = () => {
    const iconColor = useThemeColor({}, 'icon')
    const status = useAuthStore(state => state.status);
    const tabBarHeight = useBottomTabBarHeight();
    return (
        <ScrollView style = {{}}
            contentContainerStyle = {{
                paddingHorizontal: 10,
                paddingBottom: tabBarHeight + 30
            }}
        >
            <ThemedText>ContractsScreen</ThemedText>

            <Link href='/(user-movil-app)/(tabs)/home/contracts/3' asChild>
                <Pressable style={{backgroundColor: iconColor, width: 200, padding: 12}}>
                    <ThemedText >Contract id</ThemedText>
                </Pressable>
            </Link>

            <View style ={{height: 200, backgroundColor: 'green', marginVertical: 25}} />
            <View style ={{height: 200, backgroundColor: 'green', marginVertical: 25}} />
            <View style ={{height: 200, backgroundColor: 'green', marginVertical: 25}} />
            <View style ={{height: 200, backgroundColor: 'green', marginVertical: 25}} />
            <View style ={{height: 200, backgroundColor: 'green', marginVertical: 25}} />

            <ThemedText>{status}</ThemedText>
            

        </ScrollView>
    )
}
export default ContractsScreen