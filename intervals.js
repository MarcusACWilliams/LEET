/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
    // Form a "number line"
    // **NOPE**Use a SET - Inside
    // Use a BST.. DFS

    var intTree = [];
    var stack   = [];
    var i = 0;
    var index = 0;

    if(!number[0]) {
        return [];
    }
    
    // Initialize tree
    intTree.push(number[i][0]);
    intTree.push(number[i][1]);
    let rt = intTree[0];
    
    while(number[i]) {
        let start = number[i][0];
        let end   = number[i][1];

        let insert = number[i][0];
        stack.push(number[i][1]);
        stack.push(number[i][0]);

        while(stack.length > 0) {
            
            // Index = 2*(k+1)
            if(insert < rt) {
                //Go left
                index = 2*(index+1);
                if(!intTree[index]) {
                    intTree[index] = insert;
                }

                if(intTree[index])
                    rt = intTree[index];

            }

            // Index = 2*(k+1) +1 
            if(insert > rt) {
                //Go right
                index = (2*(index+1))+1;
                rt = intTree[index];


            }

        }



        i++;
    }

};