const flowWind = document.querySelector('.window');
const btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
    if (flowWind.style.display == 'none') {
        flowWind.style.display = 'block'
    } else {
        flowWind.style.display = 'none'
    }

})