/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? undefined : left)
 *     this.right = (right===undefined ? undefined : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    const validBST = function(left, cur, right){
        if(left < cur.val && cur.val < right){
            return true;
        }else{
            return false;
        }
    }
    const recurse = function(cur, leftlimit, rightlimit){
        //检查本节点
        if((cur.left == undefined || cur.left.val < cur.val) && (cur.right == undefined || cur.right.val > cur.val)){
            //递归左右节点
            return validBST(leftlimit,cur,rightlimit) && (cur.left == undefined ? true : recurse(cur.left,leftlimit,cur.val)) && (cur.right == undefined ? true: recurse(cur.right,cur.val, rightlimit));
        }else{
            return false;
        }
    }
    return recurse(root,Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

function TreeNode(val, left, right){
    this.val = val;
    this.left = left;
    this.right = right;
}

function main(){
    let tree = new TreeNode(0, new TreeNode(-1,undefined,undefined),undefined);
    console.log(isValidBST(tree));
}

main();