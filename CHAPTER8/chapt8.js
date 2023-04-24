// let ourFirstFunction = function()
// {
//     console.log("Hello world")
// }

// ourFirstFunction();

// let sayHelloTo = function(theName) 
// {
//     alert("Hello " + theName);
// }

// sayHelloTo("TJ");
// sayHelloTo("Kea");
// sayHelloTo("Jade");

// function drawCats(howManytimes)
// {
//     for (let t = 0; t < howManytimes; t++)
//     {
//         console.log(t + " =^.^=")
//     }
// }

// drawCats(7)

// function printMultipleTimes(howManytimes, whatToDraw)
// {
//     for (i = 0; i < howManytimes; i++)
//     {
//         console.log(i + whatToDraw);
//     }
// }

// printMultipleTimes(9, " (.)(.)")

// function double(number)
// {
//     return number*2;
// }

// // console.log(double(6))
// // let answer = double(12) + double(7);
// // alert(answer);

// console.log(double(double(5)));

//  function pickRandomWord(words)
//  {
//      return words[Math.floor(Math.random() * words.length)];
//  }

// let randomWords = ['Planet', "Wors", "Butterfly"];

// alert(pickRandomWord(randomWords));

// //When working with a function that contains a sentence in
// // the output. First declare a function to pick out words from variables
// function pickRandomWord(words)
//  {
//      return words[Math.floor(Math.random() * words.length)];
//  }
// //close the random word function
// //Create the function to generate the sentence. It must be BLANK!!!
// function generateRandomInsult()
// {
//     //In the sentence function.
//     //create a variable that will show the outline of your sentence.
//     //Don't forget to return and declare in one line. YES it's POSSIBLE ;)
//     return randomString = "Your " + pickRandomWord(randomBodyParts) + " is like a " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!";
// }
// // Now you declare the words to be in your variables.
// let randomBodyParts = ["Face", "Nose", "Hair"];
// let randomAdjectives = ["Smelly", "Boring", "Stupid"];
// let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
// //carefull about SPELLING!!
// alert(generateRandomInsult());

// function fifththLetter(_name)
// {
////When a function contains two possible outcomes.
////Open an if-statement declaring the value that is not wanted.
////Then return the wanted outcome in the function outside the if-statement.
//     if(_name.length < 5)
//     {
//         return "Name is too short";
//         //You don't always have to return undefined. Add a message.
//     }
//     return "The fifth letter of your name is " + _name[4] + ".";
// }
// alert(fifththLetter('Jaden'));

// function medalForScore(scores)
// //Do not forget to always include "{}" inside the function!
// {
//     if (scores < 3)
//     {
//         return "You got Bronze";
//     }
//     else if (scores < 7)
//     {
//         return "You got Silver";
//     }
//     return "You got Gold!!";
// }
// //Do not forget to add "alert" or "console.log" to print out the data processed in the function.
// //We practice declaring the value/message of the function after declaring the function.
// alert(medalForScore(9));

//Challenge#1
function add(multiplied, numberThree)
{
    //inside the function we don not have to declare any variables.
    //They will be called outside the function instead.
    return multiplied + numberThree;
}
function multiply(numberOne, numberTwo)
{
    //inside the function we don not have to declare any variables.
    //They will be called outside the function instead.
    return numberOne*numberTwo;
}
//You can call another function inside another function.
alert(add(multiply(36325, 9824), 777));

// //Chalenge#2
// function areArrays(arrayOne, arrayTwo)
// {
//     //arrays are defined by length and value.
//     //We first check if their length is the same.
//     if (arrayOne.length !== arrayTwo.length)
//     {
//         return false;
//     }
//     //Now we check the values in the arrays individually using a for loop
//     for(i = 0; i < arrayOne.length; i++)
//     {
//         //inside the for loop we then add an if loop to check the corresponding values.
//         //We check using "i" as an index.
//         if(arrayOne[i] !== arrayTwo[i])
//         {
//             return false;
//         }
//     }
//     return true;
// }
// alert(areArrays([1, 2, 3],[4, 5, 6]));

// let words = ["icecream", "java", "baby", "car"];
// let word = pickWord();
// //preparing empty answer array with underscores
// let answerArray = [];
// setupAnswerArray();

// let remainingLetters = word.length;
// let numberOfGuesses = 20;
// let userName = prompt("What is your name?");
// alert("Welcome to HANGMAN " + userName);
// //starting the game loop
// let guess = "";
// while (remainingLetters > 0 && numberOfGuesses > 0) {
//     showPlayerProgress();
//     guess = getGuess();
//     numberOfGuesses--;
//     if (guess === null) {
//         break;
//     } else if (guess.length != 1) {
//         alert("Guess a single letter.")
//     } else {
//         //start checking if guess is correct
//         let correctGuesses = updateGameState();
//         remainingLetters -= correctGuesses;

//     }
// }
// showAnswerAndCongratulatePlayer();

// function pickWord() {
//     // Return a random word
//     return words[Math.floor(Math.random() * words.length)];
// };

// function setupAnswerArray() {
//     // Return the answer array     
//     for (let i = 0; i < word.length; i++) {
//         answerArray[i] = "_";
//     }

// };

// function showPlayerProgress() {
//     // Use alert to show the player their progress
//     alert(answerArray.join(" "));
// };

// function getGuess() {
//     // Use prompt to get a guess
//     return prompt("Guess a single letter or click cancel to exit.");
// };

// function updateGameState() {
//     // Update answerArray and return a number showing how many
//     // times the guess appears in the word so remainingLetters
//     // can be updated
//     guess = guess.toLowerCase();
//     let correctGuesses = 0;
//     for (let j = 0; j < word.length; j++) {
//         if (word[j] === guess) {
//             if (answerArray[j] === "_") {
//                 answerArray[j] = guess;
//                 correctGuesses++;
//             } else {
//                 alert("you have already guessed this letter!");
//                 break;
//             }
//         }
//     }
//     return correctGuesses;
// };

// function showAnswerAndCongratulatePlayer() {
//     // Use alert to show the answer and congratulate the player
//     if (remainingLetters === 0) {
//         alert(answerArray.join(" "));
//         alert("CONGRATULATIONS " + userName + "!!!")
//     } else if (numberOfGuesses === 0) {
//         alert("You ran out of guesses! " + userName + " The answer is " + word);
//     } else {
//         alert("Game ended.You quit the game " + userName + "! The answer is " + word);
//     }
// };