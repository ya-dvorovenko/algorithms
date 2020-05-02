let arrays = [];

const flat = (node) => {
    if(!node) {
        return null;
    }
    if(node.next) {
        arrays.push(node.val)
        flat(node.next);
    } else {
        arrays.push(node.val)
    }
}

const arrayToList = (array) => {
    if(!array.length) {
        return [];
    }
    let node
    let tmp
    let sortedArray = array.sort((a, b) => a - b);
    for (let i = array.length-1; i >= 0; i--) {
        if(array[i] !== 0 && !array[i]) {
            return null;
        }
        if(!node) {
            node = new ListNode(array[i]);
        } else {
            tmp = new ListNode(array[i]);
            tmp.next = node;
            node = tmp;
        }
    }
    arrays = [];
    return node;
}


var mergeKLists = function(lists) {
    if (!lists || !lists.length) return null;
    if(lists.length === 1) return lists[0];
    lists.map((ll) => {
        if(!ll || ll.val !== 0 && !ll.val) {
            return null;
        }
        return flat(ll);   
    });
    if(!arrays.length) {
        return null
    }
    return arrayToList(arrays);
};
