import { useAuthStore } from '@/presentation/auth/store/useAuthStore';
import { useContracts } from '@/presentation/contracts/hooks/useContracts';
import SkeletonCard from '@/presentation/theme/components/SkeletonCard';
import { ThemedText } from '@/presentation/theme/components/themed-text';
import { ThemedView } from '@/presentation/theme/components/themed-view';
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
const ContractsScreen = () => {

    const user = useAuthStore(state => state.user);

    const { contractsQuery } = useContracts(`${user?.id}`);
    const iconColor = useThemeColor({}, 'text');
    const primary = useThemeColor({}, 'primary');
    const [refreshing, setRefreshing] = useState(false);

    const handleRefresh = async () => {
        setRefreshing(true);
        try {
            await contractsQuery.refetch();
        } finally {
            setRefreshing(false);
        }
    }

    return (

        <FlatList
            contentContainerStyle={{
                paddingHorizontal: 10,
                paddingBottom: 30,
                gap: 20
            }}
            data={contractsQuery.data}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity
                        onPress={() => router.push(`/(user-movil-app)/(tabs)/home/contracts/${item.id}`)}
                    >

                        <ThemedView level={2} style={{
                            paddingHorizontal: 10,
                            borderWidth: 0.5,
                            borderRadius: 10,
                            paddingBottom: 10,
                            gap: 20

                        }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                backgroundColor: primary, // azul
                                borderBottomLeftRadius: 40, // curva inferior izquierda
                                borderBottomRightRadius: 40, // curva inferior derecha
                                paddingHorizontal: 16,
                                width: '100%', // ocupa todo el ancho
                                // height: 100, // cuadrado (ajusta según gusto)
                            }}>
                                <ThemedText type='subtitle' style={{color: 'white'}}>Contrato</ThemedText>
                                <Ionicons name='list-circle' size={28} color={'white'} />
                            </View>
                            <ThemedView level={3} style={styles.infoStyles} >
                                <ThemedText>Status:</ThemedText>
                                <ThemedText>{item.status}</ThemedText>
                            </ThemedView>
                            <ThemedView level={3} style={styles.infoStyles} >
                                <ThemedText>Servicio:</ThemedText>
                                <ThemedText>{item.serviceName}</ThemedText>
                            </ThemedView>
                            {/* <ThemedView level={3} style={styles.infoStyles} >
                                <ThemedText>Cliente:</ThemedText>
                                <ThemedText>{item.userFullName}</ThemedText>
                            </ThemedView> */}
                            {/* <ThemedView level={3} style={styles.infoStyles} >
                                <ThemedText>Price:</ThemedText>
                                <ThemedText>${item.servicePrice}</ThemedText>
                            </ThemedView> */}
                            {/* <ThemedView level={3} style={styles.infoStyles} >
                                <ThemedText>Fecha de contratación:</ThemedText>
                                <ThemedText>{item.startDate}</ThemedText>
                            </ThemedView> */}
                            {/* <ThemedView level={3} style={styles.infoStyles} >
                                <ThemedText>Fecha de termino:</ThemedText>
                                <ThemedText>{item.endDate}</ThemedText>
                            </ThemedView> */}
                        </ThemedView>
                    </TouchableOpacity>
                )
            }}

            ListEmptyComponent={
                contractsQuery.isLoading
                    ? <SkeletonCard />
                    : <ThemedView>
                        <ThemedText type='defaultSemiBold' style={{ fontFamily: 'KanitRegural' }} >Sin pendientes</ThemedText>
                    </ThemedView>
            }
            refreshing={refreshing}
            onRefresh={handleRefresh}
        />

    )
}
export default ContractsScreen

const styles = StyleSheet.create({
    infoStyles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
    }
})