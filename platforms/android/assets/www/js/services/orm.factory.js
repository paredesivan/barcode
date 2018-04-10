angular
  .module('orm', ['ngCordova.plugins.sqlite'])
  .factory('orm', orm);

function orm($q,
             sql) {

  var db;

  var factory = {

    abrirBD: abrirBD,
    crearTabla: crearTabla,
    guardarProducto: guardarProducto,
    select: select
  };

  return factory;








  function guardarProducto(codigo, fecha, nombre) {

    console.log("codigo:" + codigo);
    console.log("fecha:" + fecha);
    console.log("nombre:" + nombre);
    var query = "INSERT INTO produc (codigoBarras, fecha, nombre) VALUES (?,?,?)";
    sql.execute(db, query, [codigo, fecha, nombre]).then(function (res) {
      console.log("insertId: " + res.insertId);
    })
  }









  function select(tabla) {
    var defer = $q.defer();

    var query = "select * from " + tabla;
    sql.execute(db, query).then(function (data) {

      var arreglo = [];
      for (var i = 0, max = data.rows.length; i < max; i++) {
        arreglo.push(data.rows.item(i));
      }

      defer.resolve(arreglo);

      console.log("select ok");
    }, function (err) {
      defer.reject(err);
      console.log("mal");
    });

    return defer.promise;
  }








  function crearTabla() {
    var defer = $q.defer();

    var query = 'CREATE TABLE IF NOT EXISTS produc (' +
      ' codigoBarras bigint primary key,' +
      ' nombre varchar (40),' +
      ' fecha date)';
    sql.execute(db, query).then(function (res) {
      defer.resolve(res);
      console.log("create ok");
    }, function (err) {
      defer.reject(err);
      console.log("mal");
    });

    return defer.promise;

  }







  function abrirBD(nombre) {

    var opciones = {name: nombre, location: 'default'};


    if (window.cordova && window.SQLitePlugin) {
      db = sql.openDB(opciones);

    } else {
      //var dbShell = window.openDatabase(database_name, database_version, database_displayname, database_size);
      db = window.openDatabase(nombre, '1.0', nombre, 8 * 1024 * 1024);

    }

    return db;

  }


}
