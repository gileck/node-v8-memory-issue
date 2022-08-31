async function generateCode() {
    let code = ``
    code = 'function factory() {\n'
    for (let i = 0; i < 2000; i++) {
        code += `function a${i}() {\n`
        for (let j = 0; j < 2000; j++) {
            code += `a${j}()\n`
        }
        code += `}\n`
    }
    code += `}`
    code += `module.exports = factory`
    // code += `module.exports = () => {}`
    require('fs').writeFileSync('./script.js', code)
    await new Promise(r => setTimeout(r, 100))
}
module.exports = generateCode