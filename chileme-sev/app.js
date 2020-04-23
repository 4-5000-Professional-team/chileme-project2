
const koa = require `koa`
const app = new koa()

const koaBody =require('koa-body')
app.use(async ctx=>{
    ctx.body ='hello'
})
//const Router = require ('koa-router')
app.use(koaBody())
app.listen(3000)
console.log(`server is running at http://127.0.0.1:3000`)