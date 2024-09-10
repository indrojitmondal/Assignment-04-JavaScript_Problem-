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
function calculateFinalScore(obj) {
    if(typeof obj !=='object')
    {
        return 'Invalid Input';
    }
    const array1= Object.keys(obj);
    const array2= Object.values(obj);

    if(array1.includes('name')===false || array1.includes('testScore')===false  || array1.includes('schoolGrade')===false || array1.includes('isFFamily')===false )
    {
        return 'Invalid Input';
    }
    else if(typeof array2[0] !=='string' || typeof array2[1] !=='number' || array2[1]>50 || typeof array2[2] !=='number' || array2[2]>30  || typeof array2[3] !=='boolean')
    {
        return 'Invalid Input';
    }

    let total=0;
    total+=obj.testScore+obj.schoolGrade+ (obj.isFFamily ? 20: 0) ;
    return total>=80 ? true: false;
    
}
