#! /usr/bin/env node

import inquirer from "inquirer"

console.log("\n\tWelcome To Word Counter\n");

const answers: {
    sentence: string
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter Your Sentence To Counte Your Words: "
    }
]);

const words = answers.sentence.trim().split(" ")

console.log(words)

console.log(`Your sentence word count is ${words.length}`);