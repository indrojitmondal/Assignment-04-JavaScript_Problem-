function  waitingTime(waitingTimes  , serialNumber) {
   
   
    if (Array.isArray(waitingTimes)===false|| typeof serialNumber !=='number' || isNaN(serialNumber)===true )
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
const output = waitingTime([ 3, 5, 7, 11, 6 ], 10);
console.log(output);
