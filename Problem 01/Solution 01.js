/**
 * Created by mshahzad on 28/10/2015.
 */
var i=0;
var sum=0;
while(i<1000){
    if(i%3==0||i%5==0){
        sum+=i;
    }
    i++;
}
console.log(sum);