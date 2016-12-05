"use strict";
var $ = require('jquery');
var Persion = (function () {
    function Persion() {
    }
    Persion.prototype.say = function () {
        $("body").html(this.name + "身高" + this.height);
    };
    return Persion;
}());
var XiaoQing = new Persion();
XiaoQing.name = "小卿";
XiaoQing.height = 182;
XiaoQing.say();
