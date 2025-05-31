"use strict";
// Starting array
let fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
console.log('Original array:', fruits);
// 1. push() - Adds elements to the end of the array
fruits.push('Grape', 'Kiwi');
console.log('After push:', fruits);
// 2. pop() - Removes and returns the last element
let lastFruit = fruits.pop();
console.log('After pop:', fruits, 'Popped:', lastFruit);
// 3. shift() - Removes and returns the first element
let firstFruit = fruits.shift();
console.log('After shift:', fruits, 'Shifted:', firstFruit);
// 4. unshift() - Adds elements to the beginning
fruits.unshift('Cherry', 'Lemon');
console.log('After unshift:', fruits);
// 5. splice() - Adds/removes elements at specific index
fruits.splice(2, 1, 'Strawberry'); // Remove 1 element at index 2, add Strawberry
console.log('After splice:', fruits);
// 6. slice() - Returns a shallow copy of a portion of the array
let slicedFruits = fruits.slice(1, 4);
console.log('Sliced portion:', slicedFruits);
// 7. concat() - Merges arrays
let moreFruits = ['Peach', 'Plum'];
let allFruits = fruits.concat(moreFruits);
console.log('After concat:', allFruits);
// 8. forEach() - Executes a function for each element
fruits.forEach((fruit, index) => {
    console.log(`Index ${index}: ${fruit}`);
});
// 9. map() - Creates a new array with results of calling a function
let fruitLengths = fruits.map(fruit => fruit.length);
console.log('Fruit name lengths:', fruitLengths);
// 10. filter() - Creates a new array with elements that pass a test
let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log('Fruits with name longer than 5:', longFruits);
// 11. find() - Returns the first element that satisfies the condition
let foundFruit = fruits.find(fruit => fruit.startsWith('S'));
console.log('First fruit starting with S:', foundFruit);
// 12. findIndex() - Returns the index of the first element that satisfies the condition
let foundIndex = fruits.findIndex(fruit => fruit.startsWith('S'));
console.log('Index of first fruit starting with S:', foundIndex);
// 13. includes() - Checks if an array contains a specific element
let hasMango = fruits.includes('Mango');
console.log('Contains Mango:', hasMango);
// 14. indexOf() - Returns the first index of a specified element
let mangoIndex = fruits.indexOf('Mango');
console.log('Index of Mango:', mangoIndex);
// 15. lastIndexOf() - Returns the last index of a specified element
fruits.push('Mango'); // Adding another Mango for demonstration
let lastMangoIndex = fruits.lastIndexOf('Mango');
console.log('Last index of Mango:', lastMangoIndex);
// 16. every() - Checks if all elements pass a test
let allLong = fruits.every(fruit => fruit.length > 3);
console.log('All fruits have name longer than 3:', allLong);
// 17. some() - Checks if at least one element passes a test
let someLong = fruits.some(fruit => fruit.length > 6);
console.log('Some fruits have name longer than 6:', someLong);
// 18. reduce() - Reduces array to a single value
let fruitString = fruits.reduce((acc, fruit) => acc + ', ' + fruit);
console.log('Reduced to string:', fruitString);
// 19. reduceRight() - Reduces array from right to left
let fruitStringRight = fruits.reduceRight((acc, fruit) => acc + ', ' + fruit);
console.log('Reduced right to string:', fruitStringRight);
// 20. sort() - Sorts the array
let sortedFruits = [...fruits].sort();
console.log('Sorted array:', sortedFruits);
// 21. reverse() - Reverses the array
let reversedFruits = [...fruits].reverse();
console.log('Reversed array:', reversedFruits);
// 22. join() - Joins all elements into a string
let fruitList = fruits.join(' | ');
console.log('Joined with |:', fruitList);
// 23. toString() - Converts array to string
let fruitStringArray = fruits.toString();
console.log('toString result:', fruitStringArray);
// 24. flat() - Flattens nested arrays
// let nestedFruits: (string | string[])[] = [fruits, ['Guava', 'Papaya']];
// let flatFruits: string[] = nestedFruits.flat();
// console.log('Flattened array:', flatFruits);
// 25. flatMap() - Maps each element and flattens the result
// let fruitPairs: string[] = fruits.flatMap((fruit: string) => [fruit, fruit.toUpperCase()]);
// console.log('FlatMapped with uppercase pairs:', fruitPairs);
// 26. at() - Returns element at specified index (supports negative indices)
// let secondFruit: string | undefined = fruits.at(1);
// let lastFruitAt: string | undefined = fruits.at(-1);
// console.log('Second fruit (at 1):', secondFruit, 'Last fruit (at -1):', lastFruitAt);
