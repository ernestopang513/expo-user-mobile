import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useAuthStore } from '../store/useAuthStore';
const LogoutIconButton = () => {

    const primaryColor = useThemeColor({}, 'primary');
    const logout = useAuthStore(state => state.logout);

  return (
    <TouchableOpacity style={{marginRight: 15}} onPress={logout}>
      <Ionicons name='log-out-outline' size={24} color={primaryColor} />
    </TouchableOpacity>
  )
}
export default LogoutIconButton