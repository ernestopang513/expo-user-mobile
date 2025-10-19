import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import { useThemeColor } from '../hooks/use-theme-color';
import { ThemedText } from './themed-text';

interface Props extends TouchableOpacityProps {
    icon?: keyof typeof Ionicons.glyphMap;
    children?: string;
    style?: ViewStyle;

    
}
const ThemedButton = ({icon, children, style,...rest}: Props) => {

    // const textColor = useThemeColor({}, "text");
    const primaryColor = useThemeColor({}, 'primary');

  return (
    <TouchableOpacity

        style ={{
            ...styles.button,
            backgroundColor: primaryColor,
            ...style,
        }}

        {...rest}
    >
        <ThemedText type='defaultSemiBold' style = {{color: 'white'}} >{children}</ThemedText>
        {
            icon &&
            <Ionicons 
                name={icon} 
                size={22} 
                color={'white'}
                style = {{marginHorizontal: 10}}
            />
        }
    </TouchableOpacity>
  )
}
export default ThemedButton


const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 5
    }
})