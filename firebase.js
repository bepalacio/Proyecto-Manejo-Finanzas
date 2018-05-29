import * as firebase from 'firebase'

// Initialize Firebase
const firebaseConfig = {
	apiKey: "AIzaSyCHbZBg4Je7wOsdMUapn4aquJiy1hv3gKk",
	authDomain: "proyecto-manejo-de-dinero.firebaseapp.com",
	databaseURL: "https://proyecto-manejo-de-dinero.firebaseio.com",
	storageBucket: "proyecto-manejo-de-dinero.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

module.exports = firebaseApp