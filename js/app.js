//Page loads enables imperial units
window.addEventListener('load', ()=> {
    document.querySelector('#imperial').checked = true;
});

document.addEventListener('click', (event)=> {
    const imperial = document.querySelector('#imperial');
    const metric = document.querySelector('#metric');
    const imperialWrapper = document.querySelector(".imperial-wrapper");
    const essentialsHead = document.querySelector(".essentials-container h5");
    const metricWrapper = document.querySelector(".metric-wrapper");

    const switchUnitDisplay = function(unit, wrapper, wrapperAlt) {
        if (unit.checked === false) { unit.checked = true; }
        wrapper.style.display = "none";
        wrapperAlt.style.display = "flex";
    }

	if (event.target.matches('#metric')) {
        switchUnitDisplay(metric, imperialWrapper, metricWrapper);
        essentialsHead.innerHTML = 'Essentials &mdash; Metric';
	}
    if (event.target.matches('#imperial')) {
        switchUnitDisplay(imperial, metricWrapper, imperialWrapper);
        essentialsHead.innerHTML = 'Essentials &mdash; Imperial';
	}

}, false);

document.addEventListener('submit', (event)=> {
    if (event.target.matches('#input-user-data')) {
        alert('Works');
    }
}, false);