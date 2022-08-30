const generateCode = require('./generateCode')
let max = 0
const foo = require('./script')
async function run() {
    foo()
    return {}
}
async function start() {
    generateCode()
    let i = 0
    while (true) {
        console.clear()
        i ++
        run()
        // const rss = res.after.rss
        const rss = process.memoryUsage().rss / 1000 / 1000
        max = rss > max ? rss : max
        console.log(i, Math.round(max), Math.round(rss))
        // console.log(res.after)
        console.log()
        await new Promise(r => setTimeout(r, 30))

    }
}
start()
// run()
