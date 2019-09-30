// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function cellCompete(states, days)
{
    var temp = states;
    var k = days;
    var next = [];
    
    while(k > 0) {
        next[0] = (0 == temp[1]) ? 0 : 1;
        next[7] = (0 == temp[6]) ? 0 : 1;
        
        var i;
        for(i = 1; i<7; i++) { 
            next[i] = (temp[i-1] == temp[i+1]) ? 0 : 1;
        }

        
        //console.log(next[0],next[1],next[2],next[3],next[4],next[5],next[6],next[7]);
        
        temp = []; 
        next.forEach(cell => {
            temp.push(cell);
        });
        k--;
    }
}

cellCompete([0,1,0,1,0,1,0,1], 3);