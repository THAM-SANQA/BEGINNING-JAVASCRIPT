//Declaring the words for the hangman game.
let words = ["java", "dell", "you", "pizza"];
let word = words[Math.floor(Math.random() * words.length)];
// alert(word);
// Empty array with underscores  
let ansArray = [];
for (let i = 0; i < word.length; i++)
{
    ansArray[i] = '_';
}

let remainingLetters = word.length;
let allGuesses = '';
// Code for the game loop.
while (remainingLetters > 0 && allGuesses.length < 9)
{
    alert(ansArray.join(' '));
    
    let guess = prompt("Guess a single letter, or click Cancel to stop playing.");
    allGuesses+=guess;
    if (guess === null) 
    {
        break;
    } 
    else if (guess.length !== 1) 
    {
        alert("Please guess a single letter.");
    } 
    else 
    {
       // Check if guess is correct
       guess = guess.toLocaleLowerCase();
       for (let j = 0; j < word.length; j++)
       {
            if (word[j] === guess)
            {
                if (ansArray[j] === '_')
                {
                    ansArray[j] = guess;
                    remainingLetters--;
                }
                else
                {
                    alert('You have already guessed this letter! Try Again')
                    break;
                }
            }
       }
    }
}

if (remainingLetters === 0)
{
    alert(ansArray.join(" "));
    alert('Well done, you might have the Hacker in you.');
}
else if (allGuesses === 0)
{
    alert('Oops, Out of chances. Please try again. The answer was: ' + word);
}
else
{
    alert('Quit? TRY again with a different word! The answer was: ' + word);
}