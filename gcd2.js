// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function generalizedGCD(num, arr)
{
    const lowest = Math.min(...arr);

    let j;
    let factor;
    for(factor = lowest; factor > 1; factor--){
        let isCommonDivisor = true;

        for(j = 0; j< num; j++) {
            if(arr[j] % factor !== 0) {
                isCommonDivisor = false;
                break;
            }
        }

        if(isCommonDivisor) {
            return factor;
        }
    }
    return 1;
}
// FUNCTION SIGNATURE ENDS
