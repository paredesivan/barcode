angular
  .module("starter")
  .controller("dash.controller",dash);
function dash($scope,sql,$rootScope){

  $scope.fe={
    lp:''
  };

  $scope.verFecha = verFecha;

  function verFecha(){
    console.log("fecha:" + $scope.fe.lp);
    guardar();
  }

  function guardar(){

      // var query = "INSERT INTO productos (codigoBarras, fecha) VALUES (?,?)";
      // sql.execute($rootScope.db, query, [6, $scope.fe.lp]).then(function(res) {
      //   console.log("insertId: " + res.insertId);

        var query= "select * from productos";
        sql.execute($rootScope.db,query).then(function(data){
          console.log(JSON.stringify(data));

          for (var i = 0; i < data.rows.length; i++) {
            var codigoBarras = data.rows.item(i).codigoBarras;
            var fecha = data.rows.item(i).fecha;

            $scope.fe.lp = new Date(fecha);

            console.log("codigoBarras:"+codigoBarras);
            console.log("fecha:" + fecha)
          }

        // },function(){
        //   console.log("salio mal")
        // })


      }, function (err) {
        console.error(err);
      });

  }






}
