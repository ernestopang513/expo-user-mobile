import LoginSVG from '@/presentation/auth/components/LoginSVG'
import { useAuthStore } from '@/presentation/auth/store/useAuthStore'
import { ThemedText } from '@/presentation/theme/components/themed-text'
import ThemedButton from '@/presentation/theme/components/ThemedButton'
import ThemedLink from '@/presentation/theme/components/ThemedLink'
import ThemedTextInput from '@/presentation/theme/components/ThemedTextInput'
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color'
import { router } from 'expo-router'
import { useState } from 'react'
import { Alert, KeyboardAvoidingView, Platform, ScrollView, useWindowDimensions, View } from 'react-native'
const LoginScreen = () => {

  const login = useAuthStore(state => state.login);

  const backgroundColor = useThemeColor({}, 'background');

  const { height, width } = useWindowDimensions();

  const [isPosting, setIsPosting] = useState(false);
  const [form, setform] = useState({
    username: '',
    password: '',
  })

  const onLogin = async() => {

    const {username, password} = form;

    if(form.username.length === 0 || form.password.length === 0) {
      return;
    }

    const postUser = username.trim();
    const postPassword = password.trim();

    setIsPosting(true);

    const wasSuccessful = await login(postUser, postPassword);
    setIsPosting(false);

    if (wasSuccessful) {
      router.replace('/(user-movil-app)/(tabs)/home/contracts');
      return;
    }

    Alert.alert('Error', 'Usuario o contraseña no validos');

  }

  return (
    <>
      <LoginSVG/>
    <KeyboardAvoidingView
      behavior= {Platform.OS === 'ios' ? 'padding': undefined}
      style={{ flex: 1 }}
      contentContainerStyle = {{backgroundColor}}
      >
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 40, backgroundColor }}
        keyboardShouldPersistTaps = 'handled'
        >

        {/* <ThemedView safe> */}
        <View style={{
          paddingTop: height * 0.25
        }}>

          <ThemedText type='title'>Ingresar</ThemedText>
          <ThemedText style={{ color: 'grey', fontFamily: 'KanitThin'}}>Por favor ingrese para continuar</ThemedText>
        </View>



        <View style={{ marginTop: 20 }} >
          <ThemedTextInput
            placeholder='Username'
            keyboardType="email-address"
            autoCapitalize='none'
            icon='person-outline'
            
            value={form.username}
            onChangeText={(value) => setform({...form, username: value})}
            />
          <ThemedTextInput
            placeholder='Contraseña'
            autoCapitalize='none'
            secureTextEntry
            icon='lock-closed-outline'
            
            value={form.password}
            onChangeText={(value) => setform({...form, password: value})}
            />


        </View>

        <View style={{ marginTop: 20 }} />

        <ThemedButton
          onPress={onLogin}
          disabled={isPosting}
          icon='arrow-forward-outline'
          >
          Ingresar
        </ThemedButton>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20
          }}
        >
          <ThemedText style={{fontFamily: 'KanitRegular'}} >¿No tienes cuenta?</ThemedText>
          <ThemedLink href='/auth/register' style={{marginHorizontal: 5, fontFamily: 'KanitBold', fontSize: 20}} >Crear cuenta</ThemedLink>

        </View>

      </ScrollView>

      {/* </ThemedView> */}
    </KeyboardAvoidingView>
    </>
  )
}
export default LoginScreen