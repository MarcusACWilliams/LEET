/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
//  Find the largest container
//  Area = (shortest wall height) * (width)
//      **Don't subtract inner walls from total**
//  1) Start wide and narrow window

    var highWall = {index: null, height: null};
    var lowWall = {index: null, height: null};
    var tempWall = {index: null, height: null};
    var maxArea = 0, width;

    //  Run until indexes meet in the middle
    while(width > 0) {



    };


};

maxArea.prototype.setWall = function () {


};

/**
 * @param {number} max
 * @return {number}
 */
maxArea.prototype.computeArea = function (max) {
    let area = 0;
    
    width = Math.abs(highWall.index - lowWall.index);
    area = width*lowWall.height;

    return area > max ? area : max;
};