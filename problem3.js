function checkDigitsInName(name) {

    if(typeof name ==='undefined'){
        return 'Invalid Input';
    }
    
    else if(typeof name !== 'string')
    {
        return 'Invalid Input';
    }
    
    for (const ch of name) {
       if(!isNaN(ch)){
             return 'true';
       }
    }
    return 'false';
    

}
const output = checkDigitsInName();
console.log(output);
