let fs = require('fs')
function read(file) {
  return new Promise(function(resolve, reject) {
    fs.readFile(file, 'utf8', function(err, data) {
      if (err) reject(err)
      resolve(data)
    })
  })
}
function readAll() {
  read1()
  read2()//这个函数同步执行
}
async function read1() {
    console.log('read1');
  let r = await read('compose.js','utf8')
  console.log(r)
}
async function read2() {
    console.log('read2');
  let r = await read('microtask.js','utf8')
  console.log(r)
}
readAll() // 2.txt 3.txt
