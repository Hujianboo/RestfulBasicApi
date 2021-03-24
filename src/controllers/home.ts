/*
 * @Author: Hujianbo
 * @Date: 2021-03-07 22:26:52
 * @LastEditors: Hujianbo
 * @LastEditTime: 2021-03-07 23:10:36
 * @FilePath: /RestfulBasicApi/src/controllers/home.ts
 */
import {Context} from 'koa';
export class HomCtl {
  index(ctx:Context){
    ctx.body = '<h1>这是主页</h1>';
  }
}