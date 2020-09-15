define(function () {

    function drag(node) {
        node.onmousedown = function (ev) {
            var e = ev || window.event;
            var offsetX = e.clientX - this.offsetLeft;
            var offsetY = e.clientY - this.offsetTop;

            document.onmousemove = function (ev) {
                var e = ev || window.event;
                var l = e.clientY - offsetY;
                var w = e.clientX - offsetX;
                var windowWidth = document.body.clientWidth || document.documentElement.clientWidth;
                var windowHeight = document.body.clientHeight || document.documentElement.clientHeight;

                l = range(l, 0, windowWidth - node.offsetWidth);
                w = range(w, 0, windowWidth - node.offsetHeight);

                node.style.top = l + "px";
                node.style.left = w + "px";
            }
        }
        document.onmouseup = function () {
            document.onmousemove = null;
        }
    }

    function range(iCur, iMin, iMax) {
        if (iCur > iMax) {
            return iMax;
        } else if (iCur < iMin) {
            return iMin;
        } else {
            return iCur;
        }
    }

    return {
        drag: drag,
        range: range
    }
});