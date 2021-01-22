function test() {
  console.log(this);
  this.myName = "Wenda";
}
test();
console.log(window.myName);

function Circle (radius) {
  console.log(this);
}
var myCircle = new Circle(10);
console.log(myCircle);

// write a function method
function Circle (radius) {
  console.log(this);

  this.getArea =
    function () {
      return Math.PI * Math.pow(this.radius, 2);
    };
}
var myCircle = new Circle(10);
console.log(myCircle);

// Function constructors
function Circle (radius) {
  this.radius = radius;
}

Circle.prototype.getArea =
  function () {
    return Math.PI * Math.pow(this.radius, 2);
};

var myCircle = new Circle(10);
console.log(myCircle.getArea());

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);

// Object literals and "this"
var literalCircle = {
  radius: 10,

  getArea: function () {
    var self = this;
    console.log(this);

    var increaseRadius = function () {
      self.radius = 20;
    };
    increaseRadius();
    console.log(this.radius);

    return Math.PI * Math.pow(this.radius, 2);
  }
};

console.log(literalCircle.getArea());
