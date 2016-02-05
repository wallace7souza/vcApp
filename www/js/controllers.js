angular.module('app.controllers', [])
  
.controller('loginCtrl', function ($scope, $http, $state, $location, $window) {

	$scope.usuario = {
		email: "",
		senha: ""
	}

	$scope.msgErro = '';

	$scope.logar = function (usuario) {

		$http.post("http://www.vigilantescomunitarios.com/www/php/login.php", usuario).success(function (response){
			//http://localhost:8888/sistemas/sistemas_web/ionic/vcApp/www/php/login.php
			if(response == ''){
				$location.path('/page10');
				$scope.msgErro = "E-mail ou senha inválido";

			}else if(typeof(Storage) !== "undefined") {
						$window.localStorage.setItem("idUsuario", response.idUsuario);
						$window.localStorage.setItem("idCep", response.idCep);
						$window.localStorage.setItem("nome", response.nome);
						$location.path('/salas');
					} else {
					    console.log("Desculpe, mas o navegador nao possui suporte a Web Storage.");
					}
		})
	}
})
   
.controller('enderecoCtrl', function ($scope, $http, $location, $window) {

	$scope.pegaCep = function () {
	    //console.log($scope.endereco.cep);
	    $http.get("http://www.vigilantescomunitarios.com/www/php/pegaCep.php?cep="+$scope.endereco.cep).success(function (endereco){
	    	//http://localhost:8888/sistemas/sistemas_web/ionic/vcApp/www/php/pegaCep.php
	    	console.log(endereco);
	    	$scope.endereco = endereco;
	    });
	 }

	$scope.adicionarEndereco = function (endereco) {
		$http.post("http://www.vigilantescomunitarios.com/www/php/salvaEndereco.php", endereco).success(function (data){
			//http://localhost:8888/sistemas/sistemas_web/ionic/vcApp/www/php/salvaEndereco.php
			//console.log(data);
			if(typeof(Storage) !== "undefined") {
				$window.localStorage.setItem("idCep", data);
			} else {
			    console.log("Desculpe, mas o navegador nao possui suporte a Web Storage.");
			}
		});
		$location.path('/cadastraUsuario');
	}
})
   
.controller('usuarioCtrl', function ($scope, $http, $window, $location) {

	$scope.pegaUsuario = function (usuario) {
		var idCep = $window.localStorage.getItem('idCep');
		usuario.idCep = idCep;
		$http.post("http://www.vigilantescomunitarios.com/www/php/salvaUsuario.php", usuario).success(function (data){
			//http://localhost:8888/sistemas/sistemas_web/ionic/vcApp/www/php/salvaUsuario.php
			//console.log(data);
		});
		$location.path('/page10');
	}
})
   
.controller('salasCtrl', function($scope) {

})
   
.controller('estadoCtrl', function ($scope, $http, $window) {

	var pegaMsgsEstado = function () {
		idCep = $window.localStorage.getItem('idCep');
		idUsuario = $window.localStorage.getItem('idUsuario');
		var dados = {
			idUsuario: $window.localStorage.getItem('idUsuario'),
			idCep: $window.localStorage.getItem('idCep')
		}

		$http.post("http://www.vigilantescomunitarios.com/www/php/pegaMsgsEstado.php", dados).success(function (data){
			//http://localhost:8888/sistemas/sistemas_web/ionic/vcApp/www/php/pegaMsgsEstado.php
			console.log(data);
			$scope.mensagens = data;
		})
	}

	pegaMsgsEstado();
})
   
.controller('cidadeCtrl', function ($scope, $http, $window) {

	var pegaMsgsCidade = function () {
		idCep = $window.localStorage.getItem('idCep');
		idUsuario = $window.localStorage.getItem('idUsuario');
		var dados = {
			idUsuario: $window.localStorage.getItem('idUsuario'),
			idCep: $window.localStorage.getItem('idCep')
		}

		$http.post("http://www.vigilantescomunitarios.com/www/php/pegaMsgsCidade.php", dados).success(function (data){
			//http://localhost:8888/sistemas/sistemas_web/ionic/vcApp/www/php/pegaMsgsCidade.php
			//console.log(data);
			$scope.mensagens = data;
		})
	}

	pegaMsgsCidade();
})
   
.controller('bairroCtrl', function ($scope, $http, $window) {

	var pegaMsgsBairro = function () {
		idCep = $window.localStorage.getItem('idCep');
		idUsuario = $window.localStorage.getItem('idUsuario');
		var dados = {
			idUsuario: $window.localStorage.getItem('idUsuario'),
			idCep: $window.localStorage.getItem('idCep')
		}

		$http.post("http://www.vigilantescomunitarios.com/www/php/pegaMsgsBairro.php", dados).success(function (data){
			//http://localhost:8888/sistemas/sistemas_web/ionic/vcApp/www/php/pegaMsgsBairro.php
			//console.log(data);
			$scope.mensagens = data;
		})
	}

	pegaMsgsBairro();
})
   
.controller('logradouroCtrl', function ($scope, $http, $window) {

	var pegaMsgsLogra = function () {
		idCep = $window.localStorage.getItem('idCep');
		idUsuario = $window.localStorage.getItem('idUsuario');
		/*var dados = {
			idUsuario: $window.localStorage.getItem('idUsuario'),
			idCep: $window.localStorage.getItem('idCep')
		}*/

		$http.get("http://www.vigilantescomunitarios.com/www/php/pegaMsgsLogra.php?idUsuario="+$stateParams.idUsuario"&idCep="+$stateParams.idCep).success(function (data){
			//http://localhost:8888/sistemas/sistemas_web/ionic/vcApp/www/php/
			//console.log(data);
			$scope.mensagens = data;
		});
	}

	pegaMsgsLogra();

	$scope.enviarMsg = function (msg) {
		//console.log(msg);
	    var enviaMsg = {
	    	msg: msg,
	    	idUsuario: $window.localStorage.getItem('idUsuario'),
	    	idCep: $window.localStorage.getItem('idCep'),
	    	nome: $window.localStorage.getItem('nome')
	    }

		$http.post("http://www.vigilantescomunitarios.com/www/php/enviaMsgLogra.php", enviaMsg).success(function (data){
			//http://localhost:8888/sistemas/sistemas_web/ionic/vcApp/www/php/enviaMsgLogra.php
			//console.log(data);
			//$scope.msgForm = null;
		});
		pegaMsgsLogra();
	}

})
   
.controller('ajustesCtrl', function($scope) {

})
   
.controller('chatCtrl', function($scope) {

})
   
.controller('botOesCtrl', function($scope) {

})

.controller('botOesCtrl', function($scope) {

})


 
