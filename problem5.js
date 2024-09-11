function  waitingTime(waitingTimes  , serialNumber) {
   
    if( typeof waitingTimes==='undefined' || typeof serialNumber === 'undefined'){
        return 'Invalid Input'; 
    }
   
    else if (Array.isArray(waitingTimes)===false|| typeof serialNumber !=='number' || isNaN(serialNumber)===true )
    {
        return 'Invalid Input';
    }
    
    const lengthOfWaitingTimes= waitingTimes.length;
    const number= (serialNumber - lengthOfWaitingTimes)-1;
    let sum=0;
    for (const time of waitingTimes) {
        sum+=time;
    }

    const result = Math.round(sum/lengthOfWaitingTimes)*number;
    return result;

}
const output = waitingTime(1,);
console.log(output);
