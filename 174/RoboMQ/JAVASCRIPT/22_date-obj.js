var today = new Date();
// creating new data object using constructor
console.log(today);

var mStart = new Date( 2000, 0 , 1 ); 
// creating a new start date
console.log(mStart);

today.setDate(today.getDate() + 1); 
// adding a day to today using getters and setters
console.log(today);

//getters
console.log(today.getMonth()); // get month
console.log(today.getDay()); // get day
console.log(today.getFullYear()); // get full year

// setters
var t = new Date();
t.setDate(9); // Sets the day of the month for a specified date according to local time.
console.log(t);
t.setFullYear(2033); // Sets full year for a specified date according to local time. 
// similarly we can set monnth, millisecond, etc
console.log(t.toTimeString());
console.log(t.toDateString()); //Returns the "date" portion of the Date as a human-readable string