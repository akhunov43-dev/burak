console.log("Hello World!")

/* M-TASK

Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin. MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}]. 
*/

interface SquareResult {
  number: number;
  square: number;
}

function getSquareNumbers(arr: number[]): SquareResult[] {
  return arr.map(num => ({ number: num, square: num * num }));
}

console.log(getSquareNumbers([3, 6, 10]));


// [number: 3, square: 9}, {number: 6, square: 36}, {number: 10, square: 10]


/* N-TASK

Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin. MASALAN: palindromCheck("dad") return true; palindromCheck("son") return false. */

function palindromCheck(str: string): boolean {
  const reversed: string = str.split("").reverse().join("");
  return str === reversed;
}

console.log(palindromCheck("level"));   // true
console.log(palindromCheck("madam"));   // true
console.log(palindromCheck("hello"));   // false
console.log(palindromCheck("world"));   // false
console.log(palindromCheck("noon"));    // true


/* Project standards:
 - Logging standards
 - Naming standards
   function, method, variable  => CAMEL          goHome
   class  =>  PASCAL                             MemberService
   folder, file => KEBAB                               
   css =>  SNAKE                                 button_style
    
   -Error handling

   */

   /*
   Traditional API
   Rest API
   GraphQl API
   ...
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

console.log(calculateSumOfNumbers([39, "39", { son: 39 }, true, 35]));            // 74

/* P-TASK

Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin. MASALAN: objectToArray({a: 10, b: 20}) return [["a", 10], ["b", 20]].
*/

function objectToArray(obj: Record<string, number>): [string, number][] {
  return Object.entries(obj);
}

console.log(objectToArray({ a: 35, b: 50, c: 15})); // [["a", 35], ["b", 50], ["c", 15]]