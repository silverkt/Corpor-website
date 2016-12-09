System.registerDynamic("build/js/module1.js", [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var abc = function () {
        function abc() {}
        abc.prototype.say = function () {
            console.log(this.name + this.height);
        };
        return abc;
    }();
    exports.abc = abc;
    return module.exports;
});
System.registerDynamic("build/js/testmodule.js", ["build/js/module1.js"], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var module1_1 = $__require("build/js/module1.js");
  var p = new module1_1.abc();
  p.name = "silver heigt is";
  p.height = 189;
  p.say();
  return module.exports;
});
//# sourceMappingURL=test.map