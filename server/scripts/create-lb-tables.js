var server = require('../server');
var ds = server.dataSources.db;

var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];

ds.automigrate(lbTables, function (err, result) {
  if (err) throw err;
  ds.disconnect();
});
