import React, { Component } from 'react';
import{
	View,
	Text,
	StyleSheet
}from 'react-native';

import {Icon, Button, Container, Header, Content, Left} from 'native-base'
class Inversion extends Component{
	render(){
		return(
			<Container>
				<Header />
				<Content contentContainerStyle={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center'
				}}>
					<Text>Inversion</Text>
				</Content>
			</Container>
		);
	}
}

export default Inversion;