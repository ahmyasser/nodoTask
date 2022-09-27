"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Currency: ()=>Currency,
    Rating: ()=>Rating
});
var Currency;
(function(Currency) {
    Currency["USD"] = 'usd';
    Currency["EUR"] = 'eur';
    Currency["EGP"] = 'egp';
    Currency["GBP"] = 'gbp';
})(Currency || (Currency = {}));
var Rating;
(function(Rating) {
    Rating[Rating["one"] = 1] = "one";
    Rating[Rating["two"] = 2] = "two";
    Rating[Rating["three"] = 3] = "three";
    Rating[Rating["four"] = 4] = "four";
    Rating[Rating["five"] = 5] = "five";
})(Rating || (Rating = {}));

//# sourceMappingURL=books.interface.js.map