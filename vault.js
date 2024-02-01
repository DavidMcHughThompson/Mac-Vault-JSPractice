//PSUEDOCODE
// 1. Build the requisite github repository and clone it to my computer
// 2. Create the necessary files (js,html,readme)
// 3. Write Psuedocode (Woah man)
// 4. Create three equations (3 distinct types of mathematical operators) (not hard values) that produce the numbers 10 - 40 - 39
// 5. Display those numbers in an alert popup OR an html page (figure out how to do both)
// 6. make a string that says "You have received this message because you have been chosen to open an important vault. Here is the secret combination:" and concatenate it with the numbers (which will be the product of the three equations you make) (make sure to use backticks to make things easier and avoid having to hard code the variable numbers)
// 7. Figure out how to display that fully concatenated string on a page, either via html or an alert
// 8. Sprinkle some comments throughout, explaining what each moving part does and why it exists
// 9.Sit back and watch the adoration and adulation for this well articulated and inimitable display of coding genius

let numOne = 5 + 3 + 2; //all of these are set up so they can be changed, rather than hardcoded
let numTwo = 120 / 3;
let numThree = 13 * 3;
let messageOne = `You have recieved this message because you have been chosen to open an important vault.  Here is the secret combination: ${numOne} - ${numTwo} - ${numThree}`; //setting the message up with flexible variables is so much less of a hassle than manually hardcoding the values you want to display, so keep it simple and make it easy

console.log(messageOne);
alert(messageOne); //I put this here as a test to see if messageOne worked, and it appears that it does, since it pops up when first opening the webpage
