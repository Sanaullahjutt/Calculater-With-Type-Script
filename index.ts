import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number",  name : "firsNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform action",
    type:"list",
    name: "operator",
    choices:["Addition", "Subtraction","Multiplication","Division"],
  },
]);
if(answer.operator === "Addition"){
    console.log(answer.firsNumber + answer.secondNumber)
}
