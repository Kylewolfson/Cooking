
var gallonToLiter = function(gallons)
{
  return gallons * 3.78541;
  };
var gallons = parseInt(prompt("enter gallons"));
var liter = gallonToLiter(gallons);
alert(liter);

var tblsToTsp = function(tbls)
{
  return tbls * 3;
};
var tbls = parseInt(prompt("enter Tablespoons"));
var tsp = tblsToTsp(tbls);
alert(tsp);
