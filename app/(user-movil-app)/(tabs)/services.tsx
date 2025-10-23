import { useServices } from '@/presentation/services/hooks/useServices';
import { ThemedText } from '@/presentation/theme/components/themed-text';
import { ThemedView } from '@/presentation/theme/components/themed-view';
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const services = () => {
    const { servicesQuery } = useServices();
    const primary = useThemeColor({}, 'primary')
    const { top } = useSafeAreaInsets();
    return (
        <FlatList
            contentContainerStyle={{
                paddingTop: top + 20,
                gap: 20,
                paddingHorizontal: 20
            }}
            data={servicesQuery.data}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => (
                <ThemedView
                    level={3}
                    style={{
                        padding: 10,
                        borderRadius: 10,
                        gap: 10,
                        flexDirection: 'row', // Para poner la ola a un lado
                        alignItems: 'stretch',
                    }}
                >
                    {/* Ola lateral */}
                    <View
                        style={{
                            width: 20, // grosor de la ola
                            // backgroundColor: '#007BFF', // color azul o el que prefieras
                            backgroundColor: primary, // color azul o el que prefieras
                            borderTopLeftRadius: 40, // curvatura superior
                            borderBottomRightRadius: 40, // curvatura inferior
                            marginRight: 8, // separación con el contenido
                        }}
                    />

                    {/* Contenido principal */}
                    <View style={{ flex: 1, gap: 10 }}>
                        <ThemedView level={4} style={styles.ServiceInfoStyles}>
                            <ThemedText style={{ fontFamily: 'KanitRegular' }}>{item.name}</ThemedText>
                            <ThemedText style={{ fontFamily: 'KanitBold' }}>${item.price}</ThemedText>
                        </ThemedView>

                        <ThemedView level={4} style={styles.ServiceInfoStyles}>
                            <ThemedText style={{ fontFamily: 'KanitRegular' }}>Disponibilidad</ThemedText>
                            <ThemedText style={{ fontFamily: 'KanitBold' }}>
                                {item.active ? 'Activa' : 'No activa'}
                            </ThemedText>
                        </ThemedView>
                    </View>
                </ThemedView>

            )}
            ListHeaderComponent={
                <ThemedView style={{ paddingBottom: 30 }}>
                    <ThemedText type='defaultSemiBold' style={{ fontFamily: 'KanitBold', fontSize: 30 }} >Servicios</ThemedText>
                </ThemedView>
            }
        />
    )
}
export default services

const styles = StyleSheet.create({
    ServiceInfoStyles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
    }
})