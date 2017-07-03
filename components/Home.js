import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, CardSection, Header }  from './elements/common';
import SearchbarIOS from './elements/SearchbarIOS';

export default class Home extends Component {
	render() {
		return (
			<View >
				<Header headerText="Home Nutty"/>
				<SearchbarIOS />
			</View>
		);
	}
}