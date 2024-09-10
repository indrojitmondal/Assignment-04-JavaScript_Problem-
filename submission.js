function calculateTax(income, expenses) {

    if( typeof income !=='number' || typeof expenses !== 'number' || isNaN(income)===true || isNaN(expenses) ===true || income<0 || expenses <0) 
    {
        return 'Invalid Input';
    }
    else if( expenses > income){
     return 'Invalid Input';
    }
    tax= (income -expenses)*.20;
    return tax;
 
 }
 function sendNotification(email) {
    if(typeof email !=='string' || email.includes(' ')===true)
    {
        
        return 'Invalid Email';
    }
    let count = 0;
    for (let i=0; i<email.length; i++) {
        if(email[i] === '@' ) count++;
    }
    if(typeof email !=='string' || email.indexOf('@') ===-1 || count>1){
      
        return 'Invalid Email';
    }
    const endIndexOfUsername= email.indexOf('@');
    const username=email.substring(0,endIndexOfUsername);
    const domainName=email.substring(endIndexOfUsername+1, email.length);
    
    return username + ' ' + 'sent you an email from'+ ' '+domainName;
}
function checkDigitsInName(name) {
    
    if(typeof name !== 'string')
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
