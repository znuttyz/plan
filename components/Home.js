import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, CardSection, Header, SearchbarIOS, ImageBackground }  from './elements/';

export default class Home extends Component {
	render() {
		return (
			<View >
				<Header headerText="Home znuttyz"/>
				<SearchbarIOS />
				<ImageBackground />
			</View>
		);
	}
}