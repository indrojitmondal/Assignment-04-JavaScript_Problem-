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
const output = sendNotification('indro.cse.bu@gmail.com');
console.log(output);
