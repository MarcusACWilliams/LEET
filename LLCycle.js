/** Oct 1, 2019 - faster than 92.71% - less memory than 93.75%
 *  ---> Completion Time: ~20mins <---
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
    if(head == null || head.next == null) { 
        return false;
    }
    var slow = head.next;
    if(slow.next == null) {
        return false;
    }
    var fast = slow.next;
    var pos = 0;

    while(fast != slow) {
        if(fast.next != null) {
            fast = fast.next;
            if(fast.next != null) {
                fast = fast.next;
                slow = slow.next;
            }else{return false;}

        }else{return false;}

        
    }
    return true;
};