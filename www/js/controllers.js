angular.module('app.controllers', ['ui.utils.masks'])
  
.controller('loginCtrl', function ($scope, $http, $state, $location, $window) {

	$scope.usuario = {
		email: "",
		senha: ""
	}

	$scope.msgErro = '';

	$scope.msgExiste = '';

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
	$scope.endereco = {};

	$scope.pegaCep = function () {
	    //console.log($scope.endereco.cep);
	    if(!$scope.endereco.cep){
	    	return;
	    }
	    var cep = $scope.endereco.cep;
	    //console.log(cep);
	    if(cep.length < 8){
	    	return;
	    }else {
	    	$http.get("http://www.vigilantescomunitarios.com/www/php/pegaCep.php?cep="+$scope.endereco.cep).success(function (endereco){
	    		//http://localhost:8888/sistemas/sistemas_web/ionic/vcApp/www/php/pegaCep.php
	    		//console.log(endereco);
	    		$scope.endereco = endereco;
	    	});
	    }
	 };

	 $scope.$watch('endereco.cep', $scope.pegaCep);

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

	$scope.salvaUsuario = function (usuario) {
		// O cep é pego para salvar junto com os dados do usuário
		var idCep = $window.localStorage.getItem('idCep');
		usuario.idCep = idCep;

		$http.post("http://www.vigilantescomunitarios.com/www/php/salvaUsuario.php", usuario).success(function (data){
			//http://localhost:8888/sistemas/sistemas_web/ionic/vcApp/www/php/salvaUsuario.php
			//console.log(data);
			//console.log(JSON.stringify(data));
			if(data.cod === 1){
				$location.path('/cadastraUsuario');
				$scope.msgExiste = "Usuário já existente. Tente outro.";
			}

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

		$http.get("http://www.vigilantescomunitarios.com/www/php/pegaMsgsEstado.php?idUsuario="+idUsuario+"&idCep="+idCep).success(function (data){
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
		/*var dados = {
			idUsuario: $window.localStorage.getItem('idUsuario'),
			idCep: $window.localStorage.getItem('idCep')
		}*/

		$http.get("http://www.vigilantescomunitarios.com/www/php/pegaMsgsCidade.php?idUsuario="+idUsuario+"&idCep="+idCep).success(function (data){
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
		/*var dados = {
			idUsuario: $window.localStorage.getItem('idUsuario'),
			idCep: $window.localStorage.getItem('idCep')
		}*/

		$http.get("http://www.vigilantescomunitarios.com/www/php/pegaMsgsBairro.php?idUsuario="+idUsuario+"&idCep="+idCep).success(function (data){
			//http://localhost:8888/sistemas/sistemas_web/ionic/vcApp/www/php/pegaMsgsBairro.php
			//console.log(data);
			$scope.mensagens = data;
		})
	}

	pegaMsgsBairro();
})
   
.controller('logradouroCtrl', function ($scope, $http, $window, $stateParams) {

	$scope.mensagem = {
	    msg:""
	  };

	var pegaMsgsLogra = function () {
		idCep = $window.localStorage.getItem('idCep');
		idUsuario = $window.localStorage.getItem('idUsuario');

		//$http.post("http://www.vigilantescomunitarios.com/www/php/pegaMsgsLogra.php", dados).success(function (data){
		$http.get("http://www.vigilantescomunitarios.com/www/php/pegaMsgsLogra.php?idUsuario="+idUsuario+"&idCep="+idCep).success(function (data){
			//http://localhost:8888/sistemas/sistemas_web/ionic/vcApp/www/php/
			//console.log(data);
			$scope.mensagens = data;

		});
	}

	pegaMsgsLogra();

	$scope.enviarMsg = function (mensagem) {
		//console.log(mensagem);
	    var enviaMsg = {
	    	mensagem: mensagem,
	    	idUsuario: $window.localStorage.getItem('idUsuario'),
	    	idCep: $window.localStorage.getItem('idCep'),
	    	nome: $window.localStorage.getItem('nome')
	    }

		$http.post("http://www.vigilantescomunitarios.com/www/php/enviaMsgLogra.php", enviaMsg).success(function (data){
			//http://localhost:8888/sistemas/sistemas_web/ionic/vcApp/www/php/enviaMsgLogra.php
			//console.log(data);
			pegaMsgsLogra();
			$scope.mensagem = {
		      msg: ""
		    }

		});
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


 
