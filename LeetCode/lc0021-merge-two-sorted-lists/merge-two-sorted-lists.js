/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let combList = new ListNode();
  const dummy = combList;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      combList.next = list1;
      list1 = list1.next;
    } else {
      combList.next = list2;
      list2 = list2.next;
    }
    combList = combList.next;
  }

  if (list1) {
    combList.next = list1;
  }
  if (list2) {
    combList.next = list2;
  }

  return dummy.next;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
