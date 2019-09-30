// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function IDsOfPackages(rideDuration, songDurations)
{
    var targetSum = rideDuration - 30;
    
    //2 sum//sliding window
    var low = 0, high = songDurations.length-1;
    var indexMap  = new Map();
    var result;

    songDurations.forEach( (element,index) => {
        indexMap.set(element, index);   
    });

    var test = songDurations.sort(function(a,b){return a-b;}); 

    while(low < high) {
        sum = test[low] + test[high];
        
        if(sum < targetSum) { 
            low++;
        }else 
        if(sum > targetSum) {
            high--;
        }else {
            result = [indexMap.get(test[low]), indexMap.get(test[high])];
            console.log(result);
            return result;
        }
        
    }
    

    if(result){
        return result;
    }else { return [];}
}
// FUNCTION SIGNATURE ENDS

//IDsOfPackages(90, [1,10,25,35,60]);
//IDsOfPackages(250, [100,180,40,120,10]);
IDsOfPackages(110, [20,70,90,30,60,110]);