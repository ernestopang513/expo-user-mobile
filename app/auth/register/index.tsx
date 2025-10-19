import { ThemedText } from '@/presentation/theme/components/themed-text'
import ThemedButton from '@/presentation/theme/components/ThemedButton'
import ThemedTextInput from '@/presentation/theme/components/ThemedTextInput'
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color'
import { router } from 'expo-router'
import { KeyboardAvoidingView, ScrollView, useWindowDimensions, View } from 'react-native'
const RegisterScreen = () => {
  const { height } = useWindowDimensions();
  const backgroundColor = useThemeColor({}, 'background');
  const primaryColor = useThemeColor({}, 'primary');
  return (

    <KeyboardAvoidingView
      behavior='padding'
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ 
          paddingHorizontal: 40,
          backgroundColor: backgroundColor 
        }}
        keyboardShouldPersistTaps = 'handled'
      >

        {/* <ThemedView safe> */}
        <View style={{
          paddingTop: height * 0.25
        }}>

          <ThemedText type='title'>Registrar</ThemedText>
          <ThemedText style={{ color: 'grey' }}>Por favor crea una cuenta para continuar</ThemedText>
        </View>

        <View style={{ marginTop: 20 }} >
          <ThemedTextInput
            placeholder='Username'
            keyboardType="email-address"
            autoCapitalize='none'
            icon='person-outline'
          />
          <ThemedTextInput
            placeholder='Correo electrónico'
            keyboardType="email-address"
            autoCapitalize='none'
            icon='mail-outline'
          />
          <ThemedTextInput
            placeholder='Nombre completo'
            keyboardType="email-address"
            autoCapitalize='words'
            icon='star-outline'
          />
          <ThemedTextInput
            placeholder='Contraseña'
            autoCapitalize='none'
            secureTextEntry
            icon='lock-closed-outline'
          />


        </View>

        <View style={{ marginTop: 20 }} />

        <ThemedButton

          icon='arrow-forward-outline'
        >
          Crear cuenta
        </ThemedButton>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20
          }}
        >
          <ThemedText  >¿Ya tienes cuenta?</ThemedText>
          <ThemedText type='defaultSemiBold' onPress={router.back} style={{marginHorizontal: 5, color: primaryColor}} >Ingresar</ThemedText>

        </View>



      </ScrollView>

      {/* </ThemedView> */}
    </KeyboardAvoidingView>
  )
}
export default RegisterScreen