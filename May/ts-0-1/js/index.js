"use strict";
var a = 'aaa';
var arr = ['1', 2];
var b;
(function (b) {
    b[b["success"] = 1] = "success";
    b[b["error"] = 2] = "error";
})(b || (b = {}));
console.log(b.success);
function getInfo(str) {
    if (typeof str == 'string') {
        return "I am a " + str;
    }
    else {
        return "My age is " + str;
    }
}
console.log(getInfo('coolfe'));
console.log(getInfo(12));
