import React, { Component } from 'react';
import{
	View,
	Text,
	Image,
	StyleSheet,
	
}from 'react-native';

import {Title, Icon, Button, Container, Header, Content, List, ListItem, Body, Right, Input, Item, Thumbnail, Tab, Tabs, TabHeading, Left, ScrollableTab, Card, CardItem} from 'native-base'

class Principal extends Component{
	render(){
		return(
			<Container>
				<Header hasTabs/>
				<Tabs renderTabBar={()=> <ScrollableTab />}>
					<Tab heading={
						<TabHeading>
							<Icon name="home" />
							<Text style={{ color: 'white', fontWeight: 'bold', fontSize: 10 }}> Principal</Text>
						</TabHeading>}>
						<Text></Text>
						<Content>
							<Card style={{flex: 0}}>
								<CardItem style={{ borderColor: "blue"}}>
									<Left>
										<Thumbnail source={require('../Imagenes/logo.png')} />
										<Body>
											<Text style={{ fontSize: 20, fontWeight: 'bold' }}>Money Maker</Text>
										</Body>
									</Left>
								</CardItem>
								<CardItem>
									<Body>
										<Image source={{uri: 'https://png.pngtree.com/thumb_back/fw800/back_pic/04/61/73/75586f01b497bf4.jpg'}} style={{height: 200, width: 280, flex: 1}}/>
										<Text></Text>
										<Text style={{ padding: 10, paddingTop: 0, fontSize: 15}}>
											MONEY MAKER, es una aplicacion que sirve para llevar el control,
											tanto de ingresos como de egresos que ha tenido, durante un determinado periodo de tiempo.
										</Text>
									</Body>
								</CardItem>
								<CardItem>
									<Left>
										<Button transparent textStyle={{ borderColor: "blue"}}>
											<Icon name="logo-github" />
											<Icon name="home" />
											<Icon name="cart" />
											<Icon name="calculator" />
											<Icon name="settings" />
											<Text></Text>
										</Button>
									</Left>
								</CardItem>
							</Card>
							<Text></Text>
							<Text style={{ fontSize: 25}}>Otras App Relacionadas</Text>
							<Text></Text>
							<Card style={{flex: 0}}>
								<CardItem style={{ borderColor: "blue"}}>
									<Left>
										<Thumbnail source={{uri: 'https://seeklogo.com/images/X/xero-logo-0DE623D530-seeklogo.com.png'}} />
										<Body>
											<Text style={{ fontSize: 20, fontWeight: 'bold' }}>XERO</Text>
										</Body>
									</Left>
								</CardItem>
								<CardItem>
									<Body>
										<Image source={{uri: 'https://fitsmallbusiness.com/wp-content/uploads/2014/06/XeroAccountingFeat.jpg'}} style={{height: 200, width: 280, flex: 1}}/>
										<Text></Text>
										<Text style={{ padding: 10, paddingTop: 0, fontSize: 15}}>
											XERO, es una de las aplicaciones más fáciles de utilizar en la actualidad,
											es una aplicación de contabilidad en la nube. Podrás hacer todo lo que
											necesites en planificación financiera y de contabilidad, como órdenes de compra,
											pagar facturas, reclamar gastos, panel de control de rendimiento empresarial y mucho más.
										</Text>
									</Body>
								</CardItem>
								<CardItem>
									<Left>
										<Button transparent textStyle={{ borderColor: "blue"}}>
											<Icon name="logo-github" />
											<Icon name="bookmarks" />
											<Icon name="cart" />
											<Icon name="calculator" />
											<Icon name="person" />
											<Text></Text>
										</Button>
									</Left>
								</CardItem>
							</Card>
							<Text></Text>
							<Card style={{flex: 0}}>
								<CardItem style={{ borderColor: "blue"}}>
									<Left>
										<Thumbnail source={{uri: 'https://is3-ssl.mzstatic.com/image/thumb/Purple125/v4/6f/f9/88/6ff988d6-da17-9a03-efc1-808d41706371/mzl.irmrjead.png/246x0w.jpg'}} />
										<Body>
											<Text style={{ fontSize: 20, fontWeight: 'bold' }}>MONEY CONTROL</Text>
										</Body>
									</Left>
								</CardItem>
								<CardItem>
									<Body>
										<Image source={{uri: 'http://www.mediainfoline.com/wp-content/uploads/2017/08/moneycontrol-new-logo.jpg'}} style={{height: 200, width: 280, flex: 1}}/>
										<Text></Text>
										<Text style={{ padding: 10, paddingTop: 0, fontSize: 15}}>
											Permite ingresar los gastos diarios, guardar registro de facturas y recibos
											tomados a través de la cámara del celular, y gracias a que se puede sincronizar
											mediante iCloud o Dropbox, es útil para que parejas y familias lleven sus cuentas juntos.
											Crea y comparte en pdf, genera automáticamente los pagos periódicos y pone a su disposición copias de seguridad.
										</Text>
									</Body>
								</CardItem>
								<CardItem>
									<Left>
										<Button transparent textStyle={{ borderColor: "blue"}}>
											<Icon name="logo-github" />
											<Icon name="bookmarks" />
											<Icon name="cart" />
											<Icon name="calculator" />
											<Icon name="person" />
											<Text></Text>
										</Button>
									</Left>
								</CardItem>
							</Card>
							<Text></Text>
							<Card style={{flex: 0}}>
								<CardItem style={{ borderColor: "blue"}}>
									<Left>
										<Thumbnail source={{uri: 'https://wiz.money/wp-content/uploads/cropped-MoneyWiz_Android.png'}} />
										<Body>
											<Text style={{ fontSize: 20, fontWeight: 'bold' }}>MoneyWiz</Text>
										</Body>
									</Left>
								</CardItem>
								<CardItem>
									<Body>
										<Image source={{uri: 'https://d2yal1mtmg1ts6.cloudfront.net/KSdwrS6Xvz0QObzddV5GcTiABCGOY7EBnOSdESS6vu16MKmoqigazoK4-a9_UxuC-ho=h350-r'}} style={{height: 200, width: 280, flex: 1}}/>
										<Text></Text>
										<Text style={{ padding: 10, paddingTop: 0, fontSize: 15}}>
											Tiene espacio para la creación de presupuestos, control de cuentas
											y facturas e incluso genera pronósticos a futuro mediante tablas estadísticas.
											Allí se pueden subir además gastos como créditos, hipotecas y préstamos. 
											La aplicación emite una alerta cuando las cuentas andan mal y los pasivos
											del usuario se incrementan generando peligro. 
										</Text>
									</Body>
								</CardItem>
								<CardItem>
									<Left>
										<Button transparent textStyle={{ borderColor: "blue"}}>
											<Icon name="bookmarks" />
											<Icon name="cart" />
											<Icon name="calculator" />
											<Icon name="person" />
											<Text></Text>
										</Button>
									</Left>
								</CardItem>
							</Card>
							<Text></Text>
							<Card style={{flex: 0}}>
								<CardItem style={{ borderColor: "blue"}}>
									<Left>
										<Thumbnail source={{uri: 'http://www.coolztricks.com/wp-content/uploads/2016/07/pocket-money-app.png'}} />
										<Body>
											<Text style={{ fontSize: 20, fontWeight: 'bold' }}>POCKET MONEY</Text>
										</Body>
									</Left>
								</CardItem>
								<CardItem>
									<Body>
										<Image source={{uri: 'https://www.roostermoney.com/img/open-graph/RoosterMoney_App.png'}} style={{height: 200, width: 280, flex: 1}}/>
										<Text></Text>
										<Text style={{ padding: 10, paddingTop: 0, fontSize: 15}}>
											Esta aplicación no solo permite llevar registro de los gastos,
											también brinda asesoría y tips par mejorar la estabilidad económica.
											Permite crear varias cuentas, programar los gastos fijos para que
											se repitan cada mes y analizar en qué categoría se está invirtiendo más el dinero. 
											Cuenta con gráficas que le permitirán analizar con mayor claridad de qué manera optimizar el flujo de caja. 	
										</Text>
									</Body>
								</CardItem>
								<CardItem>
									<Left>
										<Button transparent textStyle={{ borderColor: "blue"}}>
											<Icon name="bookmarks" />
											<Icon name="cart" />
											<Icon name="calculator" />
											<Icon name="person" />
											<Text></Text>
										</Button>
									</Left>
								</CardItem>
							</Card>
						</Content>
					</Tab>
					<Tab heading={
						<TabHeading>
							<Icon name="calculator" />
							<Text style={{ color: 'white', fontWeight: 'bold', fontSize: 10 }}> Tasa de Cambio</Text>
						</TabHeading>}>
						<Content>
							<Item disabled>
								<Input disabled placeholder='Peso Colombiano (COP)'/>
									<Thumbnail 
										style={{
											height: 30,
											width: 30
										}}
									source={{ uri: 'https://www.flaggenmeer.de/Media/Default/Thumbs/0003/0003467-flagge-kolumbien.png' }} />
							</Item>
							<List>
								<ListItem avatar>
									<Left>
										<Thumbnail 
											style={{
												height: 40,
												width: 40
											}}
											source={{ uri: 'http://flags.fmcdn.net/data/flags/w580/us.png' }} />
									</Left>
									<Body>
										<Text>Estados Unidos</Text>
										<Text note>1 USD</Text>
									</Body>
									<Right>
										<Text note>2 816,90141 COP</Text>
									</Right>
								</ListItem>
								<ListItem avatar>
									<Left>
										<Thumbnail
											style={{
												height: 40,
												width: 40
											}} 
											source={{ uri: 'https://europa.eu/european-union/sites/europaeu/files/docs/body/flag_yellow_high.jpg' }} />
									</Left>
									<Body>
										<Text>Europa</Text>
										<Text note>1 EUR</Text>
									</Body>
									<Right>
										<Text note>3 297,80282 COP</Text>
									</Right>
								</ListItem>
								<ListItem avatar>
									<Left>
										<Thumbnail
											style={{
												height: 40,
												width: 40
											}} 
											source={{ uri: 'http://flags.fmcdn.net/data/flags/w580/br.png' }} />
									</Left>
									<Body>
										<Text>Brasil</Text>
										<Text note>1 BRL</Text>
									</Body>
									<Right>
										<Text note>771,605634 COP</Text>
									</Right>
								</ListItem>
								<ListItem avatar>
									<Left>
										<Thumbnail
											style={{
												height: 40,
												width: 40
											}} 
											source={{ uri: 'http://flags.fmcdn.net/data/flags/w580/mx.png' }} />
									</Left>
									<Body>
										<Text>Mexico</Text>
										<Text note>1 MXN</Text>
									</Body>
									<Right>
										<Text note>144,597183 COP</Text>
									</Right>
								</ListItem>
								<ListItem avatar>
									<Left>
										<Thumbnail
											style={{
												height: 40,
												width: 40
											}} 
											source={{ uri: 'http://flags.fmcdn.net/data/flags/w580/ca.png' }} />
									</Left>
									<Body>
										<Text>Canadá</Text>
										<Text note>1 CAD</Text>
									</Body>
									<Right>
										<Text note>12 170,05352 COP</Text>
									</Right>
								</ListItem>
								<ListItem avatar>
									<Left>
										<Thumbnail
											style={{
												height: 40,
												width: 40
											}} 
											source={{ uri: 'http://flags.fmcdn.net/data/flags/w580/jp.png' }} />
									</Left>
									<Body>
										<Text>Japón</Text>
										<Text note style={styles.text}>1 JPY</Text>
									</Body>
									<Right>
										<Text note>25,7380282 COP</Text>
									</Right>
								</ListItem>
							</List>
						</Content>
					</Tab>
					<Tab heading={
						<TabHeading>
							<Icon name="person" />
							<Text style={{ color: 'white', fontWeight: 'bold', fontSize: 10 }}> Mi perfil</Text>
						</TabHeading>}>
					</Tab>
				</Tabs>
			</Container>
		);
	}
}

export default Principal;

styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		color: 'grey',
		fontStyle: 'italic',
		fontSize: 8
	}, 
	sImage: {
		height: 50,
		width: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 60
	}
	
}) 