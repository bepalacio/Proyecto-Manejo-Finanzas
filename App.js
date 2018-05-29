import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';

import { createDrawerNavigator, DrawerItems } from 'react-navigation'
import Principal from './components/Principal'
import CIE from './components/CIE'
import Capital from './components/Capital'
import Inversion from './components/Inversion'
import {Container,Content,Header,Body,Icon} from 'native-base'
class App extends Component{
	render() {
		return (
			<MyApp />
		)
	}
	
}

const CustomDrawerContentComponent = (props) => (
	<Container>
		<Header style={{ height:150 }}>
			<Body>
				<Image
					style={styles.drawerImage}
					source={require('./Imagenes/logo.png')}/>
			</Body>
		</Header>
		<Content>
			<DrawerItems{...props} />
		</Content>
	</Container>
)

const MyApp = createDrawerNavigator({	
	Inicio: {
		screen: Principal
	},
	Ingresos: {
		screen: CIE
	},
	Capital: {
		screen: Capital
	},
	Inversiones: {
		screen: Inversion
	}
	
},{
	initialRouteName: 'Inicio',
	drawerPosition: 'left',
	contentComponent: CustomDrawerContentComponent,
	drawerOpenRoute: 'DrawerOpen',
	drawerCloseRoute: 'DrawerOpen',
	drawerToggleRoute: 'DrawerOpen'
})

export default App;

styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	drawerImage: {
		height: 100,
		width: 100,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5
	}
})