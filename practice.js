//11/15/2017

// merge two singly linked list 
var mergeTwoLists = function(l1, l2) {
    if(!l1) return l2;
    if(!l2) return l1;
    
    if(l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
    
};
// remove Element from array and return the array's length
//BigO = quadratic
let arrNums = [2,3,3,2,1]
var removeElement = function(nums, val) {
    while (nums.includes(val)){
        nums.splice(nums.indexOf(val), 1)
    }
    return nums.length
};
//console.log(removeElement(arrNums, 3), 'removeElement')
//BigO = linear
var removeElement2 = (nums, val)=>{
    let i = 0;
    for ( let j = 0; j < nums.length; j++) {
        if ( nums[j] !== val){
            nums[j] === nums[i]
            i++
        }
    }
    return nums.length
}
//console.log(removeElement2(arrNums, 3), 'removeElement2')


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

var removeDuplicates = function(nums) {
    for (var i = 0; i < nums.length; i++){
        for (var j = i+1; j < nums.length; j++){
            if (nums[j] === nums[i]){
                nums.splice(j,1)
            }
        }
    }
    return nums
};

//console.log(removeDuplicates([1,1,2,2,4,4]))