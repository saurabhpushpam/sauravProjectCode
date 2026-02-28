// ===== Array Concepts Masterclass =====

// 1. Array Creation
const arr1 = [1, 2, 3];
const arr2 = new Array(4, 5, 6);
const arr3 = Array.from("hello"); // ['h', 'e', 'l', 'l', 'o']

// 2. Basic Methods
arr1.push(4);       // [1, 2, 3, 4]
arr1.pop();         // [1, 2, 3]
arr1.shift();       // [2, 3]
arr1.unshift(0);    // [0, 2, 3]
const sliced = arr1.slice(1, 3); // [2, 3]
const combined = arr1.concat([7, 8]); // [0, 2, 3, 7, 8]

// 3. Searching & Checking
const includes = arr1.includes(2); // true
const index = arr1.indexOf(3);     // 2
const found = arr1.find(x => x > 1); // 2
const foundIndex = arr1.findIndex(x => x === 2); // 1

// 4. Iteration
for (let i = 0; i < arr1.length; i++) {
    console.log(`For Loop: ${arr1[i]}`);
}

for (const value of arr1) {
    console.log(`For..of Loop: ${value}`);
}

arr1.forEach((val, idx) => {
    console.log(`forEach at ${idx}: ${val}`);
});

// 5. Transformations
const squared = arr1.map(x => x * x); // [0, 4, 9]
const evens = arr1.filter(x => x % 2 === 0); // [0, 2]
const sum = arr1.reduce((acc, curr) => acc + curr, 0); // 5

// 6. Sorting
const nums = [5, 1, 20, 3];
nums.sort((a, b) => a - b); // Ascending
nums.reverse();             // Descending

// 7. Splice (Mutation)
const animals = ['dog', 'cat', 'rabbit'];
animals.splice(1, 1, 'tiger'); // ['dog', 'tiger', 'rabbit']

// 8. Destructuring
const [first, second, ...rest] = nums; // first=20, second=5, rest=[3,1]

// 9. Spread & Rest
const spreadArr = [...arr1, ...arr2]; // Combine arrays
function logAll(...args) {
    console.log(args); // Rest as array
}
logAll(1, 2, 3);

// 10. Flat and FlatMap
const nested = [1, [2, [3, 4]]];
const flat1 = nested.flat();       // [1, 2, [3, 4]]
const flat2 = nested.flat(2);      // [1, 2, 3, 4]

const flatMapped = [1, 2, 3].flatMap(x => [x, x * 2]); // [1,2,2,4,3,6]

// 11. Deep Copy vs Shallow Copy
const shallow = [...arr1]; // OK for shallow arrays
const deepNested = JSON.parse(JSON.stringify(nested)); // Deep copy

// 12. Set & Array
const duplicates = [1, 2, 2, 3, 3, 3];
const unique = [...new Set(duplicates)]; // [1, 2, 3]

// 13. Array of Objects
const users = [
    { name: 'Alice', age: 28 },
    { name: 'Bob', age: 34 },
    { name: 'Charlie', age: 22 },
];

// Filter users > 25
const above25 = users.filter(u => u.age > 25);

// Sort users by age
const sortedUsers = [...users].sort((a, b) => a.age - b.age);

// Grouping by age
const groupedByAge = users.reduce((acc, user) => {
    const key = user.age;
    acc[key] = acc[key] || [];
    acc[key].push(user);
    return acc;
}, {});

// 14. Check All / Some
const allAdults = users.every(u => u.age >= 18); // true
const hasTeen = users.some(u => u.age < 20);     // false

// 15. Dynamic Filtering
function filterByKey(arr, key, value) {
    return arr.filter(item => item[key] === value);
}
const bobs = filterByKey(users, 'name', 'Bob');

// 16. Using Map with Arrays
const map = new Map();
map.set('a', [1, 2]);
map.get('a').push(3); // ['a' => [1, 2, 3]]

// 17. Multi-dimensional Arrays
const matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];
const flattened = matrix.reduce((acc, row) => acc.concat(row), []); // [1,2,3,4,5,6]

// 18. Custom Chunk Function
function chunkArray(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}
const chunks = chunkArray([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]

// 19. Remove Falsy Values
const mixed = [0, "hello", false, null, 42, undefined, ""];
const truthy = mixed.filter(Boolean); // ["hello", 42]

// 20. Intersection, Union, Difference
const a1 = [1, 2, 3];
const a2 = [2, 3, 4];

const intersection = a1.filter(x => a2.includes(x)); // [2, 3]
const union = [...new Set([...a1, ...a2])];         // [1, 2, 3, 4]
const difference = a1.filter(x => !a2.includes(x));  // [1]

// 21. Randomizing Array
const shuffled = [...a1].sort(() => Math.random() - 0.5);

// 22. Using reduceRight
const reversedConcat = ['a', 'b', 'c'].reduceRight((acc, val) => acc + val, ""); // "cba"

// 23. Fill and CopyWithin
const filled = new Array(5).fill(0); // [0, 0, 0, 0, 0]
const copied = [1, 2, 3, 4, 5].copyWithin(0, 3); // [4, 5, 3, 4, 5]

console.log("=== Complete Array Handling Done ===");
