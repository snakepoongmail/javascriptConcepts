function Node(val,next){
    this.val = val;
    this.next = next;
}

function conNodeList(){
    var arr = [];
    for(var i = 0; i < 4; i++){
        arr.push(new Node(i,null));
    }
    for(var i = 0; i < 3; i++){
        arr[i].next = arr[i+1];
    }
    arr[3].next = null;
    return arr[0];
}

function main(){
    var head = conNodeList();
    console.log(`head ${head.val}`);
    var prev, cur, next;
    cur = head;
    [prev,cur,next] = [cur,cur.next,cur.next.next];
    console.log(`prev ${prev.val}, cur ${cur.val}, next ${next.val}`);
}

main();