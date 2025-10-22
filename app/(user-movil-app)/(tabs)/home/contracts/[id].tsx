import { useContract } from '@/presentation/contracts/hooks/useContract'
import { useInvoices } from '@/presentation/invoices/hooks/useInvoices'
import { ThemedText } from '@/presentation/theme/components/themed-text'
import { ThemedView } from '@/presentation/theme/components/themed-view'
import ThemedButton from '@/presentation/theme/components/ThemedButton'
import { router, useLocalSearchParams, useNavigation } from 'expo-router'
import { useEffect } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
const ContractScreen = () => {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { invoicesQuery } = useInvoices(id);
  // const {} = useContract(`${id}`);
  const { contractQuery } = useContract(id);

  useEffect(() => {
    if(contractQuery.data){
      navigation.setOptions({
        title: `Servicio: ${contractQuery.data.serviceName}`
      })
    }
  }, [contractQuery.data])
  

  return (


    <FlatList
      contentContainerStyle = {{
        paddingHorizontal: 10,
        paddingBottom: 30,
        gap: 25
      }}
      data={invoicesQuery.data}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <ThemedView level={2} style={{
          padding: 10,
          borderRadius: 10,
          gap: 10
        }}>
          <ThemedView level={2} style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ThemedText>Factura:</ThemedText>
            <ThemedText>{item.status}</ThemedText>
          </ThemedView>
          <ThemedView  level = {3} style={styles.infoStyles}>
            <ThemedText>Cantidad a pagar:</ThemedText>
            <ThemedText>$ {item.amount}</ThemedText>
          </ThemedView>
          <ThemedView level={3} style={styles.infoStyles}>
            <ThemedText>Generada</ThemedText>
            <ThemedText>{item.issuedAt}</ThemedText>
          </ThemedView>
          <ThemedButton 
            style = {{paddingVertical: 10}}
            onPress={() => router.push(`/(user-movil-app)/(tabs)/home/invoices/${item.id}`)}  
          >Detalle</ThemedButton>
        </ThemedView>
      )}

      ListHeaderComponent = {
        <ThemedView>
          <ThemedText type='subtitle'>Contract</ThemedText>
          <View style={styles.infoStyles}>
            <ThemedText>Fecha de contratación:</ThemedText>
            <ThemedText>{contractQuery.data?.startDate}</ThemedText>
          </View>
          <View style={styles.infoStyles}>
            <ThemedText>Fecha de terminación:</ThemedText>
            <ThemedText>{contractQuery.data?.endDate}</ThemedText>
            
          </View>
        </ThemedView>
      }
      stickyHeaderIndices={[0]}
    />

    // <ThemedView>
    //   <ThemedText>ContractScreen</ThemedText>
    //   <ThemedText>{id}</ThemedText>
    //    <Link href='/(user-movil-app)/(tabs)/home/invoices' asChild>
    //                   <Pressable style={{backgroundColor: iconColor, width: 200, padding: 12}}>
    //                       <ThemedText >invoices</ThemedText>
    //                   </Pressable>
    //               </Link>
    // </ThemedView>
  )
}
export default ContractScreen


const styles = StyleSheet.create({
  infoStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  }
})