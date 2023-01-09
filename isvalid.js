
var isValidBST = function(root) {
    const validBST = function(left, cur, right){
        if((left == undefined || left < cur.val) && (right == undefined || cur.val < right)){
            return true;
        }else{
            return false;
        }
    }
    let leftlimit = Number.MIN_SAFE_INTEGER;
    let rightlimit = Number.MAX_SAFE_INTEGER;
    let cur = root;
    let stack = [];
    let result = false;
    while(cur != null){
        result = validBST(leftlimit,cur,rightlimit) && validBST(cur?.left?.val, cur, cur?.right?.val); 
        if(result){
            if(cur.left != undefined || cur.right != undefined){
                stack.push({leftlimit:leftlimit,rightlimit:rightlimit,node: cur});
                if(cur.left != undefined){
                    rightlimit = cur.val; 
                    cur = cur.left;
                }else{
                    leftlimit = cur.val;
                    cur = cur.right;
                }
            }else{
                let node;
                if(stack.length == 0){
                    break;
                }
                ({node,leftlimit,rightlimit} = stack[stack.length - 1]);
                while(node.right == cur){
                    stack.pop();
                    cur = node;
                    if(stack.length != 0){
                        ({node,leftlimit,rightlimit} = stack[stack.length - 1]);
                    }else{
                        node = null;
                        break;
                    }
                }
                cur = node;
                while(cur != null){
                    if(cur.right != undefined){
                        leftlimit = cur.val;
                        cur = cur.right;
                        break;
                    }else{
                        stack.pop();
                        if(stack[stack.length - 1] != null){
                            ({node: cur,leftlimit,rightlimit} = stack[stack.length - 1])
                        }else{
                            cur = null;
                        }
                    }
                }
            }
        }else{
            result = false;
            break;
        }
    }
    return result;
};

function Node(left, right, val){
    this.val = val;
    this.left = left;
    this.right = right;
}

function main(){
    let root = new Node(undefined, new Node(new Node(undefined,undefined,57),null,85),-12);
    console.log(isValidBST(root));
}

main();