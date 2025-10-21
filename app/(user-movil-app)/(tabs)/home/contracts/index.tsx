import { useAuthStore } from '@/presentation/auth/store/useAuthStore';
import { useContracts } from '@/presentation/contracts/hooks/useContracts';
import SkeletonCard from '@/presentation/theme/components/SkeletonCard';
import { ThemedText } from '@/presentation/theme/components/themed-text';
import { ThemedView } from '@/presentation/theme/components/themed-view';
import { FlatList } from 'react-native';
const ContractsScreen = () => {

    const user = useAuthStore(state => state.user);

    const {contractsQuery} = useContracts(`${user?.id}`);

    return (

             <FlatList
                contentContainerStyle = {{
                    paddingHorizontal: 10,
                    paddingBottom: 30
                }}
                data={contractsQuery.data}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({item}) => {
                    return (
                        <ThemedView>
                            <ThemedText>Contrato</ThemedText>
                            <ThemedText>Status: {item.status}</ThemedText>
                            {/* <ThemedText>Id: {item.id}</ThemedText> */}
                            <ThemedText>Servicio: {item.serviceName}</ThemedText>
                            <ThemedText>Cliente: {item.userFullName}</ThemedText>
                            <ThemedText>Price: {item.servicePrice}</ThemedText>
                            <ThemedText>Fecha de contraración: {item.startDate}</ThemedText>
                        </ThemedView>
                    )
                }}
                
                ListEmptyComponent={
                    contractsQuery.isLoading
                    ? <SkeletonCard/>
                    : <ThemedView>
                        <ThemedText type='defaultSemiBold' style ={{fontFamily: 'KanitRegural'}} >Sin pendientes</ThemedText>
                    </ThemedView>
                }
                refreshing={contractsQuery.isRefetching}
                onRefresh={contractsQuery.refetch}
             />

    )
}
export default ContractsScreen