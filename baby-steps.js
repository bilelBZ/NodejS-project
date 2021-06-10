const numbers= process.argv.slice(2);

const result = numbers.reduce((a,b) =>{
    return a + Number(b);

},0)
console.log(result)