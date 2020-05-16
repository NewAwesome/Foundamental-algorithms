// NOTE: seems like 实现多态时这样使用。其他情况直接定义class以及相应的constructor
namespace type {
  // interface Animal {
  //   new (legs: number, ear: number): Animal;
  //   legs: number;
  //   ear: number;
  // }

  // class Dog implements Animal {
  //   readonly legs:number;
  //   readonly ear:number;

  //   constructor (legs:number,ear:number) {
  //     this.legs = legs;
  //     this.ear = ear;
  //   }
  // }
  /* Error. 
  Class 'Dog' incorrectly implements interface 'Animal'.
  Type 'Dog' provides no match for the signature 'new (legs: number, ear: number): Animal'. */

  /* Solution:
    拆分Animal为属性接口和构造函数类型接口
   */

  interface AnimalInterface {
    legs: number;
    ear: number;
  }
  interface AnimalConstructor {
    new (legs: number, ear: number): AnimalInterface;
  }

  class Dog implements AnimalInterface {
    readonly legs: number;
    readonly ear: number;

    constructor(legs: number, ear: number) {
      this.legs = legs;
      this.ear = ear;
    }
  }
  class Chicken implements AnimalInterface {
    readonly legs: number;
    readonly ear: number;

    constructor(legs: number, ear: number) {
      this.legs = legs;
      this.ear = ear;
    }
  }

  // Factory fn
  function createAnimal(
    constructor: AnimalConstructor,
    legs: number,
    ear: number
  ): AnimalInterface {
    return new constructor(legs, ear);
  }

  const dog: Dog = createAnimal(Dog, 4, 2);
  const chicken: Chicken = createAnimal(Chicken, 2, 2);
}

namespace extendsInterface {
  interface Shape {
    color: string;
  }

  interface PenStroke {
    penWidth: number;
  }

  interface Square extends Shape, PenStroke {
    sideLength: number;
  }

  let square = {} as Square;
  square.color = "blue";
  square.sideLength = 10;
  square.penWidth = 5.0;
}

namespace hybridInterface {
  interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
  }

  function getCounter(): Counter {
    let counter = function (start: number) {} as Counter;
    counter.interval = 123;
    counter.reset = function () {};
    return counter;
  }

  let c = getCounter();
  c(10);
  c.reset();
  c.interval = 5.0;
}
