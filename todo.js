#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let coditions = true;
console.log(chalk.redBright.bold("\n \t wellcome to my TODO list\n"));
let mainFunction = async () => {
    while (coditions) {
        let options = await inquirer.prompt([
            {
                name: "choices",
                type: "list",
                message: "Select an option you want to do:",
                choices: ["Add task", "Delete task", "Update task", "View todo-list", "Exit"],
            }
        ]);
        if (options.choices === "Add task") {
            await addTask();
        }
        else if (options.choices === "Delete task") {
            await deleteTask();
        }
        else if (options.choices === "Update task") {
            await updateTask();
        }
        else if (options.choices === "View todo-list") {
            await viewTask();
        }
        else if (options.choices === "Exit") {
            coditions = false;
        }
    }
};
// creating  a function to add more tasks to list
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Add a new task :"
        }
    ]);
    todoList.push(newTask.task);
    console.log(`${newTask.task} addes successfully to your list !`);
};
// creating  function to view todo list
let viewTask = () => {
    console.log("\n your Todo-list : \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
// creating a function to delete task from todo list
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index number of the task you want to delete:",
        }
    ]);
    let deleteTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deleteTask} this task has been deleted successfuly \n`);
};
// creating a function to update todo list
let updateTask = async () => {
    await viewTask();
    let updateIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter task index  you want to update:"
        },
        {
            name: "newtask",
            type: "input",
            message: "Now enter new task name :"
        }
    ]);
    todoList[updateIndex.index - 1] = updateIndex.newtask;
    console.log(`\n ${updateIndex.index - 1} this task is updated successfuly.view updated list. \n`);
};
mainFunction();
