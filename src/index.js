const Koa = require('koa');
const app = new Koa();
require('./bootstrap');

app.use(async ctx => {
  var response = await db.query('SELECT 1 + 3 AS solution');
  ctx.body = response[0];
});

app.listen(3000,()=>{
  console.log('Server started at : 3000')
});