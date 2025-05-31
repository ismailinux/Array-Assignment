"use strict";
class ArrayDemo {
    constructor() {
        this.fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
        console.log('Original array:', this.fruits);
    }
    // 1. Demonstrates push() - Adds elements to the end
    pushItems(...items) {
        this.fruits.push(...items);
        console.log('After push:', this.fruits);
    }
    // 2. Demonstrates pop() - Removes and returns last element
    popItem() {
        const lastFruit = this.fruits.pop();
        console.log('After pop:', this.fruits, 'Popped:', lastFruit);
        return lastFruit;
    }
    // 3. Demonstrates shift() - Removes and returns first element
    shiftItem() {
        const firstFruit = this.fruits.shift();
        console.log('After shift:', this.fruits, 'Shifted:', firstFruit);
        return firstFruit;
    }
    // 4. Demonstrates unshift() - Adds elements to the beginning
    unshiftItems(...items) {
        this.fruits.unshift(...items);
        console.log('After unshift:', this.fruits);
    }
    // 5. Demonstrates splice() - Adds/removes elements at index
    spliceItems(start, deleteCount, ...items) {
        this.fruits.splice(start, deleteCount, ...items);
        console.log('After splice:', this.fruits);
    }
    // 6. Demonstrates slice() - Returns portion of array
    sliceItems(start, end) {
        const sliced = this.fruits.slice(start, end);
        console.log('Sliced portion:', sliced);
        return sliced;
    }
    // 7. Demonstrates concat() - Merges arrays
    concatItems(otherArray) {
        const combined = this.fruits.concat(otherArray);
        console.log('After concat:', combined);
        return combined;
    }
    // 8. Demonstrates forEach() - Executes function for each element
    forEachItem() {
        this.fruits.forEach((fruit, index) => {
            console.log(`Index ${index}: ${fruit}`);
        });
    }
    // 9. Demonstrates map() - Creates new array with transformed elements
    mapLengths() {
        const lengths = this.fruits.map(fruit => fruit.length);
        console.log('Fruit name lengths:', lengths);
        return lengths;
    }
    // 10. Demonstrates filter() - Filters elements by condition
    filterLongNames(minLength) {
        const longFruits = this.fruits.filter(fruit => fruit.length > minLength);
        console.log(`Fruits with name longer than ${minLength}:`, longFruits);
        return longFruits;
    }
    // 11. Demonstrates find() - Finds first element by condition
    findStartingWith(letter) {
        const found = this.fruits.find(fruit => fruit.startsWith(letter));
        console.log(`First fruit starting with ${letter}:`, found);
        return found;
    }
    // 12. Demonstrates findIndex() - Finds index of first element by condition
    findIndexStartingWith(letter) {
        const index = this.fruits.findIndex(fruit => fruit.startsWith(letter));
        console.log(`Index of first fruit starting with ${letter}:`, index);
        return index;
    }
    // 13. Demonstrates includes() - Checks if array contains element
    includesItem(item) {
        const hasItem = this.fruits.includes(item);
        console.log(`Contains ${item}:`, hasItem);
        return hasItem;
    }
    // 14. Demonstrates indexOf() - Finds first index of element
    indexOfItem(item) {
        const index = this.fruits.indexOf(item);
        console.log(`Index of ${item}:`, index);
        return index;
    }
    // 15. Demonstrates lastIndexOf() - Finds last index of element
    lastIndexOfItem(item) {
        const lastIndex = this.fruits.lastIndexOf(item);
        console.log(`Last index of ${item}:`, lastIndex);
        return lastIndex;
    }
    // 16. Demonstrates every() - Checks if all elements pass condition
    everyLengthGreaterThan(minLength) {
        const allLong = this.fruits.every(fruit => fruit.length > minLength);
        console.log(`All fruits have name longer than ${minLength}:`, allLong);
        return allLong;
    }
    // 17. Demonstrates some() - Checks if any element passes condition
    someLengthGreaterThan(minLength) {
        const someLong = this.fruits.some(fruit => fruit.length > minLength);
        console.log(`Some fruits have name longer than ${minLength}:`, someLong);
        return someLong;
    }
    // 18. Demonstrates reduce() - Reduces array to single value
    reduceToString() {
        const result = this.fruits.reduce((acc, fruit) => acc + ', ' + fruit);
        console.log('Reduced to string:', result);
        return result;
    }
    // 19. Demonstrates reduceRight() - Reduces array from right
    reduceRightToString() {
        const result = this.fruits.reduceRight((acc, fruit) => acc + ', ' + fruit);
        console.log('Reduced right to string:', result);
        return result;
    }
    // 20. Demonstrates sort() - Sorts array
    sortItems() {
        const sorted = [...this.fruits].sort();
        console.log('Sorted array:', sorted);
        return sorted;
    }
    // 21. Demonstrates reverse() - Reverses array
    reverseItems() {
        const reversed = [...this.fruits].reverse();
        console.log('Reversed array:', reversed);
        return reversed;
    }
    // 22. Demonstrates join() - Joins elements into string
    joinItems(separator) {
        const joined = this.fruits.join(separator);
        console.log(`Joined with ${separator}:`, joined);
        return joined;
    }
    // 23. Demonstrates toString() - Converts array to string
    toStringItems() {
        const result = this.fruits.toString();
        console.log('toString result:', result);
        return result;
    }
}
// Demonstration of the class
const demo = new ArrayDemo();
demo.pushItems('Grape', 'Kiwi');
demo.popItem();
demo.shiftItem();
demo.unshiftItems('Cherry', 'Lemon');
demo.spliceItems(2, 1, 'Strawberry');
demo.sliceItems(1, 4);
demo.concatItems(['Peach', 'Plum']);
demo.forEachItem();
demo.mapLengths();
demo.filterLongNames(5);
demo.findStartingWith('S');
demo.findIndexStartingWith('S');
demo.includesItem('Mango');
demo.indexOfItem('Mango');
demo.pushItems('Mango'); // Add duplicate for lastIndexOf demo
demo.lastIndexOfItem('Mango');
demo.everyLengthGreaterThan(3);
demo.someLengthGreaterThan(6);
demo.reduceToString();
demo.reduceRightToString();
demo.sortItems();
demo.reverseItems();
demo.joinItems(' | ');
demo.toStringItems();
// demo.flatItems([demo.fruits, ['Guava', 'Papaya']]);
// demo.flatMapToPairs();
// demo.atIndex(1);
// demo.atIndex(-1);
