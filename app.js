const mysql = require("mysql");
const inquirer = require("inquirer");
const questions = require("./lib/questions");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Conyers2019!",
  database: "employee_tracker_db",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  //   readItems();
  init();
});

function init() {
  inquirer.prompt(questions.arrayOfChoices).then((data) => {
    console.log(data);
    if (data.userChoice === "Add departments") {
      console.log("Add departments");
    } else if (data.userChoice === "Add roles") {
        console.log("Add roles");
    } else if (data.userChoice === "Add employees") {
        console.log("Add employees");
    } else if (data.userChoice === "View departments") {
        console.log("View departments");
    } else if (data.userChoice === "View roles") {
        console.log("View roles");
    } else if (data.userChoice === "View employees") {
        console.log("View employees");
    } else if (data.userChoice === "Update employee roles") {
        console.log("Update employee roles");
    } else {
      connection.end();
    }
  });
}