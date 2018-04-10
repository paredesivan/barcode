angular
  .module("starter")
  .controller("dash.controller", dash)
  .filter('fechaLoca', conv);

function conv() {
  return convertir;

  function convertir(fecha) {
    return new Date(fecha);
  }

}


function dash($scope,
              barcode,
              orm) {


  $scope.verFecha = verFecha;
  $scope.escanear = escan;
  $scope.guardarProducto = guardarProducto;
  $scope.sele = sele;


  function sele() {
    orm.select("produc").then(function (result) {
        console.log("res:" + result);

        $scope.producto.nombre = result[0].nombre;
        $scope.producto.fecha = new Date(result[0].fecha);
        $scope.producto.codigoBarras = result[0].codigoBarras;

      },
      function (error) {
        console.error('');

      });
  }


  $scope.producto = {};


  function guardarProducto() {

    var producto = obtenerProducto();
    guardar(producto.codigoBarras, producto.fecha, producto.nombre);

  }


  function obtenerProducto() {
    return {
      codigoBarras: $scope.producto.codigoBarras,
      fecha: $scope.producto.fecha,
      nombre: $scope.producto.nombre
    }
  }


  function guardar(codigo, fecha, nombre) {
    return orm.guardarProducto(codigo, fecha, nombre);
  }


  function escan() {
    escanear().then(function (result) {
        console.log('resultado:' + JSON.stringify(result));

        console.log("codigobarras:" + result.text);
        if (result) {
          $scope.producto.codigoBarras = result.text;
        }
      },
      function () {
        console.error('');
      });
  }


  function escanear() {
    return barcode.escanear()
  }

  function verFecha() {

  }


}
