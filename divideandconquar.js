/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var main = function(){
    let result = myPow(1.84364,-14);
    console.log(result);
}
var myPow = function(x, n) {
    let result = 1;
    let loop = n;
    let op = n > 0 ? true : false;
    if(!op){
        loop = loop*-1;
    }
    if(loop == 1){
        return op ? x : 1/x;
    }
    if(loop == 0){
        return 1;
    }
    if(loop <= 10){
        while(loop > 0){
            if(!op){
                result /= x;
            }else{
                result *= x;
            }
            loop--;
        }
        return result;
    }else{
        let count = Math.floor(loop/10);
        mid = myPow(x,op ? count : -1 * count);
        for(let i = 0; i < 10; i++){
                result *= mid;
        }
        for(let j = 0; j < loop%10; j++){
            if(!op){
                result /= x;
            }else{
                result *= x;
            }
        }
        return result;
    }
};
main();