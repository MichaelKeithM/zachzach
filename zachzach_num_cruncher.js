/* JavaScript program to test the result of this addition problem: I.e. (36 + 5 = 41) && (3 + 6 + 5 = 14)

	Question to answer: (xx + y = ab) and (x + x + y = ba)  where xx = double digit # and x & y = single digit #
 
Does always occur with addition of a double digit number plus a single digit number that answer inverts? 
Prints sums of both problems and true if sums invert and false if they do not.  */  

//xx = double digit number; y = single digit number 
var numberTest = function(xx,y) {
  this.xx = xx;
  this.y = y;

  xx = xx.toString(); //convert number to string

	//example: for "56" firstDigit = "5" and secondDigit = "6" as string values
  var firstDigit = xx[0];
  var secondDigit = xx[1];

  //first digit added to second digit of number xx 
  var doubleDigit = parseInt(firstDigit) + parseInt(secondDigit);

  //just an output separator
  console.log("''");

  //x+x+y
  var threeNums = doubleDigit + y;
  
  console.log(threeNums);

  //convert string data back to number data type
  var realNumber = parseInt(xx);

  //xx+y
  var twoNums = realNumber + y;
  console.log(twoNums);
  
  //convert number data back to string data for value comparison
  threeNums = threeNums.toString();
  twoNums = twoNums.toString();
  
  //if loop to test ab <--> ba (answers invert?)
  if (threeNums[0] == twoNums[1] && threeNums[1] == twoNums[0]) {
	console.log(true);
  }
  else {
	console.log(false);
  }
};

numberTest(55,0);