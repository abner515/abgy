var config = {
    apiKey: "AIzaSyCsNe-NB5X9EhaZa5txq74EaNmpUlXI5SA",
    authDomain: "apppato.firebaseapp.com",
    databaseURL: "https://apppato.firebaseio.com",
    projectId: "apppato",
    storageBucket: "apppato.appspot.com",
    messagingSenderId: "540599828159"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  angular.module('starter.controllers', [])
  .controller("registroCtrl", function($scope){

    $scope.user={}

    $scope.registro=function(x) {
      $scope.user=x;
      firebase.auth().createUserWithEmailAndPassword($scope.user.email, $scope.user.password).then(function(data){
        database.ref('users/' + data.user.uid).set({
        email: $scope.user.email,
        username: $scope.user.name
     });

      }).catch(function(error){
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
      alert("usuario registrado")
        })
      }
  })

.controller("registro",function($scope){

  })
.controller("loginctrl",function($scope) {
  $scope.usuario = {};
  $scope.inicio = function(m) {
    $scope.usuario = m;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
    // body...
  }

})