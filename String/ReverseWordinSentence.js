let str = 'Hello World from Node.js';
let revstr = '';
let revword = '';

for (let i = 0; i <= str.length; i++) {
    let letter = str.charAt(i);

    if (letter === ' ' || i === str.length) {
        // Reverse the collected word manually
        for (let j = revword.length - 1; j >= 0; j--) {
            revstr += revword.charAt(j);
        }

        // Add space if not the end of string
        if (i !== str.length) {
            revstr += ' ';
        }

        // Reset revword for next word
        revword = '';
    } else {
        revword += letter;
    }
}

console.log('Reversed words in sentence: ', revstr);
