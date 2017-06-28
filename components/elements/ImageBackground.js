import React from 'react';
import { View, Image } from 'react-native';

const ImageBackground = (props) => {
  return (
    <View>
    	<Image
          style={{width: 500, height: 500}}
          source={{uri: '../assets/star.jpg'}}
        />
    </View>
  );
};

export { ImageBackground };