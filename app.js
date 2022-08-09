console.log("Hello World!\n==========\n");


// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function isOdd(count) {
    if (count < 0) {
        console.log("Invalid input! Count cannot be negative number!");
    }
    else {
        for ([i = 0]; [i <= count]; [i++]) {
            if (i % 2 != 0) {
                console.log(i);
            }
        }
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSizteen = `Sorry ${userName}, but you need to wait until you're 16!`;
    if (age < 16) {
        console.log(belowSizteen);
    }
    else {
        console.log(aboveSixteen);
    }
}

// Exercise 3 Section
console.log("Exercise 3:\n==========\n");
function whichQuadrant(x, y) {
    if (x > 0 && y > 0) {
        console.log("This point lies in the first quadrant");
    }
    else if (x < 0 && y > 0) {
        console.log("This point lies in the second quadrant");
    }
    else if (x < 0 && y < 0) {
        console.log("This point lies in the third quadrant");
    }
    else if (x > 0 && y < 0) {
        console.log("This point lies in the fourth quadrant");
    }
    else if (x == 0 && y == 0) {
        cconsole.log("This point is on the origin")
    }
    else if (x == 0 && y != 0) {
        cconsole.log("This point is on the y axis")
    }
    else if (x != 0 && y == 0) {
        cconsole.log("This point is on the x axis")
    }
}

// Exercise 4 Section
console.log("Exercise 4:\n==========\n");
function whichTriangle(num1, num2, num3) {
    if (num1 + num2 != num3 || num1 + num3 != num2 || num2 + num3 != num1) {
        console.log("INVALID TRIANGLE!")
    }
    else {
        if (num1 == num2 && num2 == num3) {
            console.log("This here is an equilateral triangle")
        }
        else if (num1 == num2 || num2 == num3 || num1 == num3) {
            console.log("This here is an isosceles triangle")
        }
        else {
            console.log("You have yourself a scalene triangle")
        }
    }
}