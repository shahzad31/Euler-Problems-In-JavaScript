/**
 * Created by mshahzad on 07/12/2015.
 */
/*By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

 What is the 10001st prime number?*/
var isPrimeNumber=function(no){
    for(var i=2;i<no;i++){
        if(no%i==0&&i!=no){
            return false;
        }
    }
    return true;
};
var findNthPrimeNumber= function (nth) {
    var primeCount=0;
    var i=1;
    while(primeCount!=nth){
        i++;
        if(isPrimeNumber(i)){
            primeCount++;
        }
    }
    return i;
};
//findNthPrimeNumber(6);
findNthPrimeNumber(10001);