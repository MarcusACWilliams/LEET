// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function generalizedGCD(num, arr)
{
    var sum = 1;
    gcd = arr[0];

    while(sum != 0) {

        if(gcd == 0){
            return 0;
        }
        if(gcd == 1) {
            return 1;
        }


        var i;
        for(i =0; i < num; i++) {
            while(arr[i] >= gcd) {
            arr[i] = arr[i] - gcd;
            }
        }

        sum = 0;

        for(i = 0; i < num; i++){
            sum = sum + arr[i];
        }

        if(sum != 0) {
            sum = 1;
            gcd = gcd -1;
        }else{return gcd;}

    }
}
// FUNCTION SIGNATURE ENDS