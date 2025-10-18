import { Stack } from 'expo-router'
const HomeLayout = () => {
  return (
    <Stack initialRouteName='contracts/index'>
      <Stack.Screen
        name='contracts/index'
        options={{
            title: 'Contratos'
        }}
      />
      <Stack.Screen
        name='contracts/[id]'
        options={{
            title: 'Contrato: id'
        }}
      />
      <Stack.Screen
        name='invoices/index'
        options={{
            title: 'Facturas'
        }}
      />
      <Stack.Screen
        name='invoices/[id]'
        options={{
            title: 'Factura: id'
        }}
      />
    </Stack>
  )
}
export default HomeLayout