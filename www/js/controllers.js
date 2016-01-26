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
   
.controller('logradouroCtrl', function($scope) {

})
   
.controller('ajustesCtrl', function($scope) {

})
   
.controller('chatCtrl', function($scope) {

})
   
.controller('botOesCtrl', function($scope) {

})
 