import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color';
import { Stack } from 'expo-router';
const HomeLayout = () => {
  const backgroundColor = useThemeColor({}, 'background');
  return (
    <Stack 
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: backgroundColor,
          
        },
        contentStyle: {
          backgroundColor,
        }
      }}
      initialRouteName='contracts/index'
      
      >
      <Stack.Screen
        name='contracts/index'
        options={{
            title: 'Contratos'
        }}
      />
      <Stack.Screen
        name='contracts/[id]'
        options={{
            title: '',
            presentation: 'modal'
        }}
      />
      <Stack.Screen
        name='invoices/index'
        options={{
            title: 'Facturas'
        }}
      />
      <Stack.Screen
        name='invoices/[invoiceId]'
        options={{
            title: 'Factura: id'
        }}
      />
    </Stack>
  )
}
export default HomeLayout