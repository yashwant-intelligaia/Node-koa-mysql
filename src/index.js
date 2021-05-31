const Koa = require('koa');
require('dotenv').config({path: 'src/.env'})
const app = new Koa();
require('./bootstrap');
console.log('PORT=>',process.env.PORT);

app.use(async ctx => {
  var response = await db.query('SELECT 1 + 4 AS solution');
  ctx.body = response[0];
});

app.listen(3000,()=>{
  console.log('Server started at : 3000')
});