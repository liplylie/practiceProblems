//3/20/2018

function spiralTraversal (matrix) {
  let t = 0
  let b = matrix.length - 1
  let l = 0
  let r = matrix[0].length - 1
  let direction = 0
  let arr = []
  while( t<=b && l <=r ){
    if (direction === 0){
      for (let i = l; i <= r; i++){
        console.log(matrix[t][i], 't')
        arr.push(matrix[t][i])
      }
      t +=1
    }
    
    else if (direction === 1){
      console.log ('here',r)
      for (let i = t; i <= b; i++){
        console.log(matrix[i][r], 'r')
        arr.push(matrix[i][r])
      }
      r -=1
    }
    
    else if (direction === 2){
      for (let i = r; i >= l; i--){
        console.log(matrix[b][i], 'b')
        arr.push(matrix[b][i])
      }
      b -=1
    }
    
    else if (direction === 3){
      for (let i = b; i >= t; i--){
        console.log(matrix[i][l], 'l')
        arr.push(matrix[i][l])
      }
      l +=1
    }
    else if (direction === 4){
      direction = -1
    }
    direction += 1
    
  }
  return arr
}

// 3/1/2018

var levelOrderBottom = function(root) {
    if (!root){
        return []
    }
    
    let queue = [root]
    let returnArray = [[root.val]]
    while( queue.length ) {
        let nodeArray = []
        let size = queue.length
        for (let i = 0; i < size; i++){
            let node = queue.shift()
            if (node.left){
                nodeArray.push(node.left.val)
                queue.push(node.left)
            }
            if (node.right){
                nodeArray.push(node.right.val)
                queue.push(node.right)
            }

        }
      if (nodeArray.length > 0){
        returnArray.unshift(nodeArray)
      }
    }
    return returnArray
};

// 2/19/2018

// 2/13/2018
var rotateArray = function(nums, k) {
    for ( ; k > 0; k--){
        let hold = nums.pop()
        nums.unshift(hold)
    }
};

// 2/12/2018
var rob = function(nums) {
    let a = 0
    let b = 0
    for ( let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            a = Math.max(a + nums[i], b)
            console.log(a,'a')
        } 
        else {
            b = Math.max(a , b + nums[i])
            console.log(b,'b')
        }
    }
    return Math.max(a,b)
    
};


// 2/8/2018
var generate = function(numRows) {
    if (numRows === 0){
        return []
    }
    if (numRows === 1) {
        return [[1]]
    }
    if (numRows === 2) {
        return [[1],[1,1]]
    }
    
    let results = [[1],[1,1]]
    let count = 2
    let index = 1
    while (count < numRows){
        let nextArray = [1]
        for (let i = 1; i < count; i++){
            nextArray.push( (results[index][i] + results[index][i-1]) )
        }
        nextArray.push(1)
        results.push(nextArray)
        index+=1
        count+=1
    }
    return results
};
// 2/6/2018

var diameterOfBinaryTree = function(root) {
    var maxDiameter = -1;
    var getDepth = function(root) {
        if (root === null) {
            return 0;
        }
        var leftDepth = getDepth(root.left);
        var rightDepth = getDepth(root.right);
        
        maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);
        maxDepth = Math.max(leftDepth, rightDepth) + 1;
        return maxDepth;
    };
    
    if (root === null) return 0;
    getDepth(root);
    
    return maxDiameter;
};

// 2/5/2018

var addStrings = function(num1, num2) {
  let i = num1.length -1
  let j = num2.length -1
  let ans = '';
  let add = 0;

  for ( ; i >= 0 || j >= 0; i--, j--) {
    let a = i >= 0 ? +num1[i] : 0;
    let b = j >= 0 ? +num2[j] : 0;
    let sum = a + b + add;
    ans = sum % 10 + ans;
    add = ~~(sum / 10);
  }

  add && (ans = add + ans);
  return ans;
};

// 2/1/2018


function hire(arr){
  let unique = [... new Set(arr)]
  return unique
}
let candidates = ['Jordan', 'other', 'other', 'other', 'other']

// console.log(hire(candidates))

// 1/26/2018

var invertTreeBFS = function(root) {

    if (!root){
        return []
    }
    let queue = [root]
    while(queue.length){
        let node = queue.shift()
        let temp = node.right
        node.right = node.left
        node.left = temp
        if (node.left){
            queue.push(node.left)
        }
        if (node.right){
            queue.push(node.right)
        }
    }
    return root
};


// 1/25/2018

