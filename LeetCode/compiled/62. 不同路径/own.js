"use strict";
var dp = function (row, col) {
    // define: dp[][]
    var dp = new Array(col);
    // initialize: dp[][]
    dp.forEach(function (item) {
        item = new Array(row);
        for (var i = 0; i < item.length; i++) {
            item[i] = 1;
        }
    });
    console.log(dp);
    return 123;
};
dp(8, 3);
