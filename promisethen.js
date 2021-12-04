new Promise((res,rej)=>{
    console.log('1');
    res();
}).then(()=>{
    console.log('3');
}).then(()=>{
    console.log('4');
}).then(()=>{
    console.log('5');
});
setTimeout(()=>{
    console.log('6');
},0);
console.log('2');
