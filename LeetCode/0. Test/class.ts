namespace classFundamental {
  class Animal {
    name: string;
    constructor(theName: string) {
      this.name = theName;
    }
    move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
  }

  class Snake extends Animal {
    constructor(name: string) {
      // NOTE: 子类构造器中必须首先super(xxx)调用父类构造器
      super(name);
    }
    // NOTE: override。增强父类函数。此处增强Animal的move函数
    move(distanceInMeters = 5) {
      console.log("Slithering...");
      super.move(distanceInMeters);
    }
  }

  class Horse extends Animal {
    constructor(name: string) {
      super(name);
    }
    move(distanceInMeters = 45) {
      console.log("Galloping...");
      super.move(distanceInMeters);
    }
  }

  let sam = new Snake("Sammy the Python");
  let tom: Animal = new Horse("Tommy the Palomino");

  sam.move();
  tom.move(34);
}

/* class 修饰符： public private protected */
namespace classModifier {
  class Animal {
    // NOTE: By default having a "public" modifier.
    name: string;
    public constructor(theName: string, theFood: string, theAge: number) {
      this.name = theName;
      this.food = theFood;
      this.age = theAge;
    }
    public move(distanceInMeters: number) {
      console.log(`${this.name} moved ${distanceInMeters}`);
    }
    // NOTE: ts3.8 supports private fileds.
    private food: string;
    public eat() {
      console.log(`${this.name}'s favorite food is ${this.food}`);
    }
    // NOTE: protected can be accessed within deriving classes.
    protected age: number;
  }
  // // test Private
  // let dog = new Animal('dog','meat')
  // console.log(dog.food); // Error: Property 'food' is private

  class Dog extends Animal {
    private home: string;

    constructor(
      theName: string,
      theFood: string,
      theAge: number,
      theHome: string
    ) {
      super(theName, theFood, theAge);
      this.home = theHome;
    }

    getSuperProtect() {
      return `Superclass's protected attribute is ${this.age}`;
    }
  }

  // NOTE: when wangcai: Animal. the Dog's private methods can't be called.
  let wangcai: Dog = new Dog("wangcai", "meat", 6, "狗窝");
  console.log(wangcai.getSuperProtect());
  // console.log(wangcai.home); // Error： private属性
}

/* 属性修饰符 readonly. 仅允许在 声明处 || new构造函数时  赋值 */

/* 构造函数参数的形式定义类属性 */
namespace parameterProperties {
  class Octopus {
    readonly numberOfLegs: number = 8;
    // NOTE: consolidating the declaration and assignment into one place
    constructor(readonly name: string) {}
  }
  let a: Octopus = new Octopus("aaa");
  // 访问通过构造函数参数的形式定义的属性
  console.log(a.name);
  console.log(a.numberOfLegs);
}

/* class中的get/set */
namespace GetSet {
  const fullNameMaxLen = 10;

  class Employee {
    private _fullName: string = 'a';

    get fullName(): string {
      return this._fullName;
    }

    set fullName(newName: string) {
      if (newName && newName.length > fullNameMaxLen) {
        throw new Error("fullName has a max length of " + fullNameMaxLen);
      }
      this._fullName = newName;
    }
  }

  let employee = new Employee();
  // employee.fullName = "Bob Smithdddddd";
  if (employee.fullName) {
    console.log(employee.fullName);
  }
}

/* class中的static属性 */
namespace staticExample {
  class Grid {
    static origin = { x: 0, y: 0 };
    calculateDistanceFromOrigin(point: { x: number; y: number }) {
      // NOTE: Accessing static property: Grid.origin
      let xDist = point.x - Grid.origin.x;
      let yDist = point.y - Grid.origin.y;
      return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor(public scale: number) {}
  }

  let grid1 = new Grid(1.0); // 1x scale
  let grid2 = new Grid(5.0); // 5x scale
  // NOTE: Accessing static property: Grid.origin
  console.log(Grid.origin);
}

/* Abstract class */
namespace abstractClass {
  abstract class Department {
    constructor(public name: string) {}

    printName(): void {
      console.log("Department name: " + this.name);
    }

    // NOTE: abstract成员方法，无方法体。必须被derived class实现
    abstract printMeeting(): void; // must be implemented in derived classes
  }

  class AccountingDepartment extends Department {
    constructor() {
      super("Accounting and Auditing");
    }

    printMeeting(): void {
      console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
      console.log("Generating accounting reports...");
    }
  }
  // NOTE: ok to create a reference to an abstract type
  let department: Department; 
  //  NOTE: Error. cannot create an instance of an abstract class.
  // department = new Department();
  department = new AccountingDepartment();
  department.printName();
  department.printMeeting();
  // NOTE: error: method doesn't exist on declared abstract type
  // department.generateReports(); 
}
