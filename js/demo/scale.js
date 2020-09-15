define(["drag"], function (Drag) {
    /**
     * node1 被缩放的控件
     * node2 按下的控件
     */

    function scale(node1, node2) {
        node2.onmousedown = function (ev) {
            var e = ev || window.event;
            //获取鼠标当前位置x
            var startX = e.clientX;
            var startY = e.clientY;
            //获取当前鼠标的宽（高）
            var w = node1.offsetWidth;
            var h = node1.offsetHeight;

            document.onmousemove = function (ev) {
                var e = ev || window.event;
                var positionX = w + e.clientX - startX;
                var positionY = h + e.clientY - startY;
                var windowWidth = document.body.clientWidth || document.documentElement.clientWidth;
                var windowHeight = document.body.clientHeight || document.documentElement.clientHeight;

                positionX = Drag.range(positionX, node2.offsetWidth, 500);
                positionY = Drag.range(positionY, node2.offsetHeight, 500);

                node1.style.width = positionX + "px";
                node1.style.height = positionY + "px";
            }
        }

        document.onmouseup = function () {
            document.onmousemove = null;
        }
    }

    return {
        scale: scale
    }
})