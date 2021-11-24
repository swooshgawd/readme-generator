const inq = require("inquirer")
const generateMd = require("./markdown")
const fs = require("fs")
function init() {
    inq.prompt([
        {
            type: "input",
            message: "What is the title of the application?",
            name: "title"

        },
        {
            type: "input",
            message: "Can you briefly describe the application?",
            name: "description"  
        },
        {
            type: "input",
            message: "Explain installation of the application",
            name: "install"
        },
        {
            type: "input",
            message: "Explain how to use your application",
            name: "use"
        },
        {
            type: "confirm",
            message: "Would you like to accept any contributions?",
            name: "contribution"
        },
        {
            type: "input",
            message: "Was any testing conducted?",
            name: "test"
        },
        {
            type: "input",
            message: "Enter your GitHub username",
            name: "username"
        },
        {
            type: "input",
            message: "What's your email address?",
            name: "email"
        },
        {
            type: "list",
            message: "What license do you want to add to your application?",
            name: "type",
            choices: ["MIT", "Apache", "GNU General Public License"]
        }
    ])
    .then(answers => {
        console.log(answers)
        const markdown = generateMd(answers)
        console.log(markdown)

        fs.writeFileSync("readme.md", markdown)
    })
}

init()



//What questions to ask user? How they will look in markdown file?
