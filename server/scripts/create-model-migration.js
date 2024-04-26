var server = require('../server');
var ds = server.dataSources.db;

const models = ['Item', 'Order', 'ItemOrder', 'Customer'];

ds.automigrate(models, function (err) {
  if (err) throw err;
  server.models.Item.create(
    [
      {
        name: 'Salad',
        price: 1000,
      },
      {
        name: 'Quesadilla',
        price: 1500,
      },
      {
        name: 'Hamburger',
        price: 900,
      },
    ],
    (err, res) => {
      if (err) throw err;

      console.log('Models created: \n', res);
    }
  );
  server.models.Customer.create(
    [
      {
        fullName: 'Admin Test',
        email: 'admin@local.host',
        username: 'admin_local',
        password: '123456',
        emailVerified: true,
      },
    ],
    (err, res) => {
      if (err) throw err;

      console.log('Models created: \n', res);
    }
  );
});
