// ## **Quick Question #1**

// What does the following code return?
// new Set([1,1,2,2,3,4])
// // a set with the following values: {1,2,3,4}

// ## **Quick Question #2**

// What does the following code return?
// [...new Set("referee")].join("")
// // the following string: 'refr'

// ## **Quick Questions #3**

// What does the Map ***m*** look like after running the following code?
// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

// 
//   0: arr(3)=> true
//   1: arr(3)=> false

function hasDuplicate(arr){ 
    if (new set(arr).size!==arr.length){
        return true
    }
    else false 
}

function vowelCount(str){

    const vowels = 'aeiou'
    const map = new Map();
    const lStr = str.toLowerCase()
    for(let letter of lStr){
        if (vowels.includes(letter)){
            if (!map.has(letter)){
                map.set(letter,1)
            }else {
                map.set(letter,map.get(letter)+ 1 );
            }
        }
    }
    return map
}