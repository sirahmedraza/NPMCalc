import { calculator } from "./calc.js";

import inquirer from "inquirer";
import chalk from 'chalk';


import showBanner from 'node-banner';
 
  (async () => {
      await showBanner('Calculator', 'Developed by Muhammad Ahmed Raza');
  

// let a:number = promptSync("Enter 1st number");
inquirer
  .prompt([
    {
      type: 'input',
      name: 'a',
      message: 'Enter first number?'
    },
    {
        type: 'input',
        name: 'b',
        message: 'Enter 2nd number'
    },
    {
        type: "list",
        name: "op",
        message: "What operation do you want to perform",
        choices: [
            "+",
            "-",
            "*",
            "/"
        ]
    }
  ])
  .then((answers: { a: string; b: string; op: string }) => {
    // Parse a and b into numbers before calling calculator
    let a = parseFloat(answers.a);
    let b = parseFloat(answers.b);
    const result = calculator(a, b, answers.op);
    // console.log(chalk.blue(`The result is: ${result}`));
    console.log(chalk.blue(`The result is:`), result);
    // console.log(result);
  })
}
  )();

