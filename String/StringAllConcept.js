// ===== String Concepts Masterclass =====

// 1. String Creation
const str1 = "Hello";
const str2 = 'World';
const str3 = `Template`;
const str4 = new String("Boxed"); // Avoid this

// 2. String Immutability
let immutable = "Test";
immutable[0] = "R"; // Won't change
console.log(immutable); // "Test"

// 3. Length & Access
console.log(str1.length);       // 5
console.log(str1.charAt(1));    // 'e'
console.log(str1[1]);           // 'e'
console.log(str1.at(-1));       // 'o' (ES2022+)

// 4. String Concatenation
const combined = str1 + " " + str2;
const combined2 = `${str1}, ${str2}!`; // Template literal

// 5. Escape Characters
const escaped = 'It\'s a pen.\nNew line\tTabbed';

// 6. Case Conversion
const mixed = "hElLo WoRlD";
console.log(mixed.toUpperCase()); // HELLO WORLD
console.log(mixed.toLowerCase()); // hello world

// 7. Searching & Matching
console.log(str1.indexOf("l"));       // 2
console.log(str1.lastIndexOf("l"));   // 3
console.log(str1.includes("ell"));    // true
console.log(str1.startsWith("He"));   // true
console.log(str1.endsWith("lo"));     // true
console.log(str1.search(/e/));        // 1
console.log(str1.match(/l/g));        // ['l', 'l']

// 8. Extracting Substrings
console.log(str1.slice(1, 4));        // 'ell'
console.log(str1.substring(1, 4));    // 'ell'
console.log(str1.substr(1, 3));       // 'ell' (deprecated)

// 9. Replace & RegEx
const msg = "I love JavaScript. JavaScript is awesome!";
console.log(msg.replace("JavaScript", "JS")); // replaces first only
console.log(msg.replace(/JavaScript/g, "JS")); // replaces all

// 10. Trim & Pad
const padded = "   padded string   ";
console.log(padded.trim());      // "padded string"
console.log(padded.trimStart()); // "padded string   "
console.log(padded.trimEnd());   // "   padded string"
console.log("42".padStart(5, "0")); // "00042"
console.log("42".padEnd(5, "*"));   // "42***"

// 11. Split & Join
const csv = "red,green,blue";
const colors = csv.split(",");     // ['red', 'green', 'blue']
const joined = colors.join(" | "); // 'red | green | blue'

// 12. Iteration
for (const char of "ABC") {
    console.log(char); // A B C
}
console.log([...str1]); // ['H', 'e', 'l', 'l', 'o']

// 13. Comparing Strings
console.log("apple" === "apple");       // true
console.log("apple" < "banana");        // true (lexical order)
console.log("Apple".localeCompare("apple")); // -1

// 14. Tagged Template Literals
function highlight(strings, ...values) {
    return strings.reduce((acc, str, i) => acc + str + (values[i] ?? ""), "");
}
const lang = "JavaScript";
const message = highlight`I love ${lang}!`; // I love JavaScript!

// 15. Multi-line Strings
const multiLine = `Line 1
Line 2
Line 3`;
console.log(multiLine);

// 16. Unicode & Escape Sequences
const emoji = "💻";
console.log(emoji.length);           // 2 (surrogate pair)
console.log(emoji.codePointAt(0));  // 128187

// 17. Encoding/Decoding
const url = "https://example.com/?query=hello world";
const encoded = encodeURIComponent(url);
const decoded = decodeURIComponent(encoded);

// 18. Custom Utility: Capitalize
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalize("jaVaSCrIPt")); // JavaScript

// 19. Reverse String
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("developer")); // repoleved

// 20. Palindrome Check
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true

// 21. Frequency Count
function charFrequency(str) {
    return [...str].reduce((acc, ch) => {
        acc[ch] = (acc[ch] || 0) + 1;
        return acc;
    }, {});
}
console.log(charFrequency("hello")); // {h:1, e:1, l:2, o:1}

// 22. Template Tag Use Case
function safeHTML(strings, ...values) {
    return strings.reduce((acc, str, i) =>
        acc + str + (values[i] ? String(values[i]).replace(/</g, "&lt;") : ""), "");
}
const unsafe = "<script>alert('x')</script>";
console.log(safeHTML`User input: ${unsafe}`);

// 23. Regular Expression Advanced
const logData = "User1: 123.45.67.89, User2: 98.76.54.32";
const ipRegex = /\d{1,3}(\.\d{1,3}){3}/g;
const ips = logData.match(ipRegex); // ['123.45.67.89', '98.76.54.32']

// 24. Count words in a sentence
function wordCount(str) {
    return str.trim().split(/\s+/).length;
}
console.log(wordCount("  How many words   are here? ")); // 5

console.log("=== Complete String Handling Done ===");
