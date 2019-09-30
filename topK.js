/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var freq = new Map();
    var top = [];
    var temp = [];
    var tempNum = [];
    var max = k;
var flag = true;
    var value;
    var result = [];

    nums.forEach( (num) => {
        value = 1;
        if(freq.has(num)) {
            value = freq.get(num);
            value++;
            freq.delete(num);
        }
        
        freq.set(num, value);
        tempNum.push(num);
        temp = [];

        while(tempNum.length > 0 && top.length > 0) { 
      
                var topelement = top.shift();

                if(freq.get(topelement) >= value) {
                    temp.push(topelement);
                    if(num == topelement) { 
                        tempNum.pop();
                    }
                    //else {top.unshift(topelement);}
                }
                else { 
                    temp.push(tempNum.pop());
                    top.unshift(topelement);
                }

        }
            while(top.length > 0) {
                var next = top.shift();
                if(next != num){
                    temp.push(next);
                }
            }
            if(tempNum.length > 0) {
                temp.push(tempNum.pop() );
            }

            top = temp; 
    });

        while(max > 0) {
            let topk = top.shift();
            result.push(topk);
            console.log(topk);
            max--;
        }

        return (result);

};

//topKFrequent([1,2], 2);
topKFrequent([4,1,-1,2,-1,2,3], 2);