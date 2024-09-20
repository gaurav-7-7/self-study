
const fib = (n, x) => {
    let s = [0, 1]
    for(let i = 2; i < n; i++){
        s[i] = s[i-1] + s[i-2]
    }
    return [s, s[x-1]]
}

const fact = (n) => {
    let s = 1;
    if(n <= 1)
        return s;
    for(let i = 2; i <= n; i++){
        s *= i
    }
    return s;
}

const prime = (n) => {
    if(n < 2) {
        return false;
    }
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n%i === 0)
            return false;
    }
    return true
}

const fibRecur = (n) => {
    if(n < 2)
        return n
    return fibRecur(n-1) + fibRecur(n-2)
}

const factRecur = (n) => {
    if(n === 0)
        return 1
    return n * factRecur(n-1)
}

const linearSearch = (n, k) => {
    for(let i = 0; i < n.length; i++){
        if(n[i] === k)
            return i
    }
    return -1
}

const binarySearch = (n, k) => {
    n.sort((a,b) => a - b)
    let l = 0
    let h = n.length - 1
    while(l <= h) {
        let mid = Math.floor((l + h)/2)
        if(n[mid] === k)
            return mid
        if(k > n[mid])
            l = mid + 1
        else 
            h = mid - 1
    }
    return -1
}

const binarySearchRecur = (n, k, l, h) => {
    if(l > h)
        return -1
    let mid = Math.floor((l + h) / 2)
    if (n[mid] === k)
        return mid
    if (k > n[mid])
        return binarySearchRecur(n, k, mid + 1, h)
    else
        return binarySearchRecur(n, k, l, mid - 1)
}

const bubbleSort = (n) => {
    let swapped
    do {
        swapped = false
        for(let i = 0; i < n.length-1;i++) {
            if(n[i]>n[i+1]) {
                let temp = n[i];
                n[i] = n[i+1]
                n[i+1] = temp
                swapped = true
            }
        }
    } while (swapped);
}

const insertionSort = (n) => {
    for(let i=1;i < n.length;i++){
        let k = n[i]
        let j = i - 1
        while(j >= 0 && n[j] > k) {
            n[j+1] = n[j]
            j -= 1
        }
        n[j+1] = k
    }
}

const quickSort = (n) => {
    if(n.length <= 1)
        return n

    const p = n[n.length - 1]
    const l = []
    const r = []

    for(let i = 0; i < n.length - 1;i++){
        if(n[i] < p) 
            l.push(n[i])
        else 
            r.push(n[i])
    }

    return [...quickSort(l), p, ...quickSort(r)]
} 

const mergeSort = (n) => {
    if(n.length < 2)
        return n
    const mid = Math.floor(n.length/2)
    const l = n.slice(0, mid)
    const r = n.slice(mid)
    // recursive spliting the array into single element array and then merging them into one upon comparision
    return merge(mergeSort(l), mergeSort(r))
}

const merge = (l, r) => {
    // this merge fucntion will merge each single split element into s[]
    const s = []
    while(l.length && r.length) {
        if(l[0] <= r[0])
            s.push(l.shift()) //take out the individual element of the split array using shift
        else
            s.push(r.shift())
    }
    return [...s, ...l, ...r]
}

var intersection = function(nums1, nums2) {
    let s = new Set(nums1);
    let intersect = new Set();
    for (let j of nums2){
        if(s.has(j))
            intersect.add(j)
    }
    let res = []
    let index = 0;
    for(let k of intersect)
        res[index++] = k
    return res
}

var lengthOfLongestSubstring = function(s) {
    let i=0,j=0,max = 0
    let set = new Set()
    while(j < s.length) {
        if(!set.has(s.charAt(j))) {
            set.add(s.charAt(j))
            j++
            max = Math.max(max, set.size)
        } else {
            set.delete(s.charAt(j))
            i++
        }
    }
    return max
};

const main = (() => {
    const arr = [42, 7, 85, 29, 63, 23]
    const arr2 = [12, 54, 63, 85, 182, 232]
    let num1 = [1,2,2,1]
    let nums2 = [2,2]
    console.log(lengthOfLongestSubstring("pwwkew"));
})()

var array = function() {
    let arr = [42, 7, 85, 29, 63, 23]
}

