/*
 * @Author: Hujianbo
 * @Date: 2021-03-24 22:05:25
 * @LastEditors: Hujianbo
 * @LastEditTime: 2021-03-25 00:20:01
 * @FilePath: /ICKT/src/ICKT/index.ts
 */
//订阅中心的类型
interface EventCenterType {
  _message : Object
  on: (eventName: string, callback:Function) => void 
  once: (eventName: string, callback:Function) => void 
  trigger: (eventName: string, callback:Function) => any
  remove: (eventName: string, callback:Function) => void 
}
//
interface messageType {
  [key: string]: [Function]
}
// 订阅中心的类
class EventCenter  {
  public _message = {} as messageType;
  /**
   * @description: 
   * @param {string} eventName 事件名
   * @param {Function} callback 回调函数
   * @return {*}
   */
  on (eventName:string,callback: Function) {
    if(this._message[eventName]){
      this._message[eventName].push(callback)
    } else {
      this._message[eventName] = [callback]
    }
  }
 /**
   * @description: 
   * @param {string} eventName 事件名
   * @return {string[]} 返回结果
   */
  trigger (eventName:string): string[] {
    let resArr = []
    const callbackArr = this._message[eventName]
    if(callbackArr){
      for(let i = 0;  i < callbackArr.length;i++){
        const res = callbackArr[i]();
        if(res){
          resArr.push(res)
        }
      }
    }
    return resArr
  }
  /**
   * @description: 
   * @param {string} eventName
   * @return {void}
   */
  public remove = function (eventName:string) {
    
  }
}
let Center = new EventCenter
Center.on('first',() => {
  return 4
})
Center.on('first',() => {
  return 5
})
let res = Center.trigger('first')
console.log(res);
