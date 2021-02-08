//Page loads enables imperial units
window.addEventListener('load', ()=> {
    document.querySelector('#imperial').checked = true;
});

// Global variables
const imperialWrapper = document.querySelector(".imperial-wrapper");
const essentialsHead = document.querySelector(".essentials-container h5");
const metricWrapper = document.querySelector(".metric-wrapper");
const yourIcon = document.querySelectorAll('.your-icon');
const modal = document.querySelector('.modal');
const messagePara = document.querySelector('.message p');
const closeBtn = document.querySelector('.close');
const dinoContainer  = document.querySelector('.dino-container');
let avatarIcon = '';

//User Constructor
function User (name, color, icon, feet, inches, pounds, centimeters, kilometers, diet){
    this.name = name;
    this.color = color;
    this.icon = icon;
    this.feet = feet;
    this.inches = inches;
    this.pounds = pounds;
    this.centimeters = centimeters;
    this.kilometers = kilometers;
    this.diet = diet;
}

//UI Constructor
function UI() {}
UI.prototype.addUserToDisplay = function (user) {
    console.log(user);
}

document.addEventListener('click', (event)=> {
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
    if (event.target.matches('.close-display')) {
        dinoContainer.style.display = 'none';
    }
    if (event.target.matches('.your-icon')) {

        yourIcon.forEach((image) => {
            if (image.getAttribute("style") == null || image.getAttribute("style") == "") {
                event.target.setAttribute("style", "filter: invert(36%) sepia(32%) saturate(2476%) hue-rotate(333deg) brightness(85%) contrast(100%)");
                avatarIcon = event.target.alt;
            } else {
                image.removeAttribute("style");
                event.target.setAttribute("style", "filter: invert(36%) sepia(32%) saturate(2476%) hue-rotate(333deg) brightness(85%) contrast(100%)");
                avatarIcon = event.target.alt;
            }
            });
    }
}, false);


document.addEventListener('submit', (event)=> {
    // Prevent default form behavior
    event.preventDefault();

    // Get form values
    const name = document.querySelector('#your-name').value;
    const color = document.querySelector('#favcolor').value;
    const avatar = avatarIcon; 
    const feet = document.querySelector('#feet-imperial').value;
    const inches = document.querySelector('#inches-imperial').value;
    const pounds = document.querySelector('#pounds-imperial').value;
    const centimeters = document.querySelector('#cm-metric').value;
    const kilometers = document.querySelector('#kilo-metric').value;
    const diet = document.querySelector('#diet').value;

    //Instantiate Person
    const user = new User(name, color, avatar, feet, inches, pounds, centimeters, kilometers, diet);

    //Instantiate UI
    const ui = new UI();
    ui.addUserToDisplay(user);

    if (event.target.matches('#input-user-data')) {
        if (imperialWrapper.classList.contains('active')){
            if (name === '' || feet == '' || inches === '' || pounds === '') {
                modal.style.display = 'block';
                messagePara.textContent = 'No biggie, stuff like this happens. Please resubmit your imperial units. Thanks.';
            } else {
                console.log(name + " " + " " + feet + " " + inches);
                dinoContainer.style.display = 'block';
            }
        }
        if (metricWrapper.classList.contains('active')){
            if (name === '' || centimeters == '' || kilometers === '') {
                modal.style.display = 'block';
                messagePara.textContent = 'No biggie, stuff like this happens. Please resubmit your metric units. Thanks.';
            } else {
                alert('Metric success, let us store some data.');
                dinoContainer.style.display = 'block';
            }
        }
        closeBtn.addEventListener('click', ()=>{
            modal.style.display = 'none';
        });
    }
}, false);

