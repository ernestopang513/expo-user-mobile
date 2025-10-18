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
        name='home'
        options={{
          title: 'Home',
          tabBarIcon: ({color, focused}) => <Ionicons size={28} name={focused?'home':'home-outline'} color={color} />
        }}
      />
      
      <Tabs.Screen
        name='settings'
        options={{
          title: 'Settings',
          tabBarIcon: ({color, focused}) => <Ionicons size={28} name={focused?'person':'person-outline'} color={color} />
        }}
      />
      
    </Tabs>
  )
}
export default TabLayout