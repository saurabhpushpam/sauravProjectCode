const str = 'Hello and welcome to the world of JavaScript';
let vcount = 0;
let ccount = 0;
const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i).toLowerCase();

    if (char >= 'a' && char <= 'z') {
        if (vowels.has(char)) {
            vcount++;
        } else {
            ccount++;
        }
    }
}
console.log(`Vowels: ${vcount}`);
console.log(`Consonants: ${ccount}`);