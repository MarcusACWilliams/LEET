/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function(maze, start, destination) {
    var x = start[1];
    var y = start[0];
    var node = [y,x];

    var row = maze[y];
    var column = row[x];

    var up = [node[0]-1,0];
    var down = [node[0]+1,0];
    var left = [0,node[1]-1];
    var right = [0,node[1]+1];

};