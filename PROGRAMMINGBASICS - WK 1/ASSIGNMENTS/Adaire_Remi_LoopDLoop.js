
var mPg = 5.5
//the runner needs to run a minimum of 5.5 miles per hour in order to get a candy
for (var miles = 0; miles<=6; miles++) {
    // starting at 0 miles and ending at 6 miles, and counting those increments one by one
    if ( miles%2 == 0 && mPg>=5.5) {
        // the mile counter issues candy at every even mile, meaning every mile that ends in 0 when modulated by 2
        console.log("Have some candy")
    }
}






