/** Oct 1, 2019 - faster than 66.62% - less memory than 20.00%
*  ---> Completion Time: Too Long... ) <---
*
* @param {number[][]} board
* @return {void} Do not return anything, modify board in-place instead.
**/
var gameOfLife = function(board) {
    var row=0, col=0;
    var sum = 0;
    var ch = null;
    var updates = [];

    // Set Boundries and Cell Count
    var maxRow = 0;
    var maxCol = 0;
    if( (maxRow = board.length) > 0) {
        maxCol = board[0].length;
    }
    var totalCells = maxCol*maxRow;
    maxRow--;maxCol--;

    //           0 top left    1 top mid   2 top right   3   left    4 right     5 bot left    6 bot mid    7 bot right
       ch =      [ [-1,-1],      [-1,0],     [-1,1],       [0,-1],    [0,1],      [1,-1],        [1,0],        [1,1] ];
    //              0,0           0,any        0, max        any, 0    any, max     max, 0       max, any     max, max

    // Corner Cases
    var corners = [ [0,0], [0,maxCol], [maxRow, maxCol], [maxRow, 0]];
    // Edges
    var topEdge = [1,maxCol-1]; // Column Range row = 0
    var botEdge = [1, maxCol-1]; // Column Range row = maxRow
    var leftEdge = [1,maxRow-1];  // Row Range col = 0
    var rigthEdge = [1, maxRow-1] // Row Range col = 

    // If there are less than 3 Cells they all die...
    if(totalCells <= 2) {
        let i,j;
        for(i=0; i<=maxRow; i++) {
            for(j=0;j<=maxCol; j++) {
                board[i][j] = 0;
            };
        };
        return;
    }

    // Flat Array... Use simple search
    if(maxRow == 0 || maxCol == 0) {
        // Longitudinal Search
        if(maxRow == 0) {
            if(tup = visitChildren(corners[0], [ch[4]], board)){updates.push(tup);tup=null;};
            if(tup = visitChildren(corners[1], [ch[3]], board)){updates.push(tup);tup=null;};
            for(range = maxCol-1;range >0 ; range--) {
                if(tup = visitChildren([0, range],[ ch[3],ch[4] ], board)){updates.push(tup);tup=null;};
            }
        }else {
            if(tup = visitChildren(corners[0], [ch[6]], board)){updates.push(tup);tup=null;};
            if(tup = visitChildren(corners[3], [ch[1]], board)){updates.push(tup);tup=null;};
            for(range = maxRow-1;range >0 ; range--) {
                if(tup = visitChildren([range, 0],[ch[1],ch[6]], board)){updates.push(tup);tup=null;};
            }
        }

    }else {

        let tup;
        // Visit Corners --> If Cell changes, push Cell onto Updates stack
        if(tup = visitChildren(corners[0], [ch[4],ch[7],ch[6]], board)){updates.push(tup);tup=null;};
        if(tup = visitChildren(corners[1], [ch[3],ch[5],ch[6]], board)){updates.push(tup);tup=null;};
        if(tup = visitChildren(corners[2], [ch[1],ch[3],ch[0]], board)){updates.push(tup);tup=null;};
        if(tup = visitChildren(corners[3], [ch[1],ch[4],ch[2]], board)){updates.push(tup);tup=null;};
        
        // Visit Edges
        let range;
        if(maxCol > 1) {
            for(range = maxCol-1;range >0 ; range--) {
                if(tup = visitChildren([0, range],[ ch[3],ch[4],ch[5],ch[6],ch[7] ], board)){updates.push(tup);tup=null;};
            }
            for(range = maxCol-1;range >0 ; range--) {
                if(tup = visitChildren([maxRow, range],[ ch[3],ch[4],ch[0],ch[1],ch[2] ], board)){updates.push(tup);tup=null;};
            }
        }
        if(maxRow > 1) {
            for(range = maxRow-1;range >0 ; range--) {
                if(tup = visitChildren([range, 0],[ ch[1],ch[6],ch[2],ch[4],ch[7] ], board)){updates.push(tup);tup=null;};
            }
            for(range = maxRow-1;range >0 ; range--) {
                if(tup = visitChildren([range, maxCol],[ ch[1],ch[6],ch[0],ch[3],ch[5] ], board)){updates.push(tup);tup=null;};
            }
        }

        // Visit Core
        let i,j;
        for(i=1; i<maxRow; i++) {
            for(j=1;j<maxCol; j++) {
                if(tup = visitChildren([i,j], ch, board)){updates.push(tup)};
            }
        }
    }

    // Update Cells
    while(updates.length > 0) {
            let index = updates.pop();
            row = index[0];
            col = index[1];
            let val = board[row][col];
            switch(val) {
                case 2:
                    board[row][col] = 0;
                    break;
                case -1:
                        board[row][col] = 1;
                        break;
            }
    }
    return;
};

/**
 * 
 * @param {number[]} cellIndex 
 * @param {number[][]} kids 
 * @param {number[][]} Board 
 */
function visitChildren(cellIndex, kids, Board ) {
    let row = cellIndex[0];
    let col = cellIndex[1];
    let sum = 0;
    let k = kids;

    for(var kid in k) {
        let val = Board[row+k[kid][0]][col+k[kid][1] ];
        if(val > 0) {
            sum++;
            if(sum > 3){
                break;
            }
        }
    };
    // Update cell
    if(Board[row][col] <= 0){
        if(sum == 3){ Board[row][col] = -1;
            return [row,col];
        }
    }else {
    // Live Cells
        // Kill
        if(sum >3) {
            Board[row][col] = 2;
            return [row,col];
        }else if(sum >1) {
            // Stable
        }else {
            // Kill
            Board[row][col] = 2;
            return [row,col];
        }
    };
    return null; 
}
var one = [[1]];
gameOfLife(one);

var empty = [[]];
gameOfLife(empty);

var input =[
    [0,1,0],
    [0,0,1],
    [1,1,1],
    [0,0,0]
  ];

  gameOfLife(input);