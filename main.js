const fs = require('fs')
const { exec } = require('child_process')

// checking if the journals dir exists
if (!fs.existsSync("journals")) {
    fs.mkdirSync("journals")
}

// journals will be broken up by the month
let date = new Date()

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let month = monthNames[date.getMonth()]

let journalDir = `journals/${month}`

if (!fs.existsSync(journalDir)) {
    fs.mkdirSync(journalDir)
}

// writing file
let fileName = `${journalDir}/${date.toLocaleDateString().split('/').join('-')}_${date.toLocaleTimeString().split(':').join('-').split(' ').join('_')}.txt`

fs.writeFileSync(fileName, '');

exec(`code ${fileName}`)