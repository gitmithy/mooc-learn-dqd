// function a(ctx) {
//     ctx.body = {
//         "message": "hello from abc"
//     }
// }
// module.exports = {
//     a
// }





// 简化版
module.exports = function (ctx) {
    ctx.body = {
        "message": "hello from a"
    }
}