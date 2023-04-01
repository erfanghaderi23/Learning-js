function colorHandler(e) {
    console.log(e.value)
}


arr = [{Name: "one"}, {Name: "two"},
    {Name: "three"}, {Name: "four"},
]
let options =
    [
        {
            "Name": "erfan",
        }, {
        "Name": "erfan",
    }, {
        "Name": "erfan",
    }, {
        "Name": "erfan",
    },
        {
            "Name": "erfan2",

        },
        {
            "Name": "erfan3",
        }
    ];


function select_name1() {
    console.log(select_name.value)
}

let select_name = document.getElementById('select_name');

for (let i = 0, l = options.length; i < l; i++) {
    let option = options[i];
    select_name.options.add(new Option(option.Name, option.selected));
}


//LEARNING TEST AMIR AZIMI

//STRING REVERSE METHOD(ONE)
const stringReverse = (str) => {
    return str.split('').reverse().join('');
}
console.log(stringReverse('erfan'))

//METHOD(TWO)
const stringReverse2 = (str) => {
    return str.split('').map((val) => {
        return val;
    }).reverse().join('')
}

console.log(stringReverse2('stringMethod'))
//END STRING REVERSE


//INTEGER REVERSE
const integerReverse = (num) => {
    const reversed = num.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(num);
};
console.log('integerReverse', integerReverse(123))
console.log(integerReverse(-321));
//END INTEGER REVERSE


//PALINDROME
function palindrome(str) {
    return str.split('').every((char, index) => {
        return char == str[str.length - index - 1];
    });
}

console.log(palindrome("abba"), 'palindrome');
console.log(palindrome("abcdef"));
//END PALINDROME

//REMOVE_DUPLICATE (METHOD1)
function removeDuplicate(arr) {
    return arr.filter(function (value, index) {
        return arr.indexOf(value) === index;
    });
}

console.log(removeDuplicate([0, 0, 1, 1, 2, 2, 3, 3, 3]))


//REMOVE_DUPLICATE (METHOD2)
function removeDuplicate2(arr) {
    //return new Set(arr); //object
    // return Array.from(new Set(arr)); //ARR method one
    return [...new Set(arr)]; //ARR method two es6
};
console.log(removeDuplicate2([0, 0, 1, 1, 2, 2, 3, 3, 3]), 'removeDuplicate')


//ROTATE ARR (برگرداندن ارایه)
//M(1)
function rotate(arr) {
    return arr.reverse();
}

console.log(rotate([1, 2, 3, 4, 6, 6, 7, 8,]))

//M(2)
function rotate2(arr, k) {
    let tmp, prev;
    for (let i = 0; i < k; i++) {
        prev = arr[arr.length - 1];
        for (let j = 0; j < arr.length; j++) {
            tmp = arr[j];
            arr[j] = prev;
            prev = tmp;
        }
    }
    return arr;
}

console.log(rotate2([1, 2, 3, 4, 5, 6, 7], 3));


//METhOD(1) es6(چک کزدن وپیدا کردن ارایه تکراری)
function containsDuplicate(arr) {
    // return console.log(new Set(arr));
    //return (new Set(arr)).size === arr.length;
    return (new Set(arr)).size !== arr.length;

}

console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 2, 3, 1]));

//METhOD(2)
function containsDuplicate2(arr) {
    let newValue = Object.create(null); // NEWVALUE = {};
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        if (value in newValue) {
            return true;
        }
        newValue[value] = true;
    }
    return false;
}

console.log(containsDuplicate2([1, 2, 3, 4]));
console.log(containsDuplicate2([1, 2, 3, 1]));


//SINGLE NUMBER (برگزداندن المنتی که در ارایه تکراری نیست)
function singleNumber(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result ^= arr[i];
    }
    return result;
}

console.log(singleNumber([1, 1, 2, 2, 4]));
console.log(singleNumber([1, 1, 2, 2, 4, 9]));


//intersect('کلید مشترک بین دو ارایه)
function intersect(num1, num2) {
    return num1.filter(function (value) {
        return num2.includes(value);
    })
}

console.log(intersect([1, 2, 3, 4, 5,], [1, 9, 8, 2]))

//MOVEZEROES(برگرداندن صفر به اخر ارایه)
function movezeroes(arr) {
    let tmp, i;
    for (let i = arr.length; i >= 0; i--) {
        if (arr[i] === 0) {
            tmp = arr.splice(i, 1);
            arr.push(tmp[0])
        }
    }
    return arr;
}

console.log(movezeroes([1, 0, 3, 5, 0, 4, 6]));

//TwO SUM   پیدا کردن ایندکس های آرایه ای که جمع دو المنت آن مساوی هدف هستند
function twoSum(nums, target) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (target === nums[j] + nums[i]) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
}

console.log(twoSum([1, 2, 3, 5], 3));


//FIRSTUNIQCHAR  پیدا کردن اولین حرف یکتا در کلمه
function firstUniqChar(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i], i + 1) === -1) {
            return i;
        }
    }
    return -1;

}

console.log(firstUniqChar("erfan ghaderi"))


//ATOI تبدیل استرینگ به عدد و برگرداندن بزرگترین عدد
function atoi(str) {
    let converted = typeof parseInt(str) === 'NANA' ? 0 : parseInt(str);
    if (converted > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
    } else if (converted < Math.pow(-2, 31)) {
        return Math.pow(-2, 31);
    } else {
        return converted;
    }
}

console.log(atoi('42'));
console.log('-42');
console.log(atoi('4193 with word'));
console.log(atoi('with word 798'));
console.log(atoi('-9125556858845885'));

//LONGESTcOMMONPREFIX  طولانی ترین پیشوند مشترک
function longestCommonprefix(arr) {
    if (arr.length < 1) return '';
    if (arr.length === 1) return arr[0];

    let result = arr [0];

    for (let i = 0; i < arr.length; i++) {
        while (result.length !== 0 && arr[i].indexOf(result) !== 0) {
            result = result.slice(0, -1)
        }
    }
    //ES6
    //     for (let i of arr){
    //         while (result.length !== 0 && i.indexOf(result) !== 0){
    //             result = result.slice(0 , -1)
    //         }
    // }
    return result;
}

console.log(longestCommonprefix(["amir", "amin", "amini"]))


//بیشترین کاراکتر
function maxChar(str) {
    let charMap = {};
    let max = 0;
    let maxChar = '';
    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}

console.log(maxChar('abcccccccccccde'));

//FIZZBUZZ
function fizzBuzz(n) {
    for (let i = 1; i < n; i++) {
        if (i % 3 && i % 5 === 0) {
            console.log('fizzBuzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        }else{
            console.log(i)
        }
    }
}
console.log(fizzBuzz(20))


//chunk بریدن ارایه
function chunk(arr , size) {
    let chunked = [];
    for (const element of arr){
        const lastElement = chunked[chunked.length-1];
        if (!lastElement || lastElement === size){
            chunked.push([element]);
        }else{
           lastElement.push(element);
        }
    }
    return chunked;
}
console.log(chunk([1,2,3,4,5,6,,8,9,7,8,9,5,,5,5,5,,] , 3))