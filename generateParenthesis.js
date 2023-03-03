var generateParenthesis = function(n) {
    let left = right = n;
    let arr = [];
    let DFS = function(left,right,res){
        if(left > right){
            return;
        }
        if(left == 0 && right == 0){
            arr.push(res);
        }
        if(left > 0){
            DFS(left - 1, right, res + "(");
        }
        if(right > 0){
            DFS(left,right - 1, res + ")");
        }
    }
    DFS(left-1,right,"(");
    return arr;
};

generateParenthesis(3);