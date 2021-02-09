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

// UI Dinosaur
UI.prototype.addDinoToDisplay = function (triceratops, tyrannosaurus, anklyosaurus, brachiosaurus, stegosaurus, elasmosaurus, pteranodon, pigeon) {
    UI.prototype.addUserToDisplay = function (user) {    
    createDinoTile(triceratops.image, triceratops.species);
    createDinoTile(tyrannosaurus.image, tyrannosaurus.species);
    createDinoTile(anklyosaurus.image, anklyosaurus.species);
    createDinoTile(brachiosaurus.image, brachiosaurus.species);
    createUserTile(user.icon, user.name, user.color); 
    createDinoTile(stegosaurus.image, stegosaurus.species);
    createDinoTile(elasmosaurus.image, elasmosaurus.species);
    createDinoTile(pteranodon.image, pteranodon.species);
    createDinoTile(pigeon.image, pigeon.species);
    }
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

//Create Dino Displays
function DinoCreate (species, image, weight, height, diet, where, when, fact) {
    this.species = species;
    this.image = image;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
}

fetch('../js/dino.json')
  .then(response => {
    return response.json().then( obj=> {
        //Instantiate Dinos from JSON file
        const triceratops = new DinoCreate(obj.Dinos[0].species, obj.Dinos[0].image, obj.Dinos[0].weight, obj.Dinos[0].height, obj.Dinos[0].diet, obj.Dinos[0].where, obj.Dinos[0].when, obj.Dinos[0].fact);
        const tyrannosaurus = new DinoCreate(obj.Dinos[1].species, obj.Dinos[1].image, obj.Dinos[1].weight, obj.Dinos[1].height, obj.Dinos[1].diet, obj.Dinos[1].where, obj.Dinos[1].when, obj.Dinos[1].fact);
        const anklyosaurus = new DinoCreate(obj.Dinos[2].species, obj.Dinos[2].image, obj.Dinos[2].weight, obj.Dinos[2].height, obj.Dinos[2].diet, obj.Dinos[2].where, obj.Dinos[2].when, obj.Dinos[2].fact);
        const brachiosaurus = new DinoCreate(obj.Dinos[3].species, obj.Dinos[3].image, obj.Dinos[3].weight, obj.Dinos[3].height, obj.Dinos[3].diet, obj.Dinos[3].where, obj.Dinos[3].when, obj.Dinos[3].fact);
        const stegosaurus = new DinoCreate(obj.Dinos[4].species, obj.Dinos[4].image, obj.Dinos[4].weight, obj.Dinos[4].height, obj.Dinos[4].diet, obj.Dinos[4].where, obj.Dinos[4].when, obj.Dinos[4].fact);
        const elasmosaurus = new DinoCreate(obj.Dinos[5].species, obj.Dinos[5].image, obj.Dinos[5].weight, obj.Dinos[5].height, obj.Dinos[5].diet, obj.Dinos[5].where, obj.Dinos[5].when, obj.Dinos[5].fact);
        const pteranodon = new DinoCreate(obj.Dinos[6].species, obj.Dinos[6].image, obj.Dinos[6].weight, obj.Dinos[6].height, obj.Dinos[6].diet, obj.Dinos[6].where, obj.Dinos[6].when, obj.Dinos[6].fact);
        const pigeon = new DinoCreate(obj.Dinos[7].species, obj.Dinos[7].image, obj.Dinos[7].weight, obj.Dinos[7].height, obj.Dinos[7].diet, obj.Dinos[7].where, obj.Dinos[7].when, obj.Dinos[7].fact);
        
        //Instantiate UI
        const ui = new UI();
        ui.addDinoToDisplay(triceratops, tyrannosaurus, anklyosaurus, brachiosaurus, stegosaurus, elasmosaurus, pteranodon, pigeon);

    }).catch ( error => {
        console.log('Something went wrong, please check your code.');
        console.error(error);
    });
});


