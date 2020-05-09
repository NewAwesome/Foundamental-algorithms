"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var classFundamental;
(function (classFundamental) {
    var Animal = /** @class */ (function () {
        function Animal(theName) {
            this.name = theName;
        }
        Animal.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 0; }
            console.log(this.name + " moved " + distanceInMeters + "m.");
        };
        return Animal;
    }());
    var Snake = /** @class */ (function (_super) {
        __extends(Snake, _super);
        function Snake(name) {
            // NOTE: 子类构造器中必须首先super(xxx)调用父类构造器
            return _super.call(this, name) || this;
        }
        // NOTE: override。增强父类函数。此处增强Animal的move函数
        Snake.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 5; }
            console.log("Slithering...");
            _super.prototype.move.call(this, distanceInMeters);
        };
        return Snake;
    }(Animal));
    var Horse = /** @class */ (function (_super) {
        __extends(Horse, _super);
        function Horse(name) {
            return _super.call(this, name) || this;
        }
        Horse.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 45; }
            console.log("Galloping...");
            _super.prototype.move.call(this, distanceInMeters);
        };
        return Horse;
    }(Animal));
    var sam = new Snake("Sammy the Python");
    var tom = new Horse("Tommy the Palomino");
    sam.move();
    tom.move(34);
})(classFundamental || (classFundamental = {}));
/* class 修饰符： public private protected */
var classModifier;
(function (classModifier) {
    var Animal = /** @class */ (function () {
        function Animal(theName, theFood, theAge) {
            this.name = theName;
            this.food = theFood;
            this.age = theAge;
        }
        Animal.prototype.move = function (distanceInMeters) {
            console.log(this.name + " moved " + distanceInMeters);
        };
        Animal.prototype.eat = function () {
            console.log(this.name + "'s favorite food is " + this.food);
        };
        return Animal;
    }());
    // // test Private
    // let dog = new Animal('dog','meat')
    // console.log(dog.food); // Error: Property 'food' is private
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(theName, theFood, theAge, theHome) {
            var _this = _super.call(this, theName, theFood, theAge) || this;
            _this.home = theHome;
            return _this;
        }
        Dog.prototype.getSuperProtect = function () {
            return "Superclass's protected attribute is " + this.age;
        };
        return Dog;
    }(Animal));
    // NOTE: when wangcai: Animal. the Dog's private methods can't be called.
    var wangcai = new Dog("wangcai", "meat", 6, "狗窝");
    console.log(wangcai.getSuperProtect());
    // console.log(wangcai.home); // Error： private属性
})(classModifier || (classModifier = {}));
/* 属性修饰符 readonly. 仅允许在 声明处 || new构造函数时  赋值 */
/* 构造函数参数的形式定义类属性 */
var parameterProperties;
(function (parameterProperties) {
    var Octopus = /** @class */ (function () {
        // NOTE: consolidating the declaration and assignment into one place
        function Octopus(name) {
            this.name = name;
            this.numberOfLegs = 8;
        }
        return Octopus;
    }());
    var a = new Octopus("aaa");
    // 访问通过构造函数参数的形式定义的属性
    console.log(a.name);
    console.log(a.numberOfLegs);
})(parameterProperties || (parameterProperties = {}));
/* class中的get/set */
var GetSet;
(function (GetSet) {
    var fullNameMaxLen = 10;
    var Employee = /** @class */ (function () {
        function Employee() {
            this._fullName = 'a';
        }
        Object.defineProperty(Employee.prototype, "fullName", {
            get: function () {
                return this._fullName;
            },
            set: function (newName) {
                if (newName && newName.length > fullNameMaxLen) {
                    throw new Error("fullName has a max length of " + fullNameMaxLen);
                }
                this._fullName = newName;
            },
            enumerable: true,
            configurable: true
        });
        return Employee;
    }());
    var employee = new Employee();
    // employee.fullName = "Bob Smithdddddd";
    if (employee.fullName) {
        console.log(employee.fullName);
    }
})(GetSet || (GetSet = {}));
/* class中的static属性 */
var staticExample;
(function (staticExample) {
    var Grid = /** @class */ (function () {
        function Grid(scale) {
            this.scale = scale;
        }
        Grid.prototype.calculateDistanceFromOrigin = function (point) {
            // NOTE: Accessing static property: Grid.origin
            var xDist = point.x - Grid.origin.x;
            var yDist = point.y - Grid.origin.y;
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        };
        Grid.origin = { x: 0, y: 0 };
        return Grid;
    }());
    var grid1 = new Grid(1.0); // 1x scale
    var grid2 = new Grid(5.0); // 5x scale
    // NOTE: Accessing static property: Grid.origin
    console.log(Grid.origin);
})(staticExample || (staticExample = {}));
/* Abstract class */
var abstractClass;
(function (abstractClass) {
    var Department = /** @class */ (function () {
        function Department(name) {
            this.name = name;
        }
        Department.prototype.printName = function () {
            console.log("Department name: " + this.name);
        };
        return Department;
    }());
    var AccountingDepartment = /** @class */ (function (_super) {
        __extends(AccountingDepartment, _super);
        function AccountingDepartment() {
            return _super.call(this, "Accounting and Auditing") || this;
        }
        AccountingDepartment.prototype.printMeeting = function () {
            console.log("The Accounting Department meets each Monday at 10am.");
        };
        AccountingDepartment.prototype.generateReports = function () {
            console.log("Generating accounting reports...");
        };
        return AccountingDepartment;
    }(Department));
    // NOTE: ok to create a reference to an abstract type
    var department;
    //  NOTE: Error. cannot create an instance of an abstract class.
    // department = new Department();
    department = new AccountingDepartment();
    department.printName();
    department.printMeeting();
    // NOTE: error: method doesn't exist on declared abstract type
    // department.generateReports(); 
})(abstractClass || (abstractClass = {}));
