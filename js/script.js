const loadTime = (function() {
    document.getElementById("pload").innerHTML = (window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart) / 1000 + ' секундs';
});
window.addEventListener('load', function (e) {
    loadTime();
    let mas = document.getElementById('menu').getElementsByTagName('a');
    for(let i = 0; i < mas.length; i++){
        if(mas[i].pathname === document.location.pathname){
            mas[i].className += " active";
        }
    }
}, false)