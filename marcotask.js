/*
marco task:
script(整体代码)
setTimeout
setInterval
I/O
UI交互事件
postMessage
MessageChannel
setImmediate(Node.js 环境)

micro task:
Promise.then
Object.observe
MutationObserver
process.nextTick(Node.js 环境)
*/
console.log('script start');

new Promise((resolve,reject)=>{
    console.log('new promise is marco task');
    resolve();
}).then((val)=>{
    console.log('promise.then is micro task');
});

Promise.resolve().then(()=>{
    console.log('micro task - promise.resolve.then')
});

console.log('script end');