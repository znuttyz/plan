import React from 'react';
import { Animated, Text, View, Easing } from 'react-native';

export default class FadeInView extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(1),  // Initial value for opacity: 0
      turnOn: props.turn,
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.turn) {
      this.setState({turnOn: true})
      this.runAnimation();
    } else {
      this.setState({turnOn: false})
    }
  }

  runAnimation() {
    Animated.sequence([
      Animated.timing(this.state.fadeAnim, {
        toValue: 0,
        duration: 500,
      }),
      Animated.timing(this.state.fadeAnim, {
        toValue: 1,
        duration: 700
      })
    ]).start(() => {
      if(this.state.turnOn) {
        this.runAnimation();
      }
    });
  }


  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}