var maxProfitRefactored = function(prices) {
    let smallest = Number.MAX_VALUE
    let maxDifference = 0
   
    for (let i = 0; i < prices.length; i++) {
       if (prices[i] < smallest) {
       smallest = prices[i]
       } else {
        maxDifference = Math.max(prices[i] - smallest, maxDifference)
       } 
    }
   
   return maxProfit;
};

var maxProfit = function(prices) {
    let maxDifference = 0
    for (let i = 0; i < prices.length; i++){
        for (let j = i+ 1; j < prices.length; j++){
            if (prices[j] > prices[i]){
                maxDifference = Math.max(maxDifference, prices[j] - prices[i])
            } 
            if (prices[j] < prices[i]){
                break
            }
        }
    }
   return maxDifference
};

// 1/24/2018

var firstUniqCharRefactor = function(s) {
        for(var i = 0; i < s.length; i++) {
             if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
                return i; 
            } 
         }
        return -1;
};
var firstUniqChar = function(s) {
    let obj = {}
    for (let i = 0; i < s.length; i++){
        if (!obj[s[i]]) {
            obj[s[i]] = 1
        } else {
            obj[s[i]] ++
        }
    } 
    let check
    console.log(obj)
    for ( var key in obj) {
        if (obj[key] === 1){
            check = key
            return s.indexOf(key)
        }
    }
    return -1
};

// 1/23/2018

var fizzBuzz = function(n) {
    const results = []
    for ( let i = 1; i <= n; i++){
        if (i % 3 === 0 && i % 5 === 0) {
        results.push("FizzBuzz")
        } else if (i % 3 === 0){
            results.push("Fizz")
        } else if (i % 5 === 0){
            results.push("Buzz")
        } else {
        results.push("" + i)
        }
    }
    return results
};

// 1/20/2018

var diameterOfBinaryTree = function(root) {
    var maxDiameter = -1;
    var getDepth = function(root) {
        if (root === null) {
            return 0;
        }
        var leftDepth = getDepth(root.left);
        var rightDepth = getDepth(root.right);
        
        maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);
        maxDepth = Math.max(leftDepth, rightDepth) + 1;
        return maxDepth;
    };
    
    if (root === null) return 0;
    getDepth(root);
    
    return maxDiameter;
};

// 1/18/2018

var convertBST = function(root) {
    if (!root){
        return null
    }
    
    let treeVals = [];
    
    function recurse (node){
        treeVals.push(node.val)
        if (node.left !== null){
            recurse(node.left)
        }
        if (node.right !== null){
            recurse(node.right)
        }   
    }
    recurse(root)
    function addGT(node){
        let check = node.val
        for (let i = 0; i < treeVals.length; i++){
            if (check < treeVals[i]){
                node.val += treeVals[i]
            }
        }
        if (node.left !== null){
            addGT(node.left)
        }
        if (node.right !== null){
            addGT(node.right)
        }   
    }
    addGT(root)
    return root
}

//1/17/2018

var majorityElement = function(nums) {
    let appear = nums.length/2
    let temp = {}
    for ( let i = 0; i < nums.length; i++){
        if (!temp.hasOwnProperty(nums[i])){
            temp[nums[i]] = 1
        } else {
            temp[nums[i]]++
        }
    }
    for ( let key in temp){
        if (temp[key] > appear){
            return Number(key)
        }
    }
};

// 1/16/2018

const countRec = (num) =>{
    if (num === 10){
        return
    }
    count(num+1)
    console.log(num)
    
}
//count(0)
// 1/15/2018

var isBalanced = function(root) {
    return findDepth(root) === -1 ? false : true;
};

function findDepth(root) {
    if (root === null) {
        return 0;
    }
    
    var leftDepth = findDepth(root.left),
        rightDepth;
        
    if (leftDepth === -1) {
        return -1;
    }
    
    rightDepth = findDepth(root.right);
    
    if (rightDepth === -1) {
        return -1;
    }
    
    if (Math.abs(leftDepth - rightDepth) > 1) {
        return -1;
    }
    
    return Math.max(leftDepth, rightDepth) + 1;
}

// 1/14/2018

var invertTree = function(root) {
    if (root){
        invertTree(root.left)
        invertTree(root.right)
        let temp = root.left
        root.left = root.right
        root.right = temp
    }
    return root
};

// 1/13/2018

var singleNumber = function(nums) {
    if (nums.length === 1) {
        return nums[0]
    } 
    let hold = {}
    for (let i = 0; i < nums.length; i++){
        if (hold[nums[i]]){
            hold[nums[i]]++
        } else {
            hold[nums[i]] = 1
        }
    }
    for (let key in hold){
        if (hold[key] === 1){
            return Number(key)
        }
    }
};
var sortedArrayToBST = function(nums) {
    return generate(nums,0,nums.length);
};

