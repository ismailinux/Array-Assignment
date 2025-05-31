// export {};

let firstname: string | number = 'Mike Dean';

let ingredients: (string | number)[] = ['book', 'pen', 23 ];


// An interface in TypeScript is a way to define the shape of an object — that is, what properties and methods it must have. It’s like a contract that tells the TypeScript compiler: "Any object of this type must have these properties, with these types."

interface IUser { //The I here in front of user is  just a convention, like prefixing private variables with _. It doesn’t add or simplify any functionality.
  id: number;
  name: string;
  email?: string; // optional- basically an optional property, wont give an error if not added
}

const user1: IUser = {
  id: 1,
  name: "Alice",
};


class Car {
    name: string;
    color: string;
    brandName: string;

      constructor(name: string, color: string, brandName: string) {
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