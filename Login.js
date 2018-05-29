import React, {Component} from 'react'
import {
	Text, 
	View,
	StyleSheet,
	TextInput,
	TouchableHighlight
}from 'react-native'

class Login extends Component{
	render(){
		return(
			<View>
				<TextInput
					placeholderTextColor = "grey"
					placeholder = "Email"
					style = {styles.inputText}
				/>
				<TextInput
					placeholderTextColor = "grey"
					placeholder = "Password"
					style = {styles.inputText}
					password = {true}
				/>
				<TouchableHighlight style={[styles.loginButton, styles.button]}>
					<Text style={styles.textButton}>Login</Text>
				</TouchableHighlight>
				<TouchableHighlight style={[styles.signupButton, styles.button]}>
					<Text style={styles.textButton}>Signup</Text>
				</TouchableHighlight>
			</View>
		)
	}
}

export default Login

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20
	},
	inputText: {
		height: 20,
		borderWidth: 1,
		borderColor: '#ccc',
		paddingHorizontal: 20,
		paddingVertical: 10
	}
});