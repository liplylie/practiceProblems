// 11/27/2017

// roman numeral to int
const roman = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
}
var romanToInt = function(s) {
    s = s.split("");
    let int = 0;
    let numArr = s.map(letter => {
        return toNum(letter);
    })
    for ( let i = 0; i < numArr.length ; i++){
        if (numArr[i] < numArr[i+1]){
            int = int + numArr[i+1] - numArr[i] 
            i++
        } else{
            int = int + numArr[i] 
        }
    }
    return int
};

var toNum = function(letter){
    return roman[letter]
}

// hexadecimal to word
function hex2a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

let s = '\x4869'
let ss = s.substr(0,1)
// console.log(ss,'s')
let sub = s.substr(1)
// console.log(sub, 'sub')
// console.log(ss + hex2a(sub),'hex')
// 11/21/2017
//Given a string, find the length of the longest substring without repeating characters.
let str = 'pwwkew'
var lengthOfLongestSubstring = function(s) {
    let uniq = [];
    let long = "";
    let count = 0;
    let length = s.length;
    while ( count < length){
        for ( let i = count; i <= s.length-1; i++){
            if ( !uniq.includes(s[i])){
                uniq.push(s[i])
            } else {
                break;
            }
        }
        if (uniq.length > long.length){
            long = uniq.join("")
        }
        uniq = []
        count++
    }
    return long
};

// console.log(lengthOfLongestSubstring(str), 'long')

//11/17/2017
// return length of last word of string
var lengthOfLastWord = function(s) {
     s = s.trim()
    if (s.length === 0){
        return 0
    }
    let words = s.split(" ")
    if ( words[words.length-1].length === 0){
        for ( let i = words.length -1; i > 0; i--){
            console.log(words[i], 'asdf')
            if (words[i]){
                return words[i].length
            }
        } 
        return 0;
    } else {
        let word = words.pop()
        return word.length
    }
  
};

//console.log(lengthOfLastWord('this is a thing '))
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