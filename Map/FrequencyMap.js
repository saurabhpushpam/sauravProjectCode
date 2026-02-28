let str= 'This is example of frequency map';

let freqmap= new Map();

for(let i=0; i<str.length; i++){
    let char= str[i];
    if(freqmap.has(char) == true){
        freqmap.set(char, freqmap.get(char)+1);
    }
    else{
    freqmap.set(char, 1);
}
}

for(let [key, value] of freqmap.entries()){
    console.log(key, " : ", value);
}






let sortedstr = 'This is example of sorted frequency map';

let sortedfreqmap = new Map();

for (let i = 0; i < sortedstr.length; i++) {
    let char = sortedstr[i];
    if (sortedfreqmap.has(char)) {
        sortedfreqmap.set(char, sortedfreqmap.get(char) + 1);
    } else {
        sortedfreqmap.set(char, 1);
    }
}

// Convert Map to Array, sort it by key, then print
let sortedEntries = [...sortedfreqmap.entries()].sort((a, b) => {
    // Alphabetical sort by key (i.e. character)
    return a[0].localeCompare(b[0]);
});

console.log("\nSorted Frequency Map:");
for (let [key, value] of sortedEntries) {
    console.log(`'${key}' : ${value}`);
}

