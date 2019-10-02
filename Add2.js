/** Oct 1, 2019 - faster than 74.63% - less memory than 18.05% **EDIT** - faster than (86.61%)31.37% - less memory than 44.4%
 **EDIT** - faster than 93.97% - less memory than 37.50% 
*  ---> Completion Time: NA <---
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var carry = 0;
    var nextdigit = {next:null};
    var result = nextdigit;
    var temp, node;
    // Until we run out of digits
    while(l1 != null || l2 != null) {

        // Add digits and multiply by correct decimal
        temp = (( (l1?l1.val:0) + (l2?l2.val:0) + carry));

        if(temp>=10){carry = 1; temp-=10;}else{carry = 0;}
        node = new ListNode(temp);
        nextdigit.next = node;
        nextdigit = nextdigit.next;
        
        

        if(l1){l1 = l1.next;}
        if(l2){l2 = l2.next;}
    }
    if(carry == 1){
        nextdigit.next = new ListNode(1);   
    }
    return result.next;
};

function ListNode(val) {
     this.val = val;
     this.next = null;
}

t1 = new ListNode(2);
t1.next = new ListNode(4);
t1.next.next = new ListNode(3);

t2 = new ListNode(5);
t2.next = new ListNode(6);
t2.next.next = new ListNode(4);

addTwoNumbers(t1, t2);


