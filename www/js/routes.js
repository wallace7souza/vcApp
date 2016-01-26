angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('login', {
      url: '/page10',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('endereco', {
      url: '/cadastroCep',
      templateUrl: 'templates/endereco.html',
      controller: 'enderecoCtrl'
    })
        
      
    
      
        
    .state('usuario', {
      url: '/cadastraUsuario',
      templateUrl: 'templates/usuario.html',
      controller: 'usuarioCtrl'
    })
        
      
    
      
        
    .state('salas', {
      url: '/salas',
      templateUrl: 'templates/salas.html',
      controller: 'salasCtrl'
    })
        
      
    
      
        
    .state('estado', {
      url: '/page18',
      templateUrl: 'templates/estado.html',
      controller: 'estadoCtrl'
    })
        
      
    
      
        
    .state('cidade', {
      url: '/page19',
      templateUrl: 'templates/cidade.html',
      controller: 'cidadeCtrl'
    })
        
      
    
      
        
    .state('bairro', {
      url: '/page20',
      templateUrl: 'templates/bairro.html',
      controller: 'bairroCtrl'
    })
        
      
    
      
        
    .state('logradouro', {
      url: '/page21',
      templateUrl: 'templates/logradouro.html',
      controller: 'logradouroCtrl'
    })
        
      
    
      
        
    .state('ajustes', {
      url: '/ajustes',
      templateUrl: 'templates/ajustes.html',
      controller: 'ajustesCtrl'
    })
        
      
    
      
        
    .state('chat', {
      url: '/chat',
      templateUrl: 'templates/chat.html',
      controller: 'chatCtrl'
    })
        
      
    
      
        
    .state('botOes', {
      url: '/botoes',
      templateUrl: 'templates/botOes.html',
      controller: 'botOesCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page10');

});