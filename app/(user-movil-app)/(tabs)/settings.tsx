import { useAuthStore } from '@/presentation/auth/store/useAuthStore'
import SettingsSvg from '@/presentation/Settings/components/SettingsSvg'
import { ThemedText } from '@/presentation/theme/components/themed-text'
import { ThemedView } from '@/presentation/theme/components/themed-view'
import { View } from 'react-native'
const SettingsScreen = () => {

  const user = useAuthStore(state => state.user);

  return (
    <>
      <SettingsSvg/>

    <ThemedView style = {{paddingLeft: 40, paddingRight: 70 , paddingTop: 20, backgroundColor: 'transparent'}}  >

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <ThemedText style={{ fontFamily: 'KanitBold'}} >User</ThemedText>
      <ThemedText style={{ fontFamily: 'KanitBold'}} >{user?.username}</ThemedText>
      </View>

      <View style={{marginTop: 250, flexDirection: 'row', justifyContent: 'space-between'}}>
        <ThemedText style={{fontFamily: 'KanitBold'}}>App name</ThemedText>
        <ThemedText style={{fontFamily: 'KanitBold'}}>Expo User Mobile</ThemedText>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
        <ThemedText style={{fontFamily: 'KanitBold'}}>Versión:</ThemedText>
        <ThemedText style={{fontFamily: 'KanitBold'}} >v1.0.0</ThemedText>
      </View>
        <ThemedText style={{fontFamily: 'KanitBold', marginHorizontal: 'auto', marginTop: 60, fontSize: 70, padding: 40}} >伍</ThemedText>
    </ThemedView>
    </>
  )
}
export default SettingsScreen