import { ThemedText } from "@/presentation/theme/components/themed-text";
import { ThemedView } from "@/presentation/theme/components/themed-view";
import ThemedButton from "@/presentation/theme/components/ThemedButton";
import { useThemeStore } from "@/presentation/theme/store/useThemeStore";
import { ActivityIndicator, Modal, StyleSheet, useWindowDimensions, View } from "react-native";

interface Props {
    visible?: boolean;
    title?: string;
    loading?: boolean;
    message?: string;
    disabled?: boolean;
    onAccepted?: () => void;
    onCancel?: () => void;


}

const ConfirmationModal = ({ visible = true, loading, title = "Requiere confirmación", message = "Acción irreversible", onAccepted, onCancel, disabled = false }: Props) => {

    const { height, width } = useWindowDimensions();
    const dangerColor = useThemeStore(state => state.theme.danger[600]);

    return (
        <Modal
            visible={visible}
            animationType="fade"
            transparent
            statusBarTranslucent
        >
            <ThemedView style={{ backgroundColor: 'rgba(0,0,0, 0.4)', flex: 1 }}>

                <View style={{ alignSelf: 'center', width: width * 0.7, marginVertical: height * 0.35 }} >
                    <ThemedView style={[styles.content, { flex: 0 }]}>

                        <ThemedText type="title" style={{ marginBottom: 8, }}>
                            {title}
                        </ThemedText>

                        {message && (
                            <ThemedText style={{ marginBottom: 20, fontFamily: 'KanitThin' }} >
                                {message}
                            </ThemedText>
                        )}

                        {/* {children} */}

                        {onAccepted && onCancel && (
                            <ThemedView style={[styles.buttonContent, { flex: 0 }]}>
                                <ThemedButton style={{}} onPress={onAccepted} disabled={disabled} >
                                    Confirmar
                                </ThemedButton>
                                <View style={{ height: 10 }} />
                                <ThemedButton onPress={onCancel} disabled={disabled} style={{ backgroundColor: dangerColor }}>
                                    Cancelar
                                </ThemedButton>
                            </ThemedView>
                        )}
                        {loading && <ActivityIndicator size="large" style={{ marginTop: 20 }} />}
                    </ThemedView>
                </View>
            </ThemedView>
        </Modal>
    )
}

export default ConfirmationModal

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        borderRadius: 10

    },
    buttonContent: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%'


    }
})