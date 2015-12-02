/**
 * Created by mshahzad on 02/12/2015.
 */
var calculateSum =function(){
    var sum=0;
    var j=0;
    var i=1;
    while(i<4000000){
        i=i+j;
        j=i-j;
        if(i%2==0){
             sum+=i;
        }
    }
    console.log("sum is " +sum);
};
