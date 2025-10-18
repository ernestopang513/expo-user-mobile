import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color'
import { Link } from 'expo-router'
import { Pressable, Text, View } from 'react-native'
const ContractsScreen = () => {
    const iconColor = useThemeColor({}, 'icon')
    return (
        <View>
            <Text>ContractsScreen</Text>

            <Link href='/(user-movil-app)/(tabs)/home/contracts/3' asChild>
                <Pressable style={{backgroundColor: iconColor, width: 200, padding: 12}}>
                    <Text >Contract id</Text>
                </Pressable>
            </Link>

        </View>
    )
}
export default ContractsScreen