module.exports = function(app) {
  var lbTables = [
    'User',
    'AccessToken',
    'ACL',
    'RoleMapping',
    'Role',
    'Dish'
  ];
  app.dataSources.db.automigrate(lbTables, function(er) {
    if (er) throw er;
  });
};
