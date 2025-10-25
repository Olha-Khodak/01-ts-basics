function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

let num = getFirstElement<number>([1, 2, 3]); // num: number
let str = getFirstElement<string>(["a", "b", "c"]); // str: string
let bool = getFirstElement<boolean>([true, false, true]); // bool: boolean

//getFirstElement<number>([1, "1", true]);//TypeScript не дозволяє передати масив змішаних типів без відповідного типу.

console.log(num); //1
console.log(str); //a
console.log(bool); //true
