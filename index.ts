#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a ramdom number
// 2) user input for guessing number
// 3) compare user input with computer generate number and show result -done

const ramdomNumber =Math.floor(Math.random()* 6 + 1);

const answers = await inquirer.prompt([
  {

    name: "userGuessedNumber",
    type: "number",
    message: "please guess a number between 1-6:",

  },
]);
if(answers.userGuessedNumber === ramdomNumber){
    console.log ("congtratulations! you guessed right number.")
}else {
    console.log ("you guessed wrong number")
}

