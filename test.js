// input: "this is a TseT"
// output: "siht si a TesT"

function reverseWord(string) {
    let bufferArr = string.split(' ')
    const res = bufferArr.map(element => element.split('').reverse().join(''));
    return res.join(' ')
}

console.log(reverseWord("this is a TseT"))


const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error  
))

const https = require('https');
https.get(url, (res) => {
  let body = '';

  res.on('data', (chunk) => {
    body += chunk;
  });

  res.on('end', () => {
    console.log(JSON.parse(body));
  });
})
.on('error', (error) => {
  console.error(error);
});



const phone = '7885025909';

/**
 * Output should be exactly the following
 * 0, 2
 * 2, 1
 * 5, 2
 * 7, 1
 * 8, 2
 * 9, 2
 */
function printFormat(n) {
  //write your code here to get the above output.
  let numMap = new Map();
  const numArr = n.split('');
  numArr.forEach((ele) => {
    if (!numMap.has(ele)) {
      numMap.set(ele, 1);
    } else {
      numMap.set(ele, numMap.get(ele) + 1);
    }
  });
  return numMap;
}
const main2 = (() => {
  let res = printFormat(phone);
  for (let ele of res) {
    console.log(ele, res.get(ele));
  }
  return 0;
})();


/**
 * Have the function SeatingStudents(noOfDesks, arrOccupiedDesks) read the input arguments where noOfDesks represents the number of desks in a classroom, and the argument occupiedDesks, will be a sorted array of the desks that are already occupied.
 *
 * All of the desks will be arranged in 2 columns, where desk #1 is at the top left, desk #2 is at the top right, desk #3 is below #1, desk #4 is below #2, etc.
 *
 * Your program should return the number of ways 2 students can be seated next to each other. This means 1 student is on the left and 1 student on the right, or 1 student is directly above or below the other student. Desks 1,3 are adjacent but 2,3 are not adjacent.
 *
 * Testcase 1:
 * Input: 12, [2, 6, 7, 11]
 * Output: 6
 *
 * Explanation:
 * Seating arrangement picture.
 * https://i.imgur.com/rvP5cjj.jpeg
 *
 * The possible adjacent arrangements from the above picture are
 * - 1,3
 * - 3,4
 * - 3,5
 * - 8,10
 * - 9,10
 * - 10,12
 * Hence the answer 6.
 */
exports.SeatingStudents = function (noOfDesks, occupiedDesks) {
  const occupiedSeats = new Set(occupiedDesks);
  const pairs = [];
  // let count = 0;
  for (let i = 1; i <= noOfDesks; i++) {
    if (occupiedSeats.has(i)) continue;
    if (i % 2 === 1 && !occupiedSeats.has(i + 1)) {
      pairs.push([i, i + 1]);
      // count++;
    }
    if (i + 2 <= noOfDesks && !occupiedSeats.has(i + 2)) {
      pairs.push([i, i + 2]);
      // count++;
    }
  }
  return {
    totalPairs: pairs.length,
    pairs,
  };
};

console.log(this.SeatingStudents(12, [2, 6, 7, 11]));
// console.log(this.SeatingStudents(12, [2, 3, 6, 7, 10, 11]));


// Example 1:
// const prices = [7,1,5,3,6,4];
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.

function maxProfit(prices) {
  let total = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      total += prices[i] - prices[i - 1];
    }
  }
  return total;
}

// Example 1:
// const strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Explanation:
// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

// Example 2:
// const strs = [""]
// Output: [[""]]

// Example 3:
// const strs = ["a"]
// Output: [["a"]]

function groupAnagrams(strs) {
  const map = new Map();
  for(let str of strs) {
    const key = str.split('').sort().join('');
    if(!map.has(key))
      map.set(key, [])
    map.get(key).push(str);
  }
  return Array.from(map.values())
}

function dutchFlag(arr = [0,1,2,0,2,2,1,1,0]) {
  console.log('Before sorting ---->',arr)
  let l = 0, h = arr.length-1, m = 0
  while(m <= h){
    if(arr[m] === 0) {
      [arr[l], arr[m]] = [arr[m], arr[l]]
      l++, m++
    } else if(arr[m] === 1){
      m++
    } else {
      [arr[m], arr[h]] = [arr[h], arr[m]]
      h--
    }
  }
  console.log('After sorting ---->',arr)
}

const main = (() => {
  // driver function
  console.log(dutchFlag());
})();



