import React, { Component } from 'react';
import{
	View,
	Text,
	StyleSheet
}from 'react-native';

import {Icon, Button, Container, Header, Content, Left} from 'native-base'
class Capital extends Component{
	render(){
		return(
			<Container>
				<Header />
				<Content contentContainerStyle={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center'
				}}>
					<Text>Capital</Text>
				</Content>
			</Container>
		);
	}
}

export default Capital;