import { View, type ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useThemeColor } from '../hooks/use-theme-color';
import { useThemeStore } from '../store/useThemeStore';


export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  safe?: boolean;
  margin?: boolean;
  level?: 1 | 2 | 3 | 4
};

export function ThemedView({ margin = false, safe = false, style, lightColor, darkColor, level, ...otherProps }: ThemedViewProps) {
  const safeArea = useSafeAreaInsets();
  const theme = useThemeStore(state => state.theme);
  const themedColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  const backgroundColor = !!level 
    ?( {
        1: theme.basic['100'],
        2: theme.basic['200'],
        3: theme.basic['300'],
        4: theme.basic['400'],
    }[level])
    : themedColor;

  return (
    <View
      style={[
        {
          backgroundColor,
          marginHorizontal: margin? 10 : undefined ,
          flex:1,
          paddingTop: safe ? safeArea.top : undefined,

        },
        style
      ]}

      {...otherProps}

    />
  );
}
