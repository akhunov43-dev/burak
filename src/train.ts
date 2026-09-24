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