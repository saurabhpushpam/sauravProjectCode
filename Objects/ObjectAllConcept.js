"use strict";

/* =====================================================
   1️⃣ OBJECT CREATION (ALL WAYS)
===================================================== */

// Object Literal
const objLiteral = {
  name: "Saurav",
  age: 25
};

// Object Constructor
const objConstructor = new Object();
objConstructor.city = "Delhi";

// Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person("Amit", 30);

// Object.create (Prototype linking)
const baseRole = { role: "Admin" };
const userFromCreate = Object.create(baseRole);
userFromCreate.name = "Neel";

/* =====================================================
   2️⃣ PROPERTY ACCESS
===================================================== */
console.log(objLiteral.name);
console.log(objLiteral["age"]);

const dynamicKey = "city";
console.log(objConstructor[dynamicKey]);

/* =====================================================
   3️⃣ ADD / UPDATE / DELETE
===================================================== */
objLiteral.email = "test@gmail.com";
objLiteral.age = 26;
delete objLiteral.email;



/* =====================================================
   Check property exist 
===================================================== */
console.log("check property exist using in : ", "age" in objLiteral);
console.log("check property exist using hasOwnProperty() :", objLiteral.hasOwnProperty("age"));
console.log("check property exist using hasOwnProperty() :", objLiteral.hasOwnProperty("email"));

/* =====================================================
   4️⃣ METHODS & `this`
===================================================== */
const employee = {
  name: "Ravi",
  salary: 50000,
  bonus() {
    return this.salary * 0.1;
  }
};
console.log(employee.bonus());

/* =====================================================
   5️⃣ NESTED OBJECT
===================================================== */
const company = {
  name: "TechCorp",
  address: {
    city: "Mumbai",
    pin: 400001
  }
};
console.log(company.address.city);

/* =====================================================
   6️⃣ DESTRUCTURING
===================================================== */
const { name, age } = objLiteral;
console.log(name, age);

/* =====================================================
   7️⃣ SPREAD OPERATOR
===================================================== */
const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
console.log(merged);

/* =====================================================
   8️⃣ BUILT-IN OBJECT METHODS
===================================================== */
const sample = { p: 10, q: 20 };

console.log(Object.keys(sample));
console.log(Object.values(sample));
console.log(Object.entries(sample));
console.log(Object.hasOwn(sample, "p"));

/* =====================================================
   9️⃣ LOOPING OBJECT
===================================================== */
for (let key in sample) {
  console.log(key, sample[key]);
}

Object.entries(sample).forEach(([k, v]) => {
  console.log(k, v);
});

/* =====================================================
   🔟 SHALLOW vs DEEP COPY
===================================================== */
const original = {
  name: "User",
  address: { city: "Delhi" }
};

// Shallow
const shallowCopy = { ...original };

// Deep
const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.address.city = "Mumbai";
console.log(original.address.city); // Delhi

/* =====================================================
   1️⃣1️⃣ FREEZE / SEAL
===================================================== */
const immutable = { a: 1 };
Object.freeze(immutable);
// immutable.a = 2; ❌

const semiImmutable = { b: 2 };
Object.seal(semiImmutable);
semiImmutable.b = 3;

/* =====================================================
   1️⃣2️⃣ GETTER & SETTER
===================================================== */
const bankAccount = {
  _balance: 1000,
  get balance() {
    return this._balance;
  },
  set balance(val) {
    if (val > 0) this._balance = val;
  }
};
bankAccount.balance = 2000;
console.log(bankAccount.balance);

/* =====================================================
   1️⃣3️⃣ PROTOTYPE INHERITANCE
===================================================== */
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  return `${this.name} makes sound`;
};

const dog = new Animal("Dog");
console.log(dog.speak());

/* =====================================================
   1️⃣4️⃣ ES6 CLASS (OBJECT OOP)
===================================================== */
class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello ${this.name}`;
  }
}

class Admin extends User {
  access() {
    return "All Access Granted";
  }
}

const admin = new Admin("Saurav");
console.log(admin.greet(), admin.access());

/* =====================================================
   1️⃣5️⃣ STATIC METHOD
===================================================== */
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}
console.log(MathUtil.add(5, 10));

/* =====================================================
   1️⃣6️⃣ OBJECT COMPARISON
===================================================== */
const o1 = { x: 1 };
const o2 = { x: 1 };
console.log(o1 === o2); // false

/* =====================================================
   1️⃣7️⃣ OPTIONAL CHAINING
===================================================== */
const apiData = {
  user: {
    profile: {
      name: "Saurav"
    }
  }
};
console.log(apiData?.user?.profile?.name);
console.log(apiData?.user?.address?.city);

/* =====================================================
   1️⃣8️⃣ NULLISH COALESCING
===================================================== */
const marks = null;
console.log(marks ?? 0);

/* =====================================================
   1️⃣9️⃣ FACTORY FUNCTION
===================================================== */
function createCar(brand, price) {
  return {
    brand,
    price,
    info() {
      return `${brand} costs ${price}`;
    }
  };
}
const car1 = createCar("Tata", 800000);
console.log(car1.info());

/* =====================================================
   2️⃣0️⃣ SINGLETON PATTERN
===================================================== */
const Singleton = (function () {
  let instance;
  function createInstance() {
    return { time: new Date() };
  }
  return {
    getInstance() {
      if (!instance) instance = createInstance();
      return instance;
    }
  };
})();
console.log(Singleton.getInstance());

/* =====================================================
   2️⃣1️⃣ OBJECT + ARRAY COMBINATION (REAL API TYPE)
===================================================== */
const response = {
  status: 200,
  data: {
    users: [
      { id: 1, name: "A" },
      { id: 2, name: "B" }
    ]
  }
};

response.data.users.forEach(u => console.log(u.name));

/* =====================================================
   2️⃣2️⃣ OBJECT PROPERTY DESCRIPTORS
===================================================== */
const secureObj = {};
Object.defineProperty(secureObj, "id", {
  value: 101,
  writable: false,
  enumerable: true
});
console.log(secureObj.id);

/* =====================================================
   2️⃣3️⃣ OBJECT TO JSON / JSON TO OBJECT
===================================================== */
const jsonStr = JSON.stringify(objLiteral);
const parsedObj = JSON.parse(jsonStr);
console.log(parsedObj);

/* =====================================================
   ✅ END OF ALL OBJECT CONCEPTS
===================================================== */
