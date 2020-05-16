"use strict";
// NOTE: seems like 实现多态时这样使用。其他情况直接定义class以及相应的constructor
var type;
(function (type) {
    // interface Animal {
    //   new (legs: number, ear: number): Animal;
    //   legs: number;
    //   ear: number;
    // }
    var Dog = /** @class */ (function () {
        function Dog(legs, ear) {
            this.legs = legs;
            this.ear = ear;
        }
        return Dog;
    }());
    var Chicken = /** @class */ (function () {
        function Chicken(legs, ear) {
            this.legs = legs;
            this.ear = ear;
        }
        return Chicken;
    }());
    // Factory fn
    function createAnimal(constructor, legs, ear) {
        return new constructor(legs, ear);
    }
    var dog = createAnimal(Dog, 4, 2);
    var chicken = createAnimal(Chicken, 2, 2);
})(type || (type = {}));
var extendsInterface;
(function (extendsInterface) {
    var square = {};
    square.color = "blue";
    square.sideLength = 10;
    square.penWidth = 5.0;
})(extendsInterface || (extendsInterface = {}));
var hybridInterface;
(function (hybridInterface) {
    function getCounter() {
        var counter = function (start) { };
        counter.interval = 123;
        counter.reset = function () { };
        return counter;
    }
    var c = getCounter();
    c(10);
    c.reset();
    c.interval = 5.0;
})(hybridInterface || (hybridInterface = {}));
