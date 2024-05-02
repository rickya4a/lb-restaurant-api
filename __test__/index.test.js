const app = require('../server/server');
// const path = require('path')

// create in-memory datasources
app.dataSource('db', { connector: 'memory' });

//load the schema for the model
// const CustomerSchema = require(path.resolve(__dirname + '/common/models/customer.js'));

// const Customer = app.registry.createModel(CustomerSchema);

//load remote methods for this model
// require(path.resolve(__dirname + '/common/models/customer.js'))(Customer);

// app.model(Customer, { dataSource: 'db' });

const supertest = require('supertest');

describe('Item', () => {
  it('should return response 200', async () => {
    const res = await supertest(app).get('/api/Items');

    expect(res.statusCode).toEqual(200)
  })

  it('should add item data', async () => {
    const res = await supertest(app).post('/api/Items').send({
      name: 'Item 1',
      price: 100
    })

    expect(res.statusCode).toEqual(200)
  })
})

describe('Order', () => {
  it('should return token', async () => {
    const res = await supertest(app).get('/api/Orders')

    console.log(res.body)

    expect(res.statusCode).toEqual(200);
  })
})
