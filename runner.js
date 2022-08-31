const { exec } = require('child_process');
const p = exec('node ./app.js', (error, stdout, stderr) => {
    console.log("here")
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
})

console.log(p)