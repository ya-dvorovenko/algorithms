var mergeTwoLists = function(l1, l2) {
    const accum = new ListNode(-1);
    let rs = accum;
    while(l1 && l2) {
        if(l1.val < l2.val) {
            rs.next = l1
            l1 = l1.next
        } else {
            rs.next = l2
            l2 = l2.next
        }
        rs = rs.next
    }
    if(l1) {
        rs.next = l1
    } else {
        rs.next = l2
    }
    return accum.next
};
