document.addEventListener('contextmenu', function (e) {
    m = document.getElementById("drop_hidden").style;
    if (m.display === 'block') {
        m.display = 'none';
    } else {
        m.display = 'block';
        m.position = 'absolute';
    }
}, false);
// function ocm(){
//     document.addEventListener("contextmenu", function (e){
//         m = document.getElementById("drop_hidden").style;
//         if (m.display === 'block') {
//             m.display = 'none';
//         } else {
//             m.display = 'block';
//             m.position = 'absolute';
//         }
//     }, false)
// }
var start;
(function () {
    start = window.performance.timing.navigationStart;
})();

function fin() {
    let f = document.getElementById("footer")
    let newfoot = f.innerHTML + ". Время вхождения: " + ((window.performance.timing.domContentLoadedEventEnd - start) / 1000) + " секунды.";
    f.remove();
    document.body.append(newfoot);
}