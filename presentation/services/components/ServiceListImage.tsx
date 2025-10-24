import { Image } from 'react-native';

export const ServicesListImage = () => (
  <Image
    source={require('@/assets/images/side-wave-list.png')}
    style={{
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: 50,
      height: '100%',
      resizeMode: 'cover',
      borderRadius: 10
    }}
  />
);
