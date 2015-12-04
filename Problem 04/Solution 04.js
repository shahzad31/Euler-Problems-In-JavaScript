/**
 * Created by mshahzad on 03/12/2015.
 */
    /*A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

     Find the largest palindrome made from the product of two 3-digit numbers.*/
var findLargestPalindrome = function(numberOfDigits){
    var date=new Date();
    //typical palindrom check function
/*    var isPalindrome= function (no) {
        no=no.toString();
        var digits=no.length-1;
        var i=0;
        var palindrome=true;
        var loopLimit=digits/2;
        while(i<loopLimit){
            if(no[i]!=no[digits-i]){
                palindrome=false;
                break;
            }
            i++;
        }
        return palindrome;
    };*/

    //more efficient palindrome check function in js
    var isPalindrome= function (no) {
        no=no.toString();
        var reverseStr=no.split("").reverse().join("");
         return no==reverseStr;
    };
    var currentLargest=1;
    var limit=+(+Math.pow(2,numberOfDigits)).toString(2);
    for(var i= 1;i<limit;i++){
        //having two conditions on j to make it more efficient
        for(var j=1;j<=i&&j<limit;j++){
                var no = i * j;
               //excluding if number is not divisible by 11 as each palindrome should be divisble by 11
                if (no>currentLargest && (no%11==0) && isPalindrome(no)) {
                        currentLargest = no;
                }
        }
    }
    var nowDate=new Date();
    console.log("in seconds"+(nowDate-date)/1000);
    return currentLargest;
};
findLargestPalindrome(3);