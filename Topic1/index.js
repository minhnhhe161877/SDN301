const Rectangle = require("./rectangle");
function calRectangle(length, width) {
  if (length <= 0 || width <= 0)
    console.log("length or width must be greater than zero");
  else {
    console.log("Area = " + Rectangle.area(length, width));
    console.log("Perimeter = " + Rectangle.perimeter(length, width));
  }
}
calRectangle(10, 5);
calRectangle(0, 10);
calRectangle(3, 10);
