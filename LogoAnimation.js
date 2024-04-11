import React, { useEffect, useRef } from 'react';
import { Animated, View, Image } from 'react-native';

const LogoAnimation = () => {
  const anime = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      anime,
      {
        toValue: 1,
        duration: 1500,
        useNativeDriver: false,
      }
    ).start();
  }, [anime]);

  return (
    <Animated.View
      style={{
        opacity: anime,
      }}
    >
      <View>
        <Image 
          source={require('./assets/maxresdefault.png')} 
          style={{ width: 100, height: 100 }} 
        />
      </View>
    </Animated.View>
  );
};

export default LogoAnimation;
