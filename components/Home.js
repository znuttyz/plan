import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, CardSection, Header, SearchbarIOS }  from './elements/';

export default class Home extends Component {
	render() {
		return (
			<View >
				<Header headerText="Home"/>
				<SearchbarIOS />
			</View>
		);
	}
}