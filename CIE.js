import React, { Component } from 'react';
import{
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	TextInput,
	TouchableOpacity,
	RowComponent
}from 'react-native';

import DateTimePicker from 'react-native-modal-datetime-picker'
import {Icon, Button, Container, Header, Content, Body, Picker,  Left, Input, Card, Title, Right, Form} from 'native-base'
import Helpers from '../lib/helpers'
import * as firebase from 'firebase'

function getRandom() {
	var num:Number = Math.floor(Math.random()*(99999999-10+1))+10;
	return num;
}

function getTotal(PA:Number, P:Number) {
	var suma:Number = PA + PA
	return suma;
}

class ControlIngresosEgresos extends Component{
	constructor(props){
		super(props)
		this.state = {
			trabajo: '',
			salario: '',
			valor: '',
			nombreE: '',
			listaIngreso: [{ trabajo: '', salario: '', id: ''}],
			listaEgreso: [{ Egreso: '', valor: '', id: ''}],
			selected: "key1",
			random: null,
			sTrabajo: '', 
			uid: 'bryan'
		};	
	}
	
	onValueChange(value: string) {
		this.setState({
			selected: value
		});
	}
	
	saveIngreso = () => {
		try{	
			let trabajo = this.state.trabajo
			let salario = this.state.salario 
			let uid = this.state.uid
			const id = getRandom()
			trabajo = {trabajo: trabajo, salario: salario, id: id}
			firebase.database().ref('/users/'+uid+'/Ingresos/datails/'+id+'/').set(trabajo);
			this.state.listaIngreso.push(trabajo);
			this.setState({listaIngreso: this.state.listaIngreso});
			alert("Ingreso guardado con exito")
			console.log(trabajo)
		}catch(error){
			console.log(error)
		}
	}	

	saveEgreso = () => {
		try{	
			let nombreE = this.state.nombreE
			let valor = this.state.valor 
			let uid = this.state.uid
			const id = getRandom()
			nombreE = {Egreso: nombreE, valor: valor, id: id}
			firebase.database().ref('/users/'+uid+'/Egreso/datails/'+id+'/').set(nombreE);
			this.state.listaEgreso.push(nombreE);
			this.setState({listaEgreso: this.state.listaEgreso});
			alert("Egreso guardado con exito")
			console.log(nombreE)
		}catch(error){
			console.log(error)
		}
	}	
	render(){
		return(
			<Container>
				<Header />
				<Content>
					<Text></Text>
					<Card style={styles.card}>
						<Text style={styles.TextTitle}>Agregar Ingreso</Text>
						<Text></Text>
						<Input 
							style={styles.textInput}
							placeholder="Nombre ingreso"
							value={this.state.trabajo}
							onChangeText={(trabajo) => this.setState({trabajo})}
						/>
						<Input
							style={styles.textInput}
							placeholder="Valor"
							value={this.state.salario}
							onChangeText={(salario) => this.setState({salario})}
						/>
						<TouchableHighlight 
							style={styles.buttonSave}
							onPress={this.saveIngreso}>
							<Text style={{ color: "white"}}>Guardar</Text>
						</TouchableHighlight>
						<Text></Text>
					</Card>
					<Text></Text>
					<Card style={styles.card}>
						<Text style={styles.TextTitle}>Agregar Egreso</Text>
						<Text></Text>
						<Input 
							style={styles.textInput}
							placeholder="Nombre Egreso"
							value={this.state.nombreE}
							onChangeText={(nombreE) => this.setState({nombreE})}
						/>
						<Input
							style={styles.textInput}
							placeholder="Valor"
							value={this.state.valor}
							onChangeText={(valor) => this.setState({valor})}
						/>
						<TouchableHighlight 
							style={styles.buttonSave}
							onPress={this.saveEgreso}>
							<Text style={{ color: "white"}}>Guardar</Text>
						</TouchableHighlight>
						<Text></Text>
					</Card>
					<Text>{this.state.sTrabajo}</Text>
				</Content>
			</Container>
		);
	}
}

export default ControlIngresosEgresos;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
		marginHorizontal: 10
	},
	textInput: {
		height: 40,
		borderWidth: 1,
		borderColor: "blue",
		marginBottom: 20
	},
	buttonSave: {
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: "#ccc",
		backgroundColor: "blue",
		paddingVertical: 10
	},
	TextTitle: {
		color: 'blue',
		fontWeight: 'bold',
		fontSize: 20,
		textDecorationLine: 'underline'
	},
	card: {
		borderColor: "black",
		borderWidth: 15
	}
})

const firebaseConfig = {
	apiKey: "AIzaSyCHbZBg4Je7wOsdMUapn4aquJiy1hv3gKk",
	authDomain: "proyecto-manejo-de-dinero.firebaseapp.com",
	databaseURL: "https://proyecto-manejo-de-dinero.firebaseio.com",
	storageBucket: "proyecto-manejo-de-dinero.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
