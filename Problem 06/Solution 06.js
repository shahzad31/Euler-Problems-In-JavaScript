/**
 * Created by mshahzad on 07/12/2015.
 */
/*The sum of the squares of the first ten natural numbers is,

 1^2 + 2^2 + ... + 10^2 = 385
 The square of the sum of the first ten natural numbers is,

 (1 + 2 + ... + 10)^2 = 552 = 3025
 Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 ? 385 = 2640.

 Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.*/

var findDifference= function (noOfNaturalNos) {
    var sumOfSquares=0;
    var squareOfSum=0;
    for(var i= 1;i<=noOfNaturalNos;i++){
        sumOfSquares+=Math.pow(i,2);
        squareOfSum+=i;
    }
    squareOfSum=Math.pow(squareOfSum,2);
    return squareOfSum-sumOfSquares;
};
findDifference(10);
findDifference(100);