var generate = function(nums, start, end){
    
    if(start === end){
        return null;
    }
    var midIndex = start + Math.floor((end - start)/2);
    var midVal = nums[midIndex];
    
    var node = new TreeNode(midVal);
    node.left = generate(nums, start, midIndex);
    node.right = generate(nums, midIndex+1, end);
    
    return node;
}

//1/11/2018
var climbStairs = function(n) {
    let count = 0
    let sum = 1
    let prev = 0
    while (count < n) {
        let hold = sum
        sum+= prev
        prev = hold
        count++
    }
    return sum
};

var searchInsert = function(nums, target) {
    for ( let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i
        }
        if ( nums[i] > target ){
            return i
        }
    }
    return nums.length
};

//1/10/2018
var hasCycle = function(head) {
    if (!head || !head.next){
        return false
    }
    let slow = head
    let fast = head.next
    while (fast.next){
        if (slow.val === fast.val){
            return true
        }
        slow = slow.next
        if (fast.next.next){
             fast = fast.next.next
        } else {
            return false
        }
       
    }
    return false
};
var isPalindrome = function(head) {
    if ( !head){
        return true
    }
    let results = []
    let temp = head
    while (temp !==null){
        results.push(temp.val)
        temp=temp.next
    }
    let reversed = results.slice().reverse()
    return JSON.stringify(results) === JSON.stringify(reversed)
};

var partition = function(head, x) {
    var p = new ListNode(x-1);
    p.next = head;
    head = p;
    var pre;
    
    while(p !== null && p.val < x){ // since we initialize it with x - 1
        pre = p;
        p = p.next;
    }
    
    if(p !== null){
        var cur = pre;
        while(p !== null){
            if(p.val < x){
                var temp = cur.next;
                pre.next = p.next;
                cur.next = p;
                cur = p;
                p.next = temp;
                p = pre;
            }
            pre = p;
            p = p.next;
        }
    }
    
    temp = head;
    head = head.next;
    
    return head;
};
//1/9/2018
var insertFromEnd = function(linkedList, value, offset) {
  //Your beautiful code here
  let p1 = linkedList
  let p2 = linkedList
  let prev = null
  let length = 0
  let temp = linkedList
  
  while ( temp !== null ) {
    temp = temp.next
    length++
  }
  
  if ( length < offset) {
    return linkedList
  } else
  
  if ( length === offset ) {
    let newHead = Node(value)
    newHead.next = p1
    return newHead
  }
  
  for ( let i = 0; i < offset; i++ ) {
    p1 = p1.next
  }
  
  while (p1 !== null ) {
    p1 = p1.next
    prev = p2
    p2 = p2.next
  }
  
  prev.next = Node(value)
  prev.next.next = p2
  // console.log(linkedList, 'asdf')
  return linkedList
};
// 1/8/2018
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB){
        return null
    }
    if (headA == headB){
        return headA
    }
    let tempA = headA
    let tempALength = 0
    let tempB = headB
    let tempBLength = 0
    
    while(tempA !== null){
        tempA = tempA.next
        tempALength++
    }
    while(tempB !== null){
        tempB = tempB.next
        tempBLength++
    }
    let difference = tempALength >= tempBLength ? tempALength - tempBLength : tempBLength - tempALength
    let longList = tempALength >= tempBLength ? headA : headB
    let shortList = tempALength >= tempBLength ? headB : headA
    for ( let i = 0; i < difference; i++ ) {
        longList = longList.next
    }
    if (longList == shortList){
        return longList
    }
    while (longList !== null) {
        if (longList.next == shortList.next){
            return longList.next
        }
        longList = longList.next
        shortList = shortList.next
    }
    
    return null
};
var removeElements = function(head, val) {
    while(head && head.val == val){
        head = head.next
    }
    
    let temp = head
    let prev = head
    while (temp!==null){
        if (temp.val === val){
            prev.next = temp.next
            temp = prev
        } else {
            prev = temp
            temp = temp.next
        }
    }
    return head
};

