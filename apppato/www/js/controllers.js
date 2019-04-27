var config = {
    apiKey: "AIzaSyCsNe-NB5X9EhaZa5txq74EaNmpUlXI5SA",
    authDomain: "apppato.firebaseapp.com",
    databaseURL: "https://apppato.firebaseio.com",
    projectId: "apppato",
    storageBucket: "apppato.appspot.com",
    messagingSenderId: "540599828159"
  };
  firebase.initializeApp(config);
  var storage = firebase.storage();
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

.controller("inicioCRTL",function($scope){
  console.log("Entra inicio");

    $scope.insert = files[0].name;


   function handleFileSelect(evt) {
   var files = evt.target.files; // FileList object
   console.log(files[0].name)
   // Loop through the FileList and render image files as thumbnails.
   for (var i = 0, f; f = files[i]; i++) {

     // Only process image files.
     if (!f.type.match('image.*')) {
       continue;
     }




     var reader = new FileReader();

     // Closure to capture the file information.
     reader.onload = (function(theFile) {
       return function(e) {
         // Render thumbnail.
         var span = document.createElement('span');
         span.innerHTML = ['<img class="thumb" src="', e.target.result,
                           '" title="', escape(theFile.name), '"/>'].join('');
         document.getElementById('list').insertBefore(span, null);
       };
     })(f);

     // Read in the image file as a data URL.
     reader.readAsDataURL(f);
   }
 }


     $scope.img=function(){
      var storageRef = storage.ref();  
      var file = files; // use the Blob or File API
      ref.put(file).then(function(snapshot) {
      console.log('Uploaded a blob or file!');
    })

     }


 document.getElementById('files').addEventListener('change', handleFileSelect, false);




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
