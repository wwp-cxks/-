/**
 * 遵从AMD规范
 */

define(["scale", "drag"], function (Scale, Drag) {
    //封装函数
    function init() {
        var oBtn = document.getElementById("btn1");
        var oDiv1 = document.getElementById("div1");
        var oDiv2 = document.getElementById("div2");
        var oDiv3 = document.getElementById("div3");

        oBtn.onclick = function () {
            //显示div1
            oDiv1.style.display = 'block';
            Scale.scale(oDiv1, oDiv2);
        }
        Drag.drag(oDiv3);
        Drag.range(oDiv1.offsetWidth, 200, 500);
    }

    return {
        init: init
    }
})