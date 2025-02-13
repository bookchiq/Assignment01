/* Exercise 1: */
// let someMonth
// function theMonth()
// let currentMonth
// let summerMonth
// let myLibraryFunction

/* Exercise 2: */
// a numeric literal expression
// 7

// a string literal expression
// 'Sarah'

// a Boolean literal expression
// true

// a null literal expression
// null

/* Exercise 3: */
// Give me two examples of complex / variable expressions.
// let x = 5 + 10;
// let y = 'Hello' + ' World';

/* Exercise 4: */
// Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers.
// let firstName;
// let lastName;
// let address;
// let city;
// let state;
// let zipCode;
// let yourAge;
// let referralSource;
// let mayWeContactYou;

/* Exercise 5: */
// Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.
// let firstName;
// firstName = 'John';

// let lastName = 'Doe';

// let address = '123 Main St', 'New York', state = 'NY', zipCode = '10001';

/* Exercise 6: */
// Create a variable. Add a number and a string and display the coerced result in the browser’s console window.
// let myFavoriteNumber = 7;
// let numberString = '5';
// let myTotal = myFavoriteNumber + numberString;
// console.log(myTotal);

/* Exercise 7: */
// Create two variables.
// For the first variable, add a Boolean and a string and display the coerced result.
// For the second variable, add a number and a Boolean and display the coerced result.
// let coercedBooleanAndString = true + 'Hello';
// let coercedNumberAndBoolean = 5 + true;
// console.log(coercedBooleanAndString);
// console.log(coercedNumberAndBoolean);

/* Exercise 8: */
// Is the following string literal valid? If not, how would you fix it?
// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."'
// console.log(someString)
// No, it's not valid because of the single quotes inside the string ("I'm"). To fix it, we need to escape the inner quote:
// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."'
// console.log(someString)

/* Exercise 9: */
// Create a variable that produces a null value in the console window.
// Then, create a variable that produces an undefined value in the console window.
// let nullVariable = null;
// let undefinedVariable;
// console.log(nullVariable);
// console.log(undefinedVariable);

/* Exercise 10: */
// Use the unary typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.
// let myString = 'Hello';
// let myNumber = 42;
// let myBoolean = true;
// let myObject = { key: 'value' };
// console.log(typeof myString); // string
// console.log(typeof myNumber); // number
// console.log(typeof myBoolean); // boolean
// console.log(typeof myObject); // object
// console.log(typeof undefinedVariable); // undefined

/* Exercise 11: */
// Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:
// Hello Zak Ruvalcaba, welcome to the JavaScript class!
// alert('Hello ' + 'Zak Ruvalcaba' + ', welcome to the JavaScript class!');

// Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma.
// alert('Hello ' + 'Sarah Lewis' + ', welcome to the JavaScript class!');

/* Exercise 12: */
// Declare a variable called name and set it equal to your name.
// Substitute your name in the previous alert string with the variable instead.
// let name = 'Sarah Lewis';
// alert('Hello ' + name + ', welcome to the JavaScript class!');

/* Exercise 13: */
// Declare a variable called course and set it equal to “JavaScript”.
// Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.
// let course = 'JavaScript';
// let name = 'Sarah Lewis';
// alert('Hello ' + name + ', welcome to the ' + course + ' class!');

/* Exercise 14: */
// Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:

// Hello Zak Ruvalcaba.
// Welcome to the JavaScript class!
// let name = 'Sarah Lewis';
// let course = 'JavaScript';
// alert('Hello ' + name + '.\nWelcome to the ' + course + ' class!');

/* Exercise 15: */
// Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable.
// let name = prompt('What is your name?');
// let course = 'JavaScript';
// alert('Hello ' + name + '.\nWelcome to the ' + course + ' class!');

/* Exercise 16: */
// Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.
// let name = prompt('What is your name?');
// let course = prompt('What class are you taking?');
// alert('Hello ' + name + '.\nWelcome to the ' + course + ' class!');

/* Exercise 17: */
// Declare a variable called x and assign it a value of 10.
// Declare a variable called y and assign it a value of 20.
// Display the sum of those two numbers in the console window.
// let x = 10;
// let y = 20;
// console.log(x + y);

/* Exercise 18: */
// Declare a variable called x and assign it a value of 20.
// Add and assign 20 to that variable and display the result in the console window.
// The result should be 40.
// let x = 20;
// x += 20;
// console.log(x);

/* Exercise 19: */
// Declare a variable called x and assign it a value of 20.
// Multiply and assign 5 to that variable and display the result in the console window.
// The result should be 100.
// let x = 20;
// x *= 5;
// console.log(x);

/* Exercise 20: */
// Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
// Divide and assign 1 to that variable and display the result in the console window.
// The result should be 2. If you got 6.66 try again.
// let x = 20 % 3;
// x /= 1;
// console.log(x);

/* Exercise 21: */
// Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.
// let result = (5 > 3) && (2 < 4);
// console.log(result);

/* Exercise 22: */
// Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.
// let result = (5 < 3) || (2 > 4);
// console.log(result);
