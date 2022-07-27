/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


// var hasCycle = function(head) {
//     let current1 = head; 
//     let current2 = head.next;
//     while (head !== null && next !== null) {
//         current1 = current1.next;
//         current2 = current2.next.next;
//        if (current2 == current1 ) return true;
        
//     }
//     return false;
// };

function hasCycle (head) {
  let curr = head;

  while (curr) {
    if (curr.visited) {
      return true;
    } else {
      curr.visited = true;
    }
    curr = curr.next;
  }

  return false;
}

