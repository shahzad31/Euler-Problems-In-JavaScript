/**
 * Created by mshahzad on 02/12/2015.
 */
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