// let arr =[]
// function printNumbers (arr) {
  // for (i=0;i<=134;i++) {
    // if (i >= 45 && i <= 55) {
      // continue
    // }
    // arr.push(i)
    // 
  // }
  // return arr
// }
// printNumbers(arr);
// console.log(arr)



// let amount = 1600
// let percent = 7 
// let limit = 2000
// let year
// 
// function  getYears (amount,percent,limit) {
    // year = 1
  // 
    // price = amount + amount*percent/100 
// 
    // if (price < limit) {
      // year++; 
    // } else {
      // print (" not enough money")
    // }
    // 
    // 
    // newprice = price + price*percent/100
    // 
    // 
    // if (newprice < limit) {
      // year++; 
    // } else {
      // print (" not enough money")
    // }
    // return year
// 
  // }
  // getYears(amount,percent,limit)
  // console.log(year)


  
  
  let numberOfGuests = 6
  
  
  function getDrinks (numberOfGuests) {
     shots = []
     orders = 1
    
    while (orders <= numberOfGuests) {
      shots.push(orders++)
    }
    total = shots.reduce((sum,current) => sum + current)
     return total

  }
  getDrinks(6)
  console.log(total)