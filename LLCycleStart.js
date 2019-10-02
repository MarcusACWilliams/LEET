/** Oct 1, 2019 - faster than 83.65% - less memory than 31.25%
 *  ---> Completion Time: 15mins <---
 * 
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    
    if(!head||!head.next||!head.next.next) {
        return null;
    }
    var slow = head.next;
    var fast = slow.next;

    // Determine presence of cycle
    while(fast != slow) {
        if(!fast.next || !fast.next.next) {
            return null;
        }
            slow = slow.next;
            fast = fast.next.next;
    }

    // Move slow pointer back to the start of the list
    slow = head;
    // Increment each pointer by 1
    while(fast != slow) {
        slow = slow.next;
        fast = fast.next;
    }
    // Pointers first meet at start of cycle
    return slow;
};

if(!null){ 
    console.log("true");
}else{console.log("false");}