let code = 'function foo() {\n'
for (let i = 0; i < 2000; i++) {
    code += `function a${i}() {\n`
    for (let j = 0; j < i; j++) {
        code += `a${j}()\n`
    }
    code += `}\n`
}
code += `
\n}\n
module.exports = foo
`
require('fs').writeFileSync('./script.js', code)
