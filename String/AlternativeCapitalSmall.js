let str= 'JAVASCRIPT';

let newstr= '';

for(let i=0; i<str.length; i++){
    if(i%2==0){
        let char= str.charAt(i).toUpperCase();
        newstr= newstr + char;
    }
    else{
        let char= str.charAt(i).toLowerCase();
        newstr= newstr + char;
    }
}

console.log('Alternative Capital Small : ', newstr);

