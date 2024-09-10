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

// const output = calculateTax(34000, 1753);
// console.log(output);