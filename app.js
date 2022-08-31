const generateCode = require('./generateCode')
let max = 0

async function run() {
    const factory = require('./script')
    factory()
    return {}
}
const getCurrentMemory = () => process.memoryUsage().rss / 1000 / 1000
async function test() {
    await generateCode()
    let i = 0
    while (true) {
        i++
        run()
        const rss = getCurrentMemory()
        max = rss > max ? rss : max
        console.clear()
        console.log(i, Math.round(max), Math.round(rss))
        await new Promise(r => setTimeout(r, 30))
    }
}

test()
// run()