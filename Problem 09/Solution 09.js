/**
 * Created by mshahzad on 09/12/2015.
 */
/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

          a^2 + b^2 = c^2
    For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.*/
var findPythagoreanTriplet= function () {
  var ifPythagoreanTriplet= function (a, b, c) {
      return (a*a+b*b==c*c);
  };
  for(var i=1;i<1000;i++){
      for(var j=1;j<1000;j++){
          for(var k=1;k<1000;k++){
              if(i+j+k==1000){
                  if(ifPythagoreanTriplet(i,j,k)){
                      return i*j*k;
                  }
              }
          }
      }
  }
};
findPythagoreanTriplet();