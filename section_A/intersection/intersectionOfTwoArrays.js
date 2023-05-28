var array1 = [1, 2, 3, 4, 5, 6];
var array2 = [1, 3, 5, 7];

var intersection = array1.filter(function(num) {
  return array2.includes(num);
});

document.getElementById("intersect_int").innerText=intersection;

