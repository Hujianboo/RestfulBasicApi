/*
 * @Author: Hujianbo
 * @Date: 2021-03-07 15:57:22
 * @LastEditors: Hujianbo
 * @LastEditTime: 2021-03-07 17:49:44
 * @FilePath: /RestfulBasicApi/src/index.ts
 */

import Koa,{Context} from 'koa';
import Router from 'koa-router';
const app = new Koa();
const router = new Router();

router.get('/*', async (ctx: Context) => {
    ctx.body = 'Hello World!';
});

app.use(router.routes());

app.listen(3000);

console.log('Server running on port 3000');