var removeNthFromEnd = function(head, n) {
    var n1 = new ListNode();
    var n2 = new ListNode();
    var dummy = n2;
    
    n1.next = head;
    n2.next = head;
    
    while(n > 0 && n1){
        n1 = n1.next;
        n--;
    }
    
    if(n > 0){
        return head;
    }
    
    while(n1 && n1.next){
        n1 = n1.next;
        n2 = n2.next;
    }
    
    n2.next = n2.next.next;
    
    return dummy.next;
};
var deleteDuplicates = function(head) {
    if (head === null || head.next === null){
        return head
    }
    let temp = head
    
    while (temp.next!== null){
      if (temp.val === temp.next.val) {
          temp.next = temp.next.next
      } else {
        temp = temp.next
      }
    }
    return head
};
//1/4/2018
const hyperCube = function(number){
    let max = Math.pow(number, 1/3)
    let hold = []
    for ( let i = 1; i <= max; i++ ) {
        for ( let j = i; j <= max; j++ ) {
            let sum = Math.pow(i,3) + Math.pow(j,3)
            if ( sum === number ) {
                hold.push([i,j])
            }
        }
    }
    console.log(number + ": " + "(" + hold[0][0] + "," + hold[0][1] + "), " + "(" + hold[1][0] + "," + hold[1][1] + ")")
}

//hyperCube(4104)

// 12/30/2017   
var reverseList = function(head) {
    let temp = head
    let l2 = null
    while(temp){
        let current = temp.next
        temp.next = l2
        l2 = temp
        temp = current 
    }
    return l2
};

// 12/21/2017   
var isSymmetric = function(root) {
    if(root == null || (root.right == null && root.left == null) ){
        return true;
    }

    root.right = revertTree(root.right);
    return isSameTree(root.left,root.right);

    function revertTree(node){
        if(node == null || node.left == null && node.right == null){
            return node;
        }
        var temp = revertTree(node.left);
        node.left = revertTree(node.right);
        node.right = temp;
        return node;
    }

    function isSameTree(left,right){
        if(left == null && right== null){
            return true;
        }

        if(left == null && right != null || right == null &&left != null){
            return false;
        }

        if(left.val != right.val){
            return false;
        }

        return isSameTree(left.right, right.right) && isSameTree(left.left, right.left)
    }
};
// 12/18/2017 
const stringRotate = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false
    }

    str1 += str1

    return str1.includes(str2)
}

//console.log(stringRotate('waterbottle', 'erbottlewat'))

const stringCompression = (str) => {
    let temp = {}
    let cont = false
    let newStr = ''
    for ( let i = 0; i < str.length; i++ ) {
        if ( temp[str[i]] ) {
            temp[str[i]]++
            if (temp[str[i]] > 2) {
                cont = true
            }
        } else { 
            temp[str[i]] = 1
        }
    }
    if ( cont ){
        for ( let key in temp ) {
            newStr += key + temp[key]
        }
        return newStr
    } else {
        return str
    }
}

//console.log(stringCompression('abccbb'))

const oneAway = (str1, str2) => {
    let count = 0
    for ( let i = 0; i < str2.length; i++ ){
        if ( str1.includes(str2[i])) {
            count++
        }
    }
    return str1.length - count  === 1
}
//console.log(oneAway('pale', 'bake'))

var isSameTree = function(p, q) {
    let tree1 = []
    let tree2 = []
    
    if (!p && !q){
        return true
    }
    
    if (!p && q || p && !q){
        return false
    } 
    
    const recurse = (tree, arr) => {

        arr.push(tree.val)
       
        if (tree.left){
            recurse(tree.left, arr)
        } else {
            arr.push('null')
        }
        if (tree.right){
            recurse(tree.right, arr)
        } else {
            arr.push('null')
        }
    }
    recurse(p, tree1)
    recurse(q, tree2)
    return JSON.stringify(tree1) === JSON.stringify(tree2)
};

// 12/17/2017

var palinPerm = (str) => {
    str = str.toLowerCase()
    str = str.split("")
    let chars = {};
    let flag = false
    let isPerm = true
    for ( let i = 0; i < str.length ; i++ ) {
        if ( str[i] !== ' '){
            if ( chars[str[i]] ) {
                chars[str[i]]++
            } else {
                chars[str[i]] = 1
            }
        }
    }
    Object.keys(chars).forEach(char => {
        if ( chars[char] % 2 > 0 ) {
            if ( flag ) {
                isPerm = false
            } else {
                flag = true 
            }
        }
    })
    return isPerm
}

//console.log(palinPerm('tacocat'))


var mergeTrees = function(t1, t2) {
    if (!t1 && !t2) {
        return null
    }

    if ( t1 && t2 ) {
        t1.val += t2.val
        t1.left = mergeTrees(t1.left, t2.left)
        t1.right = mergeTrees(t1.right, t2.right)
    }
    
     if ( t1  && !t2) {
        return t1
    }
    
    if ( t2  && !t1) {
        return t2
    }
    
    return t1
};



//12/16/2017
function URLify(str) {
    str = str.trim()
    var outputArr = []
    for (var i=0; i< str.length; i++) {
        if (str[i] === ' ') {
            outputArr.push('%20')
        }
        else outputArr.push(str[i]);
    }
    return outputArr.join('');
}

