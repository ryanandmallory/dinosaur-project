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
        wrapper.classList.remove('active');
        wrapperAlt.style.display = "flex";
        wrapperAlt.classList.add('active');
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
    // Form field validation
    const imperialWrapper = document.querySelector('.imperial-wrapper');
    const metricWrapper = document.querySelector('.metric-wrapper');
    const yourName = document.querySelector('#your-name');
    const feetImperial = document.querySelector('#feet-imperial');
    const inchesImperial = document.querySelector('#inches-imperial');
    const poundsImperial = document.querySelector('#pounds-imperial');
    const cmMetric = document.querySelector('#cm-metric');
    const kiloMetric = document.querySelector('#kilo-metric');

    if (event.target.matches('#input-user-data')) {
        if (imperialWrapper.classList.contains('active')){
            if (yourName.value === '' || feetImperial.value == '' || inchesImperial.value === '' || poundsImperial.value === '') {
                alert('Please fill out your imperial information.')
            }
            else {
                alert('Thank you for your imperial information.');
            }
        }
        if (metricWrapper.classList.contains('active')){
            if (yourName.value === '' || cmMetric.value == '' || kiloMetric.value === '') {
                alert('Please fill out your metric information.')
            }
            else {
                alert('Thank you for your metric information.');
            }
        } 
    }
}, false);