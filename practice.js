//11/6/2017
// reverse a number 
var reverse = function(x) {
    const reverseArray = [];
    let next;
    while(x){
    		let digit = x % 10
        reverseArray.push(digit)
        x = Math.floor(Math.abs((x/10)))
        console.log(x, 'digit')
    }
    return reverseArray.join('')
    
}

// Merge two sorted linked lists and return it as a new list. 
//The new list should be made by splicing together the nodes of the first two lists.
let link1 = {value:1, next: null}
let link2 = {value:2, next: null}
var mergeTwoLists = function(l1, l2) {
	let temp = l1;
	while(temp.next){
		temp = temp.next
	}
	temp.next = l2
	return l1
}

//console.log(mergeTwoLists(link1,link2))
