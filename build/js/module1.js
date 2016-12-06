"use strict";
var abc = (function () {
    function abc() {
    }
    abc.prototype.say = function () {
        console.log(this.name + this.height);
    };
    return abc;
}());
exports.abc = abc;
