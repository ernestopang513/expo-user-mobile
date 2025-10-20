import LogoutIconButton from '@/presentation/auth/components/LogoutIconButton'
import { useAuthStore } from '@/presentation/auth/store/useAuthStore'
import { useColorScheme } from '@/presentation/theme/hooks/use-color-scheme.web'
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color'
import { Ionicons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur'
import { Tabs } from 'expo-router'
import { useWindowDimensions } from 'react-native'

const TabLayout = () => {
  const colorScheme = useColorScheme()
  const user = useAuthStore(state => state.user)
  const backgroundColor = useThemeColor({}, 'background')
  const primaryColor = useThemeColor({}, 'primary')
  const {width} = useWindowDimensions();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorScheme === 'dark' ? 'white' : primaryColor,
        headerShown: false,
        sceneStyle: {
          backgroundColor: backgroundColor,
        },
        //  Estilos TabBar flotante
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          // transform: [{ translateX: (width * 0.5) / 2 }],
          transform: [{ translateX: (width - width * 0.7) / 2 }],
          // left: 20,
          // right: 20,
          elevation: 0,
          height: 50,
          width: width * 0.7 ,
          borderRadius: 25,
          borderCurve: 'continuous',
          backgroundColor: colorScheme === 'dark' ?'rgba(255, 255, 255, 0.15)':' rgba(51, 102, 255, 0.4)', 
          borderWidth: 1,
          borderColor: 'rgba(255, 255, 255, 0.3)',
          overflow: 'hidden',
        },
        tabBarBackground: () => (
          <BlurView
            intensity={100}
            tint={colorScheme === 'dark' ? 'dark' : 'light'}
            style={{ flex:1 }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons size={26} name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons size={26} name={focused ? 'person' : 'person-outline'} color={color} />
          ),
          headerShown: true,
          headerRight: () => <LogoutIconButton />,
          headerTitle: user?.username ?? 'User',
          headerShadowVisible: false,
          headerStyle: { backgroundColor },
        }}
      />
    </Tabs>
  )
}

export default TabLayout
