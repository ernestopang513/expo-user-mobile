import InvoiceSvg from '@/presentation/invoices/components/InvoiceSvg';
import { useInvoice } from '@/presentation/invoices/hooks/useInvoice';
import { ThemedText } from '@/presentation/theme/components/themed-text';
import { ThemedView } from '@/presentation/theme/components/themed-view';
import ThemedButton from '@/presentation/theme/components/ThemedButton';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { StyleSheet } from 'react-native';
const InvoiceScreen = () => {
   const {invoiceId, contractId} = useLocalSearchParams();
   const navigation= useNavigation();
   const {invoiceQuery, invoiceMutation} = useInvoice(`${invoiceId}`, `${contractId}`);
  //  useEffect(() => {
  //    if(invoiceQuery.data){
  //       navigation.setOptions({
  //           title: ``
  //       })
  //    }
  //  }, [invoiceQuery.data])
   
    return (
      <>
          <InvoiceSvg/>
        <ThemedView margin style={{gap:20, backgroundColor: 'transparent'}}>
            <ThemedView level={2} style={[styles.infoStyles, {flex: 0, marginTop: 20}]}>
            <ThemedText>Usuario:</ThemedText>
            <ThemedText>{invoiceQuery.data?.userFullName}</ThemedText>
            </ThemedView>
            <ThemedView level={2} style={[styles.infoStyles, {flex: 0}]}>
            <ThemedText>Factura id:</ThemedText>
            <ThemedText>{invoiceQuery.data?.id}</ThemedText>
            </ThemedView>
            <ThemedView level={2} style={[styles.infoStyles, {flex: 0}]}>
            <ThemedText>Cantidad a pagar:</ThemedText>
            <ThemedText>{invoiceQuery.data?.amount}</ThemedText>
            </ThemedView>
            <ThemedView level={2} style={[styles.infoStyles, {flex: 0}]}>
            <ThemedText>Estatus:</ThemedText>
            <ThemedText>{invoiceQuery.data?.status}</ThemedText>
            </ThemedView>
            <ThemedView level={2} style={[styles.infoStyles, {flex: 0}]}>
            <ThemedText>Servicio:</ThemedText>
            <ThemedText>{invoiceQuery.data?.serviceName}</ThemedText>
            </ThemedView>

            {/* <ThemedView/> */}

            <ThemedButton 
              icon='cash'
              onPress={() => invoiceMutation.mutate()}  
              >Pagar</ThemedButton>
            {/* <ThemedView/> */}

            {/* <ThemedText>{JSON.stringify(invoiceQuery.data,null, 9 )}</ThemedText> */}
        </ThemedView>
</>
    )
}
export default InvoiceScreen

const styles = StyleSheet.create({
  infoStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  }
})