// console.log(URLify('Mr. Johnson     '))
const isAnagram = (x,y) => {
    if (x.length !== y.length){
        return false
    }

    let check = {}
    for ( let i = 0; i < x.length; i++) {
        if (check[x[i]]){
            check[x[i]]++
        } else {
            check[x[i]] = 1
        }
    }

    for ( let j=0; j < y.length; j++ ){
        if (!check[y[j]]){
            return false
        }
        check[y[j]]--
        if (check[y[j]] < 0){
            return false
        }
    }

    return true
}

//console.log(isAnagram('pool', 'loop'))
const isUnique = (str) =>{
    let check = {}
    for ( let i = 0; i < str.length; i++ ){
        if ( check[str[i]]) {
            return false
        } else {
            check[str[i]] = true
        }
        
    }
    return true
}

// console.log(isUnique('ball'))
var combinationSum = function(candidates, target) {
    let results = [];
    const recurse = (numArr) => {
        
        let sum = numArr.reduce((a,b)=>{
            return a+b
        }, 0)
        if (sum > target){
            return
        } else if (sum === target){
            numArr = numArr.sort()
            let flag = false
            for ( let i = 0; i < results.length; i++){
                if ( String(results[i]) === String(numArr) ) {
                    flag = true
                }
            }
            if (flag === false){
                results.push(numArr)
            } 
        }
        
        for ( let i = 0; i < candidates.length; i++){
            recurse([...numArr, candidates[i]])
        }
    }
    recurse([])
    return results
};

//12/10/2017
function telephoneWords(digitString) {
  var results = [];
  
  function recurse(str) {
    if (str.length === digitString.length) {
      results.push(str);
      return;
    }

    var current = digitString[str.length];
    for (var i = 0; i < keypad[current].length; i++) {
      recurse(str + keypad[current][i]);
    }
  }
  recurse('');
  return results;
}

var keypad = {
  '0': ['0'],
  '1': ['1'],
  '2': ['A', 'B', 'C'],
  '3': ['D', 'E', 'F'],
  '4': ['G', 'H', 'I'],
  '5': ['J', 'K', 'L'],
  '6': ['M', 'N', 'O'],
  '7': ['P', 'Q', 'R', 'S'],
  '8': ['T', 'U', 'V'],
  '9': ['W', 'X', 'Y', 'Z']
};

// console.log(telephoneWords('234'))

//12/9/2017
// rotate matrix clockwise
let matr = [[1,2,3],[4,5,6],[7,8,9]]
const rotateMatrix = (matrix) => {
    matrix = matrix.reverse()
    for ( let x = 0; x < matrix.length; x++){
        for (let y = x + 1; y < matrix.length; y++){
            let temp = matrix[x][y]
            matrix[x][y] = matrix[y][x]
            matrix[y][x] = temp
        }
    }
    return matrix
}

//console.log(rotateMatrix(matr), 'matr')

// 11/29/2017
var twoSum = function(nums, target) {
    if (nums.length === 0){
        return false;
    }
    const hold = {}
    for ( let i = 0; i < nums.length; i++){
        if ( hold.hasOwnProperty(nums[i]) ){
            return [hold[nums[i]], i]
        } else {
            hold[target-nums[i]] = i
        }
    }
};

// 11/28/2017
let strArr = ['pre', 'pref', 'prefix']
var longestCommonPrefix = function(strs) {
    strs = strs.filter(str =>{
        return str.length > 0
    })
    if (strs.length === 0){
        return ""
    } else if ( strs.length === 1){
        return strs[0]
    }else {
        let length = strs.length
        let x = 1
        const shortestWord = findShortest(strs)
        let pre = shortestWord.substring(0,1)
        while (length){ 
            
            if (strs.every(str =>{
                let test = new RegExp(pre)
               if (str.search(test) !== - 1) {
                 return true;
               } else {
                   return false
               }
            })){
                length--
                pre = shortestWord.substring(0,x+=1)
            } else {
                return pre
            }
        }
        return pre;
    }
};

var findShortest = function(array){
    let count = array[0].length;
    let shortest;
    for (let i = 0; i < array.length-1; i++){
        if (array[i].length <= count){
            count = array[i].length
            shortest = array[i]
        }
    }
    return shortest
};

            
// var containsPrefix = function(str){
//     let test = new RegExp(pre, 'i')
//     console.log(test,'test')
//        if (str.search(test) != - 1) {
//          return true;
//        } else {
//            return false
//        }
// }

//console.log(longestCommonPrefix(['a', 'b']), 'here')
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

// console.log(removeDuplicates([1,1,2,2,4,4]))