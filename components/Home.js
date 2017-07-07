import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Card, CardSection, Header }  from './elements/common';
import SearchbarIOS from './elements/SearchbarIOS';
import DragableImage from './elements/DragableImage';
import FadeInView from './elements/FadeInView';

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			turnOn: false,
		}
	}

	render() {
		return (
			<View >
				<Header headerText="Home Nutty"/>
				<SearchbarIOS />
				<Button
					title="Click to Animate"
					onPress={() => this.setState({turnOn: !this.state.turnOn})}
				/>
				<FadeInView 
					style={{
						top: 100,
						left: 200,
						backgroundColor: 'black',
						height: 20,
						width: 20,
						borderRadius: 20
					}}
					turn={this.state.turnOn}
				/>
				<FadeInView 
					style={{
						top: 50,
						left: 100,
						backgroundColor: 'black',
						height: 20,
						width: 20,
						borderRadius: 20
					}}
					turn={this.state.turnOn}
				/>
				<FadeInView 
					style={{
						top: 200,
						left: 150,
						backgroundColor: 'black',
						height: 20,
						width: 20,
						borderRadius: 20
					}}
					turn={this.state.turnOn}
				/>
		        
			</View>
		);
	}
}