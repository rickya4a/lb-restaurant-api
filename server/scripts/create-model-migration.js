var server = require('../server');
var ds = server.dataSources.db;

const models = [
  'Dish'
];

ds.automigrate(models, function(err, result) {
  if (err) throw err;
  ds.disconnect();
});
