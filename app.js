console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    if (count < 0) {
        count = count * -1;
    }
    for (let i = 1; i < count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        } else {
            continue;
        }
    }
    console.log(count);
};
printOdds(25)



// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
    let oldEnoughMsg = `Congrats ${userName}, you can drive!`;
    let tooYoungMsg = `Sorry ${userName}, but you need to wait until you're 16.`;
    if (age >= 16) {
        console.log(oldEnoughMsg);
    } else {
        console.log(tooYoungMsg);
    }
}
checkAge("Thomas", 32)

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function whichQuadrant(x, y) {
    if (x === 0 && y === 0){
        console.log ("This point is at the origin")
    } else if (x > 0 && y > 0) {
        console.log("Quadrant 1");
    } else if (x < 0 && y > 0) {
        console.log("Quadrant 2");
    } else if (x < 0 && y < 0) {
        console.log("Quadrant 3");
    } else if (x > 0 && y < 0) {
        console.log("Quadrant 4");
    } else {
        console.log("Not in any quadrant");
    }
}
whichQuadrant(2, 2);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function whichTriangle(side1, side2, side3) {
    let triangleType = "";
    if (side1 == side2 && side1 == side3) {
        triangleType = "equilateral";
    } else if (side1 == side2 || side1 == side3) {
        triangleType = "isosceles";
    } else {
        triangleType = "scalene";
    }
    /*return console.log(
        `Sides [${side1}, ${side2}, ${side3}] form a Triangle of Type: ${triangleType}`
    
    );*/
    console.log (triangleType)
}

whichTriangle(2, 2, 3)

// Bonus Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function dataUsage (planLimit, day, usage) {
    let daysLeft= (30 - day);
    console.log(`${day} days used, ${daysLeft} days remaining`);

    //This is how much usage you're allowed per day
    let avgDaily= (planLimit / 30);
    console.log(`average daily use: ${avgDaily} GB/day`);

    //This is how much usage you've used per day
    let avgUse= (usage / day);
        if (avgUse == avgDaily) {
            console.log("You are right on standard daily use");
        } else if (avgUse > avgDaily) {
            console.log(`You are EXCEEDING your average daily use (${avgUse} GB/day), continuing this high usage, you'll exceed your data plan by ${((avgUse * 30) - planLimit)}`);
        } else if (avgUse < avgDaily) {
            console.log(`You are under your daily limit by (${(avgDaily - avgUse)} GB/day)`);
        }
}
dataUsage(100, 15, 41)