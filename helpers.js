import * as firebase from 'firebase'

class Helpers{
	static setUserTrabajo(userId, trabajo){
		let userNamePath = "/user/"+userId+"/details/trabajo"
		return firebase.database().ref(userNamePath).set(trabajo)
	}
	static setUserSalario(userId, salario){
		let userNamePath = "/user/"+userId+"/details/salario"
		return firebase.database().ref(userNamePath).set(salario)
	}
	static setUserFecha(userId, fecha){
		let userNamePath = "/user/"+userId+"/details/fecha"
		return firebase.database().ref(userNamePath).set(fecha)
	}
	
	static getTrabajo(userId, callback){
		let userTrabajo = "/users/"+userId+"/details/trabajo"
		firebase.database().ref(userTrabajo).on((snapshot) => {
			let trabajo = ''
			if(snapshot.val()){
				trabajo = snapshot.val()
			}
			callback(trabajo)
		})
	}
}

module.exports = Helpers