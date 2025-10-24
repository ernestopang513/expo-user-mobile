import { useAuthStore } from '@/presentation/auth/store/useAuthStore';
import { ServicesListImage } from '@/presentation/services/components/ServiceListImage';
import ServicesSvg from '@/presentation/services/components/ServicesSvg';
import { useServices } from '@/presentation/services/hooks/useServices';
import { ThemedText } from '@/presentation/theme/components/themed-text';
import { ThemedView } from '@/presentation/theme/components/themed-view';
import ThemedButton from '@/presentation/theme/components/ThemedButton';
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color';
import ConfirmationModal from '@/shared/components/ConfirmationModal';
import { useModal } from '@/shared/hooks/useModal';
import { useState } from 'react';
import { FlatList, Modal, Pressable, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const services = () => {
    const { top } = useSafeAreaInsets();
    const {height, width} = useWindowDimensions();
    const { visible, openModal, closeModal } = useModal();
    const primary = useThemeColor({}, 'primary');
    const backgroundColor = useThemeColor({}, 'background');
    const user = useAuthStore(state=> state.user);
    const [shownConfirm, setShownConfirm] = useState(false);
    
    const [selectedService, setSelectedService] = useState({
        name: '',
        id: '',
        price: '',
    });
    
    const { servicesQuery, servicesMutate } = useServices(`${user?.id}`, selectedService.id);

    return (
        <>
            <FlatList
                contentContainerStyle={{
                    paddingTop: top + 20,
                    gap: 20,
                    paddingHorizontal: 20
                }}
                data={servicesQuery.data}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            setSelectedService({
                                name: item.name,
                                id: item.id.toString(),
                                price: item.price.toString()
                            })
                            openModal()
                        }}
                    >

                    <ThemedView
                        level={3}
                        style={{
                            // padding: 10,
                            borderRadius: 10,
                            gap: 10,
                            // flexDirection: 'row', // Para poner la ola a un lado
                            // alignItems: 'stretch',
                            paddingLeft: 40
                        }}



                        >
                        {/* Ola lateral */}
                        {/* <View
                            style={{
                                width: 20, // grosor de la ola
                                // backgroundColor: '#007BFF', // color azul o el que prefieras
                                backgroundColor: primary, // color azul o el que prefieras
                                borderTopLeftRadius: 40, // curvatura superior
                                borderBottomRightRadius: 40, // curvatura inferior
                                marginRight: 8, // separación con el contenido
                            }}



                        /> */}

                        {/* <View style={{
                            width: 20
                        }}> */}
                            {/* <ServicesListSvg/> */}
                            <ServicesListImage/>

                        {/* </View> */}


                        {/* Contenido principal */}
                        <View style={{ flex: 1, gap: 10, padding: 10 }}>
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
                </TouchableOpacity>

                )}
                ListHeaderComponent={
                    <ThemedView style={{ paddingBottom: 30 }}>
                        <ThemedText type='defaultSemiBold' style={{ fontFamily: 'KanitBold', fontSize: 30 }} >Servicios</ThemedText>
                    </ThemedView>
                }
            />
            <Modal
                visible={visible}
                animationType='slide'
                transparent
                statusBarTranslucent
                onRequestClose={() => {
                    closeModal();
                }}
            >
                <Pressable
                    style={styles.backDrop}
                    onPress={() => {
                        closeModal();

                    }}
                >
                    <TouchableWithoutFeedback>
                        <View style={[styles.modalContainer, {marginTop: height * 0.7, backgroundColor: backgroundColor}]}>
                              <ServicesSvg/>
                            
                            <View style={{ justifyContent: 'space-between', flex: 1 }}>


                                <View style={{
                                    paddingHorizontal: 20,
                                    gap: 10
                                }}>

                                    {/* <FlatList
                                        style={{ height: '90%' }}
                                        data={dishes.data}
                                        ListHeaderComponent={
                                            <Text style={styles.modalHeader} >Platillos</Text>

                                        }
                                        // contentContainerStyle = {{ height: '40%'}}
                                        renderItem={({ item }) =>
                                            <DishCard dish={item} styleProp={selectedDish === item.id && styles.dishButtonSelected} onPress={() => setSelectedDish(item.id)} />
                                        }

                                    /> */}
                                    {/* <ThemedView style={{flex: 0}}> */}
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <ThemedText style={{color: 'white', fontFamily: 'KanitRegular'}}>Cliente:</ThemedText>
                                        <ThemedText style={{fontFamily: 'KanitBold', color: 'white'}}>{user?.username}</ThemedText>
                                    </View>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <ThemedText style={{color: 'white', fontFamily: 'KanitRegular'}}>Servicio a contratar:</ThemedText>
                                        <ThemedText style={{fontFamily: 'KanitBold', color: 'white'}}>{selectedService.name}</ThemedText>
                                    </View>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <ThemedText  style={{color: 'white', fontFamily: 'KanitRegular'}}>Precio anual:</ThemedText>
                                        <ThemedText style={{fontFamily: 'KanitBold', color: 'white'}}>{selectedService.price}</ThemedText>
                                    </View>


                                    {/* </ThemedView> */}


                                </View>


                                <ThemedButton
                                   
                                    onPress={() => {
                                        setShownConfirm(true);
                                        // servicesMutate.mutate();
                                        // closeModal();

                                    }}
                                    disabled ={ servicesMutate.isPending}
                                    icon='briefcase-outline'

                                >
                                    Contratar
                                </ThemedButton>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Pressable>
            </Modal>

            {
                shownConfirm &&
                <ConfirmationModal
                    title='Confirmación'
                    onCancel={() => {
                        setShownConfirm(false);
                        
                    }}
                    onAccepted={() => {
                        servicesMutate.mutate();
                        setShownConfirm(false);
                        closeModal();
                    }}
                    disabled = {servicesMutate.isPending}
                    loading={servicesMutate.isPending}
                />
            }
        </>
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
    },
     card: {
        borderRadius: 5,
        borderWidth: 1,
        borderLeftColor: 'rgba(0,0,0,0.1)',
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderRightColor: 'rgba(0,0,0,0.1)',
        // borderColor: 'rgba(0,0,0,0.07)'
    },
    cardOpen: {
        // borderLeftColor: '#00E096',
        borderTopColor: '#00E096',
        borderTopWidth: 4,
    },
    cardClosed: {
        borderTopWidth: 4,
        borderTopColor: '#FF3D71',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.07)',
        padding: 10
    },
    headerText: {
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 10,
        paddingVertical: 5
    },
    viewInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    modalContainer: {
        flex: 1,
        padding: 16,
        // backgroundColor: '#F2F6FF',
        // backgroundColor: 'white',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    modalHeader: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 12
    },
    backDrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.02)'
    },
    dishButtonSelected: {
        backgroundColor: '#d1ffe1',
    },
})