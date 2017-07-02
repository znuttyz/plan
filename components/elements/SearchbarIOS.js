import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const SearchbarIOS = () => {
	return (
		<View style={styles.viewStyle}>
			<TextInput 
				style={styles.inputStyle}
				placeholder="Search"
			/>
			<Text style={styles.textStyle}>Cancel</Text>
		</View>
	);
};
// onFocus={() => alert("test")}

const styles = {
	viewStyle: {
		flexDirection: 'row',
		height: 45,
		backgroundColor: '#f1f1f1',
		padding: 7,
	},
	inputStyle: {
		height: 30,
		width: '50%',
		borderRadius: 5,
		paddingLeft: 8,
		marginBottom: 9,
		backgroundColor: 'white'
	},
	textStyle: {
		color: 'blue',
		paddingLeft: 10,
		paddingTop: 5,
		fontSize: 18,
	}
}

export {SearchbarIOS};