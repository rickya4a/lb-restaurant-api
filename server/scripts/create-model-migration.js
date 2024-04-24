var server = require('../server');
var ds = server.dataSources.db;

const models = [
  'Item',
  'Order',
  'ItemOrder',
  'Customer'
];

ds.automigrate(models, function(err, result) {
  if (err) throw err;
  server.models.Item.create([
    {
      name: 'Salad',
      price: 1000
    },
    {
      name: 'Quesadilla',
      price: 1500
    },
    {
      name: 'Hamburger',
      price: 900
    }
  ], function(err, res) {
    if (err) throw err;

    console.log('Models created: \n', res);
  });
});
