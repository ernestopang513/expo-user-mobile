import { Colors } from '@/constants/theme'
import { useColorScheme } from '@/presentation/theme/hooks/use-color-scheme.web'
import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'


const TabLayout = () => {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => <Ionicons size={28} name='home-outline' color={color} />
        }}
      />
      
      <Tabs.Screen
        name='settings'
        options={{
          title: 'Settings',
          tabBarIcon: ({color}) => <Ionicons size={28} name='person-outline' color={color} />
        }}
      />
      
    </Tabs>
  )
}
export default TabLayout