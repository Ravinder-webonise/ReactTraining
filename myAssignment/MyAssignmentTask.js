//Question 1
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
    greet: function () {
      return (
        "Hello, my name is " +
        this.fullName() +
        " and I am " +
        this.age +
        " years old."
      );
    },
  };
  
  // What is the full name of the person?
  // Answer :-
  console.log("Person's FullName - " + person.fullName());
  //Output - John Doe
  // Add a new property city with the value 'New York' to the person object.
  // Answer :-
  // we can add new property in two ways
  // Way - 1:
  person.city = "New York";
  console.log("Person's car " + person.city);
  //Output - New York
  
  // Way - 2nd:
  // const person = {
  //     firstName: "John",
  //     lastName: "Doe",
  //     age: 30,
  //     fullName: function () {
  //     return this.firstName + " " + this.lastName;
  //     },
  //     greet: function () {
  //     return (
  //         "Hello, my name is " +
  //         this.fullName() +
  //         " and I am " +
  //         this.age +
  //         " years old."
  //     );
  //     },
  //     city: "New York" //we can add here also this will work also.
  // };
  
  //Write a code snippet to log the updated person object to the console.
  console.log("Person - " + person);
  //output -
  // John Doe
  // {
  //   firstName: 'John',
  //   lastName: 'Doe',
  //   age: 30,
  //   fullName: [Function: fullName],
  //   greet: [Function: greet],
  //   city: 'New York'
  // }
  console.log();
  // Explain the differences between the freeze and seal method of Object.
  //Answer -
  //  In JavaScript, the Object.freeze() and Object.seal() methods are used to
  // control modifications to objects.
  
  //Freeze -
  // Object.freeze() makes an object immutable. Once an object is frozen,
  // you cannot change its properties or add new properties.
  
  //Properties can not be added or removed.
  //Properties cannot be modified
  //Example -
  const cars = {
    name: "ferari",
    price: "1M",
  };
  Object.freeze(cars);
  cars.name = "BMW";
  console.log("Car's name - " + cars.name); // it will still print ferari, we can not change its properties
  cars.owner = "Ravinder";
  console.log("Car's owner - " + cars.owner); // it will give you undefined because we can not add new property either.
  
  //Seal -
  // Object.seal() makes an object non-extensible and prevents properties from being deleted.
  //Properties can not be added or removed.
  //Properties can be modified
  //Example -
  Object.seal(cars);
  cars.name = "BMW";
  console.log("Car's name - " + cars.name); //this will succeed
  cars.owner = "Ravinder";
  console.log("Car's owner - " + cars.owner); // This will fail because we can not add properties
  delete cars.price; //this will fail because we can not delete either
  console.log("cars - " + cars);
  console.log();
  // How can you determine if an object has been sealed or frozen in JavaScript?
  // Provide an example of how you might check this programmatically.
  //Answer -
  //Example -
  const student = {
    studentName: "Ravinder",
    rollNumber: 56,
    class: 10,
  };
  // Initially, the object is neither sealed nor frozen
  console.log("IsSealed - " + Object.isSealed(student)); // false
  console.log("IsFrozen" + Object.isFrozen(student)); // false
  
  Object.seal(student);
  console.log("IsSealed - " + Object.isSealed(student)); // true
  console.log("IsFrozen" + Object.isFrozen(student)); // false (because properties can still be modified)
  
  student.studentName = "Rahul";
  console.log("Student's Name - " + student.studentName); // Rahul
  
  Object.freeze(student);
  console.log("IsSealed - " + Object.isSealed(student)); // true (a frozen object is also sealed)
  console.log("IsFrozen" + Object.isFrozen(student)); // true
  
  // Attempting to modify a property (not allowed on a frozen object)
  student.studentName = "John";
  console.log("Student's Name - " + student.studentName); // will print Rahul because modification is not allowed here.
  
  // Discuss potential use cases for using seal and freeze in JavaScript applications.
  // When might you choose one method over the other
  //Answer -
  // In javascript, Object.seal() and Object.freeze() are methods used to control the mutability of objects.
  // While they both restrict modifications to an object, they have some key differences.
  
  //Use cases for Object.seal()-
  //Preventing addition and removal of properties.
  //Intermediate Immutability - It insures object maintains its fields(name,age,etc)
  // but allowing updates to those fields when user updates their information
  
  //Use cases for Object.freeze() -
  //Insuring complete Immutability - object remains completely unchanged,
  //including its properties and values.
  //Security and integrity - when you need to protect objects from any form of tampering.
  console.log();
  const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    drive: function () {
      return "Driving a " + this.make + " " + this.model;
    },
    setYear: function (newYear) {
      this.year = newYear;
    },
  };
  
  // Change the year of the car to 2022 using the setYear() method.
  // Answer -
  car.setYear(1975);
  console.log("car year - " + car.year);
  
  console.log();
  // Write a code snippet to drive the car using the drive() method.
  // Answer -
  console.log("Drive method called - " + car.drive());
  
  const numbers = [1, 2, 3, 4, 5];
  // Use the slice() method to create a new array containing the elements from index 1 to index 3 (inclusive).
  // Answer -
  const newArray = numbers.slice(1, 4);
  console.log("NewArray After slcing from index 1 to 3 - " + newArray);
  console.log();
  // Use the splice() method to remove the element at index 2 and insert the number 10 in its place.
  // Answer -
  numbers.splice(2, 1, 10);
  console.log(
    "Numbers array after splicing at index 2 and insert the number 10 its place - " +
      numbers
  );
  console.log();
  // How can you find the index of number 4 in numbers array.
  // Answer -
  const index = numbers.indexOf(4);
  console.log("Number at index 4 - " + index);
  console.log();
  // Given that another arr = [6,7,8], How will you add ‘arr’ array elements to numbers array.
  // Answer -
  const arr = [6, 7, 8];
  const combined = numbers.concat(arr); // way-1
  //const combined = [...numbers, ...arr]; // way-2
  //numbers.push(...arr); // way-3
  // arr.forEach(element => {
  //     numbers.push(element);  // way-4
  //   });
  console.log("After adding arr elements to the numbers array - " + combined);
  console.log();
  // How can you find the length of an array?
  const length = numbers.length;
  console.log("length - " + length);
  console.log();
  
  const fruits = ["apple", "banana", "cherry", "date"];
  // Use the splice() method to remove the last two elements from the fruits array.
  fruits.splice(-2, 2);
  console.log("After removing last two elements using splice() - " + fruits);
  console.log();
  
  const obj = {
    name: "john",
    lastname: "doe",
    Age: 30,
    location: "India",
  };
  
  // Print the above object in below format using loop Key name = value of key
  for (const key in obj) {
    console.log(`${key} = ${obj[key]}`);
  }