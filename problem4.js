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
const output = calculateFinalScore(
    { name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }
    
    );
console.log(output);