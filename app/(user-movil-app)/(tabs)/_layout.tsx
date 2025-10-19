import { useColorScheme } from '@/presentation/theme/hooks/use-color-scheme.web'
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color'
import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'


const TabLayout = () => {
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor({}, 'background');
  const primaryColor = useThemeColor({}, 'primary') 
  return (

      <Tabs
        screenOptions={{
          // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          tabBarActiveTintColor: colorScheme === 'dark' ? 'white' : primaryColor,
          headerShown: false,
          //! SUPER importante para el color interno de la transisión
          sceneStyle: {
            backgroundColor: backgroundColor
          }
        }}
      >
        <Tabs.Screen
          name='home'
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => <Ionicons size={28} name={focused ? 'home' : 'home-outline'} color={color} />
          }}
        />

        <Tabs.Screen
          name='settings'
          options={{
            title: 'Settings',
            tabBarIcon: ({ color, focused }) => <Ionicons size={28} name={focused ? 'person' : 'person-outline'} color={color} />
          }}
        />

      </Tabs>
  )
}
export default TabLayout