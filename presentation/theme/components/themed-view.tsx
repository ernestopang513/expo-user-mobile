import { View, type ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useThemeColor } from '../hooks/use-theme-color';


export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  safe?: boolean;
  margin?: boolean;
};

export function ThemedView({ margin = false, safe = false, style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const safeArea = useSafeAreaInsets();
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return (
    <View
      style={[
        {
          backgroundColor,
          marginHorizontal: margin? 10 : 0 ,
          flex:1,
          paddingTop: safe ? safeArea.top : 0,

        },
        style
      ]}

      {...otherProps}

    />
  );
}
