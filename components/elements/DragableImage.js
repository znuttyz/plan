import React, { Component } from 'react';
import { View, Image } from 'react-native';
import ZoomableImage from '../assets/script/ZoomableImage';

export default class DragableImage extends Component {

	render() {
		return (
			<View>
				<ZoomableImage
					imageWidth={300}
					imageHeight={300}
					source={require('../assets/image/star.jpg')}
				/>
			</View>
		)
	}
}

// <ZoomableImage
// 					imageWidth={1000}
// 					imageHeight={1000}
// 					source={require('../assets/image/star.jpg')}
// 				/>

// <Image
// 					source={require('../assets/image/star.jpg')}
// 					style={{
// 						position: 'absolute',
// 						top: 10,
// 						width: 300, 
// 						height: 300
// 					}}
// 				/>