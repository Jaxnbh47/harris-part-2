/* 
Student Learning Outcomes:
Using the resources provided, you will implement a small JavaScript program.
Prompt the user for input.
Repeat actions using a loop.
Perform calculations and make decisions based on the numbers.
Output results to the console.

STEPS TO SUCCESS
-step 1: Get player name, store in a variable(name);
-step 2: Loop name times;
-ask user for total strokes per hole;
step 3: print strokes after par total;
*/
let playername = prompt("Welcome to GC mini golf! What is your name?"); {
    let playername = InputEvent;
}
let holeCount = prompt("Hi, " + playername + "! Would you like to play 3 or 6 holes today?"); 

let putts = 0; 

for (let i = 0; i < holeCount; i++) {
    let holeCount = Number(prompt("How many putts for hole " + (i+1) + "? (par is 3)."));
    putts += holeCount;
}
if (putts < (holeCount * 3)) {
    alert("Great job, " + playername + " Your total par was: " + (putts - holeCount * 3))
}
if (putts > (holeCount * 3)) {
    alert("Nice try, " + playername + " Your total par was: +" + (putts - holeCount * 3))
}
if (putts = (holeCount * 3)) {
    alert("Good game, " + playername + " Your total par was: " + (putts - holeCount * 3))
}
