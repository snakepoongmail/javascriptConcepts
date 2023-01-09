var lowestCommonAncestor = function(root, p, q) {
    let common = null;
    function recursion(cur, p, q){
        if(cur == undefined || common != null)
            return 0;
        let self = cur.val == p.val || cur.val == q.val ? 1 : 0;
        let right = recursion(cur.right, p, q);
        let left = recursion(cur.left, p, q);
        if(self == 1 && (left == 1 || right == 1)){
            common = cur;
        }else if(left == 1 && right == 1){
            common = cur;
        }
        return self + left + right;
    }
    recursion(root,p ,q);
    return common;
};

function TreeNode(left,val,right){
    this.left = left;
    this.val = val;
    this.right = right;
}

function main(){
    let result = lowestCommonAncestor(new TreeNode(new TreeNode(undefined,1,undefined),2,undefined),new TreeNode(undefined,2,undefined),new TreeNode(undefined,1,undefined));
    console.log(`${result.val}`)
}

main();