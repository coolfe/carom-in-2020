const path = require('path');
const Koa = require('koa');
const fs = require('fs');
const Router = require('koa-router');
const formidable = require('formidable');

const router = new Router();
let app = new Koa();
let form = new formidable.IncomingForm();


router.post('/upload', async (ctx, next) => {
  console.log('上传成功');
  ctx.body = 'ok';
})
router.get('/', async ctx => {
  ctx.body = {
    token: 'abc',
    msg: 'ok'
  }
})
router.post('/add', async ctx => {
  ctx.req.on('data', data => {
    console.log(data);
  })
  ctx.body = 'post ok'
})
router.get('/blog/:id', async ctx => {
  if (ctx.params.id == '1') {
    ctx.body = '博客1'
  } else {
    ctx.body = '博客2'
  }
})

app.use(async (ctx, next) => {
  form.uploadDir = path.resolve('./');
  form.keepExtensions = true;
  form.parse(ctx.req, (err, fields, files) => {
    console.log(files);
  })
  form.onPart = (part) => {
    part.addListener('data', (data) => {
      fs.appendFileSync('./0.jpg', data);
    })
  }

  await next();
})


app.use(async (ctx, next) => {
  console.log(ctx.request.header.origin);
  ctx.response.set('Access-Control-Allow-Origin', '*');
  ctx.response.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  ctx.response.set('Access-Control-Allow-Headers', 'token');
  await next();

})

app.use(router.routes());

app.use(router.allowedMethods());

app.listen(8888, () => {
  console.log('启动 8888')
})