const Koa = require('koa');
const koaBody = require('koa-body');
const routes = require('./routes/routes.js');
const path = require('path');
const json = require('koa-json');
const render = require('koa-ejs');
const app = new Koa();

app.use(routes.routes());
render(app, {
    root: path.join(__dirname, 'views'),
    layout:'layout',
    viewExt: 'html',
    cache: false,
    debug: false
})
app.use(json());
app.use(koaBody());
app.use(routes.allowedMethods());
app.listen(5000,() => console.log('Server running on port 5000'));