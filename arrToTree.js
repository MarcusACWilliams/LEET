/**
 * @param {number[]} arr
 */
var treePrettyPrint = function(arr) {
    // Max nodes per level: 1, 2, 4, 8, 16, 32, 64, ... 2^n
    // log2(Array.length) = Tree depth
    // Indent  2(maxLevel-level)
    // Spacing 2(maxLevel-(level+1) ) --> previous level's Indent

    var depth = Math.log2(arr.length+1);
    var indent = Math.pow(2, depth-1);
    var spacing = 0;

    let index = 0, i = 0;
    let level = 0;
    var str = "";

    while(level < depth) {
        let nodes = Math.pow(2, level);
        //print indent
        for(i=0;i<indent; i++){ str = str.concat(" ");}
        while(nodes > 0) {
            //print node..
            if(arr[index])
            str = str.concat(arr[index]);
            index++;
            //print spacing..
            for(i=0;i<spacing;i++){ str = str.concat(" ");}
            //fill level with nodes...
            nodes--;
        }

        spacing = indent;
        indent--;
        indent = indent>>1;
        console.log(str);
        str="";
        level++;
        //print indent......
    }
};

treePrettyPrint([1, 2, 3, 4, 5, 6, 7]);