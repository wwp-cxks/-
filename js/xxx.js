console.log("加载完毕");

/**
 * 管理当前.html页面上引入的所有模块的路径(js后缀可省略)
 */
require.config({
    paths: {
        "index": "demo/index",
        "scale": "demo/scale",
        "drag": "demo/drag"
    }
})

/**
 * 使用模块 AMD规范
 */

require(['index'], function (index) {
    index.init();
})

console.log("显示完毕");