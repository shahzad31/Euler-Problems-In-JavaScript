/**
 * Created by mshahzad on 09/12/2015.
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

 Find the sum of all the primes below two million.
 */

    //improved algorithm using some of techniques mentioned in https://en.wikipedia.org/wiki/Primality_test
var findSumOfPrimeNumber= function (below) {
    var sum=0;
    var date=new Date();
    var primesBelow200=[];
    var isPrimeSimple=function(number){
        if (number < 2) return false;
        if (number % 2 == 0) return (number == 2);
        var root = Math.sqrt(number);
        for(var i = 3; i <= root; i += 2)
        {
            if (number % i == 0) return false;
        }
        return true;
    };
    for(var i=0;i<200;i++){
        if(isPrimeSimple(i)){
            primesBelow200.push(i);
        }
    }
    var isPrimeNumberEfficient=function(number){
        if (number < 2) return false;
        if (number % 2 == 0) return (number == 2);
        if(number>200)
        {
            for(var j= 0,k=primesBelow200.length;j<k;j++){
                if(number%primesBelow200[j]==0){
                    return false;
                }
            }
        }
        var root = Math.sqrt(number);
        for(var i = 3; i <= root; i += 2)
        {
            if (number % i == 0) return false;
        }
        return true;
    };
    for(i= 2;i<below;i++){
        if(isPrimeNumberEfficient(i)){
            sum+=i;
        }
    }
    var nowDate=new Date();
    console.log("in seconds"+(nowDate-date)/1000);
    return sum;
};
findSumOfPrimeNumber(10); //17
findSumOfPrimeNumber(2000000); //142913828922