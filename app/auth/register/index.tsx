import { authRegister } from '@/core/auth/actions/auth-register'
import SinginSvg from '@/presentation/auth/components/SigninSvg'
import { ThemedText } from '@/presentation/theme/components/themed-text'
import ThemedButton from '@/presentation/theme/components/ThemedButton'
import ThemedTextInput from '@/presentation/theme/components/ThemedTextInput'
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color'
import { useMutation } from '@tanstack/react-query'
import { router } from 'expo-router'
import { Formik } from 'formik'
import { Alert, KeyboardAvoidingView, ScrollView, useWindowDimensions, View } from 'react-native'

interface registerProp  {
  username: string,
  email: string,
  fullName: string,
  password: string
}

const RegisterScreen = () => {
  const { height } = useWindowDimensions();
  const backgroundColor = useThemeColor({}, 'background');
  const primaryColor = useThemeColor({}, 'primary');
  const registerMutation = useMutation({
    mutationFn: ({username, email, fullName, password}: registerProp ) => authRegister(username,email,fullName,password),
    onSuccess: () => Alert.alert("Usuario creado exitosamente."),
    onError: () => Alert.alert("Algo fallo")
  })


  return (

    <KeyboardAvoidingView
      behavior='padding'
      style={{ flex: 1 }}
    >
      <SinginSvg />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 40,
          backgroundColor: backgroundColor
        }}
        keyboardShouldPersistTaps='handled'
      >

        {/* <ThemedView safe> */}
        <View style={{
          paddingTop: height * 0.25
        }}>

          <ThemedText type='title'>Registrar</ThemedText>
          <ThemedText style={{ color: 'grey', fontFamily: 'KanitThin' }}>Por favor crea una cuenta para continuar</ThemedText>
        </View>

        <Formik
          initialValues={{
            username: '',
            email: '',
            fullName: '',
            password: ''

          }}
          onSubmit={({username, email, fullName, password}) => {
            registerMutation.mutate({
              username,
              email,
              fullName,
              password
            })
          }}
        >
          {
            ({ values, handleChange, handleSubmit, handleBlur, errors, touched }) => (
              <>
                <View style={{ marginTop: 20 }} >
                  <ThemedTextInput
                    placeholder='Username'
                    keyboardType="email-address"
                    autoCapitalize='none'
                    icon='person-outline'
                    value={values.username}
                    onChangeText={handleChange('username')}
                  />
                  <ThemedTextInput
                    placeholder='Correo electrónico'
                    keyboardType="email-address"
                    autoCapitalize='none'
                    icon='mail-outline'
                    value={values.email}
                    onChangeText={handleChange('email')}
                  />
                  <ThemedTextInput
                    placeholder='Nombre completo'
                    keyboardType="email-address"
                    autoCapitalize='words'
                    icon='star-outline'
                    value={values.fullName}
                    onChangeText={handleChange('fullName')}
                  />
                  <ThemedTextInput
                    placeholder='Contraseña'
                    autoCapitalize='none'
                    secureTextEntry
                    icon='lock-closed-outline'
                    value={values.password}
                    onChangeText={handleChange('password')}
                  />


                </View>

                <View style={{ marginTop: 20 }} />

                <ThemedButton
                  onPress={() => handleSubmit()}
                  icon='arrow-forward-outline'
                >
                  Crear cuenta
                </ThemedButton>
              </>
            )
          }

        </Formik>


        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20
          }}
        >
          <ThemedText style={{ fontFamily: "KanitRegular" }} >¿Ya tienes cuenta?</ThemedText>
          <ThemedText type='defaultSemiBold' onPress={router.back} style={{ marginHorizontal: 5, color: primaryColor, fontFamily: 'KanitBold', fontSize: 20 }} >Ingresar</ThemedText>

        </View>



      </ScrollView>

      {/* </ThemedView> */}
    </KeyboardAvoidingView>
  )
}
export default RegisterScreen