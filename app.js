let max = 0
const foo = require('./script')
async function run() {
    // const m = require('/Users/gileck/projects/thunderbolt-simple/thunderbolt/packages/thunderbolt-becky/dist/statics/thunderbolt-platform-simple.bundle.js')
    // const res = await m().execute()


    try {
        foo()
    } catch (e) {

    }

    // console.log({res})
    return {}
}
async function start() {
    let i = 0
    while (true) {
        console.clear()
        i ++
        const res = run()
        // const rss = res.after.rss
        const rss = process.memoryUsage().rss / 1000 / 1000
        max = rss > max ? rss : max
        console.log(i, Math.round(max), Math.round(rss))
        // console.log(res.after)
        console.log()
        await new Promise(r => setTimeout(r, 50))

    }
}
start()
// run()