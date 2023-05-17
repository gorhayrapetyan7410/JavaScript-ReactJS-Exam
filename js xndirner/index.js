// • JavaScript Exercises
// 1. Գրել ֆունկցիա, որը կվերադարձնի true եթե տրված արժեքը սիմետրիկ է, հակառակ դեպքում կվերադարձնի false: Խնդիրը գրել երկու տարբեր եղանակներով, առաջին եղանակում առանց մեթոդների բացառությամբ length մեթոդի և երկրորդ եղանակում միայն մեթոդներով։

// let str = "qaxaq"
// let newStr = "asa"

// function theSimetric() {

//     for (let i = 0; i < str.length; i++) {
//         if (str === newStr) {
//             str = true
//         } else {
//             str = false
//         }
//         if(str){
//             console.log(`${str} is simetric`);
//         } else {
//             console.log(`${str} is not simetric`);
//         }
        
//     }
// }
// console.log(theSimetric(str));


// function isSimetric() {

//     let str = "aba"
//     let newStr = "aba"

//     str.forEach(value){
//         if (str === newStr) {
//             str = true
//         } else {
//             str = false
//         }
//     }
//     if (str) {
//         console.log(`${str} is simetric`);
//     } else {
//         console.log(`${str} is not simetric`);
//     }
//     return str
// }
// console.log(isSimetric());

// 2. Գրել ռեկուրսիվ ֆունկցիա որը կստանա թվերի զանգված և կվերադարձնի նոր զանգված, որի մեջ կլինեն տրված զանգվածից զույգերը։

// let arr = [3,25,7,4,12,45,27]
// let newArr = []

// function rec(i){
//     if (i<0){
//         return []
//     }
//     if(arr[i] % 2 === 0){
//         newArr.push(arr[i])
//     }
//     return rec(i - 1)
// }
// rec(arr.length)
// console.log(newArr);

// 3. Ունենք տեքստ որի մեջ կան բաց թողնված բառեր որոնց փոխարեն դրված է "_" նշանը և ունեն զանգված որի մեջ կան բառեր։ Գրել ֆունկցիա որը կստանա հետևյալ փոփոխականները որպես արգումենտ և կվերադարձնի տեքստի վերջնական արդյունքը։
// Փոփոխականները`
// let words = ["first", "succeed", "again"];
// let sentence = "If at _ you don’t _, try, try _.";

// function arr(sentence, words) {
//     for (let i = 0; i < words.length; i++) {
//         for (let j = 0; j < sentence.length; j++) {
//             if(sentence[j] === "_"){
//                 sentence = sentence.replace("_", words[i])
//                 break
//             }
//         }
//     }
//     return sentence
// }
// console.log(arr(sentence, words));

// 4. Ունենք հետևյալ բազմաչափ զանգվածը` [4, -2, 3, 9, 2, 6, -8, 12]։ Գրել ֆունկցիա, որը տրված զանգվածից կհեռացնի բացասականները և կսորտավորի դրականները։ Վերադարցնել սորտավորված զանգվածը և այն տարրերը, որոնք հեռացվել են զանգվածից։ Պատասխան՝
// Sorted array: [2,3,4,6,9,12]
// Removed numbers: [-2,-8]

// let arr = [4, -2, 3, 9, 2, 6, -8, 12]
// let removed = []

// function Sorted(arr){
    // for (let i = 1; i < arr.length; i++) {
    //   for (let j = 0; j < arr.length; j++) {
    //     if (arr[i] < arr[j]) {
    //         [arr[j], arr[i]] = [arr[i],arr[j]] 
    //     }
    //   }
    // }
   
//     return arr
// } 
// console.log(Sorted(arr));

// 5․ Ունենք հետևյալ զանգվածը՝ [6, 9, -5, 12, 3, -1, 6, 9, -2, 64, 15, -3, 36]; Գրել class, որը կունենա arr պարամետր, կունենա getRoots մեթոդ, որը կվերադարձնի նոր զանգված, որի մեջ կլինեն այն թվերը, որոնք ունեն արմատ, կունենա arithmeticAverage մեթոդ, որը կվերադարձնի զանգվածի միջին թվաբանականը, կունենա ascendingSortExceptNegitves մեթոդ, որը կվերադարձնի նույն զանգվածը սորտավորված ըստ աճման կարգի, բայց բացասականները պետք է մնան նույն ինդեքսում։

let arr = [6, 9, -5, 12, 3, -1, 6, 9, -2, 64, 15, -3, 36]

     function ascendingSortExceptNegitves(arr){
    function Sorted(arr){

    for (let i = 1; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] < 0) {
            continue
        } else {
        if (arr[i] > arr[j]) {
            [arr[j], arr[i]] = [arr[i],arr[j]] 
        }
       }
      }
    }
}
        return arr
    }
     console.log(ascendingSortExceptNegitves(arr))


 
    // function arithmeticAverage(arr){
    //     let sum = 0
    //     for (let i = 0; i < arr.length; i++) {
    //      sum += arr[i]
    //     }
    //     return sum / arr.length
    // }
    // console.log(arithmeticAverage(arr))



//     let newArr = []
    
//     function getRoots(arr, newArr){
//         for (let i = 0; i < arr.length; i++) {
//             if(arr[i] ** 0.5 % 1 === 0){
//                 newArr.push(arr[i])
//             }
//         }
//         console.log(newArr)
//     }
// console.log(getRoots(newArr));

// 6. Գրել ֆունկցիա, որը որպես պարամետրեր կստանա k բնական թիվ և divisor, ֆունկցիան պետք է վերադարձնի k-ից մեծ ամենամոտ թիվը, որը բազմապատիկ է divisor-ին:
