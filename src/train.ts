console.log("Hello World!");

/* M-TASK

Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin. MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}]. 
*/

interface SquareResult {
  number: number;
  square: number;
}

function getSquareNumbers(arr: number[]): SquareResult[] {
  return arr.map((num) => ({ number: num, square: num * num }));
}

console.log(getSquareNumbers([3, 6, 10]));

// [number: 3, square: 9}, {number: 6, square: 36}, {number: 10, square: 10]

/* N-TASK

Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin. MASALAN: palindromCheck("dad") return true; palindromCheck("son") return false. */

function palindromCheck(str: string): boolean {
  const reversed: string = str.split("").reverse().join("");
  return str === reversed;
}

console.log(palindromCheck("level")); // true
console.log(palindromCheck("madam")); // true
console.log(palindromCheck("hello")); // false
console.log(palindromCheck("world")); // false
console.log(palindromCheck("noon")); // true

/* Project standards:
 - Logging standards
 - Naming standards
   function, method, variable  => CAMEL          goHome
   class  =>  PASCAL                             MemberService
   folder, file => KEBAB                               
   css =>  SNAKE                                 button_style
    
   -Error handling

   */

/*    Request:
   Traditional API 
   Rest API
   GraphQl API
   ...
   */

/*      Frontend development:
    Traditional FD => BSSR (adminka) => EJS

     Modern FD =>  SPA (user's application) => React / Vue / Angular
/* 
/*  
      Cookies:
     request join
     self destroy
 */
/* 
    VALIDATIONS:
   Fronted validations 
   Pipe validations
   Backend Validations
   Database validations

*/



/*
   O-TASK

Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini 
hisoblab chiqqan javobni qaytarsin. MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45.
*/

function calculateSumOfNumbers(arr: unknown[]): number {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum += arr[i] as number;
    }
  }

  return sum;
}

console.log(calculateSumOfNumbers([39, "39", { son: 39 }, true, 35])); // 74

/* P-TASK

Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin. MASALAN: objectToArray({a: 10, b: 20}) return [["a", 10], ["b", 20]].
*/

function objectToArray(obj: Record<string, number>): [string, number][] {
  return Object.entries(obj);
}

console.log(objectToArray({ a: 35, b: 50, c: 15 })); // [["a", 35], ["b", 50], ["c", 15]]

/* Q-TASK

Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin. MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false.
*/
function hasProperty(obj: Record<string, unknown>, key: string): boolean {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

console.log(hasProperty({ name: "apple", color: "Red" }, "color")); // true
console.log(hasProperty({ name: "apple", color: "Red" }, "price")); // false
console.log(hasProperty({ username: "johny", age: 25 }, "age")); //  true
console.log(hasProperty({ username: "johny", age: 25 }, "email")); // false

/* R-TASK

Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin. MASALAN: calculate("1+3") return 4.
*/

function calculate(str: string): number {
  const [a, b] = str.split("+").map(Number);
  return a + b;
}

console.log(calculate("6+7")); // 13
console.log(calculate("7678+7687")); // 15365

/*
S-TASK

Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar
orasidagi tushib qolgan sonni topib uni return qilsin. MASALAN: missingNumber([3, 0, 1]) return 2.
*/

function missingNumber(arr: number[]): number {
  const n = arr.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

console.log(missingNumber([3, 5, 2, 0, 1])); // 4
console.log(missingNumber([0, 1, 2, 3, 4, 5, 6, 8, 9])); // 7

/*
T-TASK
Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin va ikkala arraydagi sonlarni 
tartiblab bir arrayda qaytarsin. MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]) return [0,3,4,4,6,30,31].
 */

function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

console.log(mergeSortedArrays([5, 10], [1, 7, 12]));        // [1, 5, 7, 10, 12]

/* U-TASK

Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi 
faqat toq sonlar nechtaligini return qilsin. MASALAN: sumOdds(9) return 4; sumOdds(11) return 5.
*/
function sumOdds(num: number): number {
  let count = 0;

  for (let i = 1; i < num; i += 2) {
    count++;
  }

  return count;
}

console.log(sumOdds(10)); // 5
console.log(sumOdds(5));  // 2
console.log(sumOdds(2));  // 1


/* V-TASK

Shunday function yozing, uni string parametri bolsin va stringdagi harf va u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin. MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}.
*/

function countChars(str: string): Record<string, number> {
  const result: Record<string, number> = {};

  for (const char of str) {
    result[char] = (result[char] || 0) + 1;
  }

  return result;
}
console.log(countChars("mississippi")); // { m: 1, i: 4, s: 4, p: 2 }
console.log(countChars("jeonju"));     // { j: 2, e: 1, o: 1, n: 1, u: 1 }


/* W-TASK

Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin. MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]].
*/

function chunkArray<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}
console.log(chunkArray([1, 2, 3, 4, 5], 2));                  // [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
console.log(chunkArray([12, 16, 24, 32], 2));                 // [ [ 12, 16 ], [ 24, 32 ] ]

