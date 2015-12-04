/**
 * Created by mshahzad on 02/12/2015.
 */
/*The prime factors of 13195 are 5, 7, 13 and 29.

 What is the largest prime factor of the number 600851475143 ?*/
function findLargestPrimeFactor(number){
    var i=1;
    var primeFactors=[];
    var mid=number/2;
    while(i<mid){
        i++;
        if(number%i==0){
            primeFactors.push(i);
            var product=primeFactors.reduce(function(a,b){
                return a*b;
            });
            if(product>number){
                primeFactors.pop(i);
                break;
            }
        }
    }
    return  Math.max.apply(null, primeFactors);
}
findLargestPrimeFactor(600851475143);