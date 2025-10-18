import { View, type ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useThemeColor } from '../hooks/use-theme-color';


export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  safe?: boolean;
};

export function ThemedView({ safe = false, style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const safeArea = useSafeAreaInsets();
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return (
    <View
      style={[
        {
          backgroundColor,
          flex:1,
          paddingTop: safe ? safeArea.top : 0,

        },
        style
      ]}

      {...otherProps}

    />
  );
}
