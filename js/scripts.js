// Business (or back-end) logic:

var add = function(number1, number2) {
  return number1 + number2;
};
var sub  = function(number1, number2) {
  return number1 - number2;
};

var mult  = function(number1, number2) {
  return number1 * number2;
};

var dev  = function(number1, number2) {
  return number1 / number2;
};


// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
    //alert(add(number1, number2));
  });
});

//alert(add(number1, number2));
alert(sub(number1, number2));
//alert(mult(number1, number2));
//alert(dev(number1, number2));

