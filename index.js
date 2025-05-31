"use strict";
// export {};
let firstname = 'Mike Dean';
let ingredients = ['book', 'pen', 23];
const user1 = {
    id: 1,
    name: "Alice",
};
class Car {
    constructor(name, color, brandName) {
        this.name = name;
        this.color = color;
        this.brandName = brandName;
    }
}
const bmw = new Car('BMW', 'Blue', 'Tacoma');
//This is an alternate way of writing the class above
// class Car {
//   constructor(
//     public name: string,
//     public color: string,
//     public brandName: string
//   ) {}
// }
