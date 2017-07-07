import React, { Component } from 'react';
import { View, Animated } from 'react-native';

export default class BlinkDot extends Component {
	constructor(props) {
		super(props);
		this.state = {
			animatedValue: new Animated.Value(0)
		}
	}

	componentDidMount() {
		Animated.timing(this.animatedValue, {
		    toValue: 1,
		    duration: 10000
		}).start()
	}

	render() {
		let { animatedValue } = this.state;
		return (
			<Animated.View 
				style={{
					top: this.props.top,
					left: this.props.left,
					backgroundColor: 'black',
					height: 20,
					width: 20,
					borderRadius: 20,
					opacity: animatedValue
				}}
			/>
		);
	}
}



// const BlinkDot = (props) => {
// 	this._animatedValue = new Animated.Value(0);

// 	Animated.timing(this._animatedValue, {
// 	    toValue: 100,
// 	    duration: 500
// 	}).start()

	
// }

// export {BlinkDot}