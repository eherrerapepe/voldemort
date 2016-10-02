/**
 * Created by trabajo on 28/09/2016.
 */
var rng = document.querySelector("#range");

read("mousedown");
read("mousemove");

function read(evtType) {
    rng.addEventListener(evtType, function() {
        window.requestAnimationFrame(function () {
            document.querySelector("#indicatorRange").innerHTML = rng.value;
        });
    });
}