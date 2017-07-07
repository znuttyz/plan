import React, { Component } from 'react';
import { TextInput, View, Text, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class SearchbarIOS extends Component {
	constructor() {
		super();
		this.state = {
			height: 30,
			width: '100%',
			borderRadius: 5,
			paddingLeft: 8,
			marginBottom: 9,
			backgroundColor: 'white',
			search: '',
		}
	}

	_onFocus() {
		this.setState({width: '80%'})
	}

	_onBlur() {
		this.setState({width: '100%'});
	}

	_onCancel() {
		this.setState({width: '100%'});
		Keyboard.dismiss();
		this.setState({search: ''});
	}


	render() {
		const styles = {
			viewStyle: {
				flexDirection: 'row',
				height: 45,
				backgroundColor: '#f1f1f1',
				padding: 7,
			},
			textStyle: {
				color: 'blue',
				paddingLeft: 10,
				paddingTop: 5,
				fontSize: 18,
			}
		}
		return (
			<View style={styles.viewStyle}>
				<TextInput 
					style={{
						height: this.state.height, width: this.state.width, 
						borderRadius: this.state.borderRadius, paddingLeft: this.state.paddingLeft, 
						marginBottom: this.state.marginBottom, backgroundColor: this.state.backgroundColor
					}}
					placeholder="Search"
					underlineColorAndroid='rgba(0,0,0,0)'
					onFocus={() => this._onFocus()}
					onBlur={() => this._onBlur()}
					value={this.state.search}
					onChangeText={(text) => this.setState({search: text})}
				/>
				<Text style={styles.textStyle} onPress={() => this._onCancel()}>Cancel</Text>
			</View>
		);
	}
};
// onFocus={() => alert("test")}


