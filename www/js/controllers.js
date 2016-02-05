angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope) {

})
   
.controller('enderecoCtrl', function($scope, $http) {

	$scope.pegaCep = function () {
	    //console.log($scope.endereco.cep);
	    $http.get("http://localhost:8888/sistemas/sistemas_web/ionic/vcApp/www/php/pegaCep.php?cep="+$scope.endereco.cep).success(function (endereco){
	    	$scope.endereco = endereco;
	    });
	 }

	$scope.adicionarEndereco = function (endereco){
		console.log(endereco);
		//$location.path('/cadastraUsuario');
	}
})
   
.controller('usuarioCtrl', function($scope) {

})
   
.controller('salasCtrl', function($scope) {

})
   
.controller('estadoCtrl', function($scope) {

})
   
.controller('cidadeCtrl', function($scope) {

})
   
.controller('bairroCtrl', function($scope) {

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
 
