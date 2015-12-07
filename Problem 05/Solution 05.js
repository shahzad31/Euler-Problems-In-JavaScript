/**
 * Created by mshahzad on 04/12/2015.
 */
    /*2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

     What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?*/
var findSmallestEvenlyDivisibleNo= function (start, end) {
    var date=new Date();
    var number=0;
    var loop=true;
    while(loop){
        var isDivisible=true;
        number++;
        for(var i= start;i<=end;i++){
            if(number%i!=0){
                isDivisible=false;
                break;
            }
        }
        loop=!isDivisible;
    }
    var nowDate=new Date();
    console.log("in seconds"+(nowDate-date)/1000);
    return number;
};
findSmallestEvenlyDivisibleNo(1,20);