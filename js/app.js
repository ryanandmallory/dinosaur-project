// Global variables
const imperialWrapper = document.querySelector(".imperial-wrapper");
const essentialsHead = document.querySelector(".essentials-container h5");
const metricWrapper = document.querySelector(".metric-wrapper");
const modal = document.querySelector('.modal');
const messagePara = document.querySelector('.message p');
const closeBtn = document.querySelector('.close');
const dinoContainer  = document.querySelector('.dino-container');
let imperialFlag;

//Page loads enables imperial units
window.addEventListener('load', ()=> {
    document.querySelector('#imperial').checked = true;
});

// Item Controller
const ItemCtrl = (function(){
    // Item Globals
    let triceratops, tyrannosaurus, anklyosaurus, brachiosaurus, stegosaurus, elasmosaurus, pteranodon, pigeon;
    // Constructor
    const Dino = function(species, image, weight, height, diet, where, when, fact){
        this.species = species;
        this.image = image;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
    }
    fetch('../js/dino.json').then(response => {
        return response.json().then( obj=> {
            //Instantiate Dinos from JSON file
            triceratops = new Dino(obj.Dinos[0].species, obj.Dinos[0].image, obj.Dinos[0].weight, obj.Dinos[0].height, obj.Dinos[0].diet, obj.Dinos[0].where, obj.Dinos[0].when, obj.Dinos[0].fact);
            tyrannosaurus = new Dino(obj.Dinos[1].species, obj.Dinos[1].image, obj.Dinos[1].weight, obj.Dinos[1].height, obj.Dinos[1].diet, obj.Dinos[1].where, obj.Dinos[1].when, obj.Dinos[1].fact);
            anklyosaurus = new Dino(obj.Dinos[2].species, obj.Dinos[2].image, obj.Dinos[2].weight, obj.Dinos[2].height, obj.Dinos[2].diet, obj.Dinos[2].where, obj.Dinos[2].when, obj.Dinos[2].fact);
            brachiosaurus = new Dino(obj.Dinos[3].species, obj.Dinos[3].image, obj.Dinos[3].weight, obj.Dinos[3].height, obj.Dinos[3].diet, obj.Dinos[3].where, obj.Dinos[3].when, obj.Dinos[3].fact);
            stegosaurus = new Dino(obj.Dinos[4].species, obj.Dinos[4].image, obj.Dinos[4].weight, obj.Dinos[4].height, obj.Dinos[4].diet, obj.Dinos[4].where, obj.Dinos[4].when, obj.Dinos[4].fact);
            elasmosaurus = new Dino(obj.Dinos[5].species, obj.Dinos[5].image, obj.Dinos[5].weight, obj.Dinos[5].height, obj.Dinos[5].diet, obj.Dinos[5].where, obj.Dinos[5].when, obj.Dinos[5].fact);
            pteranodon = new Dino(obj.Dinos[6].species, obj.Dinos[6].image, obj.Dinos[6].weight, obj.Dinos[6].height, obj.Dinos[6].diet, obj.Dinos[6].where, obj.Dinos[6].when, obj.Dinos[6].fact);
            pigeon = new Dino(obj.Dinos[7].species, obj.Dinos[7].image, obj.Dinos[7].weight, obj.Dinos[7].height, obj.Dinos[7].diet, obj.Dinos[7].where, obj.Dinos[7].when, obj.Dinos[7].fact);

        }).catch ( error => {
            console.log('Something went wrong, please check your code.');
            console.error(error);
        });
    });
    // Data Structure
    const data = {
        name: null,
        avatar: null,
        bkgColor: null,
        imperial: null,
        metric: null,
        feet: null,
        inches: null,
        pounds: null,
        cm: null,
        kg: null,
        diet: null
    }
    return {
        getDinoInput: function(){
            return [
                { species: triceratops.species, image: triceratops.image, weight: triceratops.weight, height: triceratops.height, diet: triceratops.diet, where: triceratops.where, when: triceratops.when, fact: triceratops.fact },
                { species: tyrannosaurus.species, image: tyrannosaurus.image, weight: tyrannosaurus.weight, height: tyrannosaurus.height, diet: tyrannosaurus.diet, where: tyrannosaurus.where, when: tyrannosaurus.when, fact: tyrannosaurus.fact },
                { species: anklyosaurus.species, image: anklyosaurus.image, weight: anklyosaurus.weight, height: anklyosaurus.height, diet: anklyosaurus.diet, where: anklyosaurus.where, when: anklyosaurus.when, fact: anklyosaurus.fact },
                { species: brachiosaurus.species, image: brachiosaurus.image, weight: brachiosaurus.weight, height: brachiosaurus.height, diet: brachiosaurus.diet, where: brachiosaurus.where, when: brachiosaurus.when, fact: brachiosaurus.fact },
                { species: stegosaurus.species, image: stegosaurus.image, weight: stegosaurus.weight, height: stegosaurus.height, diet: stegosaurus.diet, where: stegosaurus.where, when: stegosaurus.when, fact: stegosaurus.fact },
                { species: elasmosaurus.species, image: elasmosaurus.image, weight: elasmosaurus.weight, height: elasmosaurus.height, diet: elasmosaurus.diet, where: elasmosaurus.where, when: elasmosaurus.when, fact: elasmosaurus.fact },
                { species: pteranodon.species, image: pteranodon.image, weight: pteranodon.weight, height: pteranodon.height, diet: pteranodon.diet, where: pteranodon.where, when: pteranodon.when, fact: pteranodon.fact },
                { species: pigeon.species, image: pigeon.image, weight: pigeon.weight, height: pigeon.height, diet: pigeon.diet, where: pigeon.where, when: pigeon.when, fact: pigeon.fact },
            ]
        }
    }
})();

// UI Controller
const UICtrl = (function(){
    let avatarIcon = '';
    const UISelectors = {
        nameSelect: "#your-name",
        avatarSelect: ".your-icon",
        bkgColorSelect: "#favcolor",
        imperialSelect: "#imperial",
        metricSelect: "#metric",
        feetSelect: "#feet-imperial",
        inchesSelect: "#inches-imperial",
        poundsSelect: "#pounds-imperial",
        cmSelect: "#cm-metric",
        kgSelect: "#kilo-metric",
        dietSelect: "#diet",
        button: "#submit-btn",
        icon: ".your-icon"
    }
    return {
        getUserInput: function() {
            return {
                name: document.querySelector(UISelectors.nameSelect).value,
                avatar: document.querySelector(UISelectors.avatarSelect).alt,
                bkgColor: document.querySelector(UISelectors.bkgColorSelect).value,
                imperial: document.querySelector(UISelectors.imperialSelect).value,
                metric: document.querySelector(UISelectors.metricSelect).value,
                feet: document.querySelector(UISelectors.feetSelect).value,
                inches: document.querySelector(UISelectors.inchesSelect).value,
                pounds: document.querySelector(UISelectors.poundsSelect).value,
                cm: document.querySelector(UISelectors.cmSelect).value,
                kg: document.querySelector(UISelectors.kgSelect).value,
                diet: document.querySelector(UISelectors.dietSelect).value,
            }
        },
        getSelectors: function(){
            return UISelectors;
        },
        getConvertInchesToCentimeters: function() {
           const totalInches = Number(UICtrl.getUserInput().feet * 12);
           const leftOverInches = Number(UICtrl.getUserInput().inches);
           const totalUserInches = totalInches + leftOverInches;
           const totalUserCM = Math.round(totalUserInches * 2.54);
           return totalUserCM;
        },
        getConvertPoundsToKilograms: function () {
            const totalPounds = Number(UICtrl.getUserInput().pounds);
            const totalUserKG = Math.round(totalPounds / 2.205);
            return totalUserKG;
        },
        getAvatarIcon : function () {
            if (avatarIcon === ''){
                avatarIcon = 'Person';
            }
            return avatarIcon;
        }
    }

})();

// App Controller
const App = (function(){
    const loadEventListeners = function (){
        const UISelectors = UICtrl.getSelectors();
        document.querySelector(UISelectors.button).addEventListener('click', submitUser);
        document.addEventListener('click', function (event) {
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
                document.querySelectorAll('.dino-display').forEach(display => display.remove());
                dinoContainer.style.display = 'none';
            }
            if (event.target.matches('.dino-btn')) {
                const dinoName = event.target.previousElementSibling.previousElementSibling.innerHTML;
                if (dinoName === 'Triceratops'){ createDinoMainDisplay(ItemCtrl.getDinoInput()[0].species, ItemCtrl.getDinoInput()[0].image, ItemCtrl.getDinoInput()[0].fact, ItemCtrl.getDinoInput()[0].weight, ItemCtrl.getDinoInput()[0].height, ItemCtrl.getDinoInput()[0].diet, ItemCtrl.getDinoInput()[0].where, ItemCtrl.getDinoInput()[0].when); }
                if (dinoName === 'Tyrannosaurus Rex'){ createDinoMainDisplay(ItemCtrl.getDinoInput()[1].species, ItemCtrl.getDinoInput()[1].image, ItemCtrl.getDinoInput()[1].fact, ItemCtrl.getDinoInput()[1].weight, ItemCtrl.getDinoInput()[1].height, ItemCtrl.getDinoInput()[1].diet, ItemCtrl.getDinoInput()[1].where, ItemCtrl.getDinoInput()[1].when); }
                if (dinoName === 'Anklyosaurus'){ createDinoMainDisplay(ItemCtrl.getDinoInput()[2].species, ItemCtrl.getDinoInput()[2].image, ItemCtrl.getDinoInput()[2].fact, ItemCtrl.getDinoInput()[2].weight, ItemCtrl.getDinoInput()[2].height, ItemCtrl.getDinoInput()[2].diet, ItemCtrl.getDinoInput()[2].where, ItemCtrl.getDinoInput()[2].when); }
                if (dinoName === 'Brachiosaurus'){ createDinoMainDisplay(ItemCtrl.getDinoInput()[3].species, ItemCtrl.getDinoInput()[3].image, ItemCtrl.getDinoInput()[3].fact, ItemCtrl.getDinoInput()[3].weight, ItemCtrl.getDinoInput()[3].height, ItemCtrl.getDinoInput()[3].diet, ItemCtrl.getDinoInput()[3].where, ItemCtrl.getDinoInput()[3].when); }
                if (dinoName === 'Stegosaurus'){ createDinoMainDisplay(ItemCtrl.getDinoInput()[4].species, ItemCtrl.getDinoInput()[4].image, ItemCtrl.getDinoInput()[4].fact, ItemCtrl.getDinoInput()[4].weight, ItemCtrl.getDinoInput()[4].height, ItemCtrl.getDinoInput()[4].diet, ItemCtrl.getDinoInput()[4].where, ItemCtrl.getDinoInput()[4].when); }
                if (dinoName === 'Elasmosaurus'){ createDinoMainDisplay(ItemCtrl.getDinoInput()[0].species, ItemCtrl.getDinoInput()[0].image, ItemCtrl.getDinoInput()[0].fact, ItemCtrl.getDinoInput()[5].weight, ItemCtrl.getDinoInput()[5].height, ItemCtrl.getDinoInput()[5].diet, ItemCtrl.getDinoInput()[5].where, ItemCtrl.getDinoInput()[5].when); }
                if (dinoName === 'Pteranodon'){ createDinoMainDisplay(ItemCtrl.getDinoInput()[6].species, ItemCtrl.getDinoInput()[6].image, ItemCtrl.getDinoInput()[6].fact, ItemCtrl.getDinoInput()[6].weight, ItemCtrl.getDinoInput()[6].height, ItemCtrl.getDinoInput()[6].diet, ItemCtrl.getDinoInput()[6].where, ItemCtrl.getDinoInput()[6].when); }
                if (dinoName === 'Pigeon'){ createDinoMainDisplay(ItemCtrl.getDinoInput()[7].species, ItemCtrl.getDinoInput()[7].image, ItemCtrl.getDinoInput()[7].fact, ItemCtrl.getDinoInput()[7].weight, ItemCtrl.getDinoInput()[7].height, ItemCtrl.getDinoInput()[7].diet, ItemCtrl.getDinoInput()[7].where, ItemCtrl.getDinoInput()[7].when); }
                document.querySelector('.dino-main-modal').style.display = 'flex';
                document.querySelector('.dino-container').style.display = 'none';
            }
            if (event.target.matches('.dino-close-span')) {
                const close = document.querySelector('.dino-close-span');
                const dinoInnerDiv = document.querySelector('.dino-inner-div');
                close.remove();
                dinoInnerDiv.remove();
                document.querySelector('.dino-main-modal').style.display = 'none';
                document.querySelector('.dino-container').style.display = 'block';
            }
            if (event.target.matches('.your-icon')) {
                const yourIcon = document.querySelectorAll('.your-icon');
                yourIcon.forEach((image) => {
                    if (image.getAttribute("style") == null || image.getAttribute("style") == "") {
                        event.target.setAttribute("style", "filter: invert(36%) sepia(32%) saturate(2476%) hue-rotate(333deg) brightness(85%) contrast(100%)");
                        avatarIcon = event.target.alt;
                    } else {
                        image.removeAttribute("style");
                        event.target.setAttribute("style", "filter: invert(36%) sepia(32%) saturate(2476%) hue-rotate(333deg) brightness(85%) contrast(100%)");
                        avatarIcon = event.target.alt;
                    }
                return avatarIcon;
                });
            }
            if (event.target.matches('#reset')) {
                window.reload();
            }
        }, false);
    }
    const submitUser = function(e){
        e.preventDefault();
        const input = UICtrl.getUserInput();
        const dinoDisplay = ItemCtrl.getDinoInput();
        const UISelectors = UICtrl.getSelectors();
        if (imperialWrapper.classList.contains('active')){
            if (input.name !== "" && input.feet !== "" && input.inches !== "" && input.pounds !== ""){
                imperialFlag = true;
                dinoContainer.style.display = 'block';
                createDinoTile(dinoDisplay[0].image, dinoDisplay[0].species, randomizeFact(dinoDisplay[0].species, dinoDisplay[0].weight, dinoDisplay[0].height, dinoDisplay[0].diet, dinoDisplay[0].where, dinoDisplay[0].when, dinoDisplay[0].fact));
                createDinoTile(dinoDisplay[1].image, dinoDisplay[1].species, randomizeFact(dinoDisplay[1].species, dinoDisplay[1].weight, dinoDisplay[1].height, dinoDisplay[1].diet, dinoDisplay[1].where, dinoDisplay[1].when, dinoDisplay[1].fact));
                createDinoTile(dinoDisplay[2].image, dinoDisplay[2].species, randomizeFact(dinoDisplay[2].species, dinoDisplay[2].weight, dinoDisplay[2].height, dinoDisplay[2].diet, dinoDisplay[2].where, dinoDisplay[2].when, dinoDisplay[2].fact));
                createDinoTile(dinoDisplay[3].image, dinoDisplay[3].species, randomizeFact(dinoDisplay[3].species, dinoDisplay[3].weight, dinoDisplay[3].height, dinoDisplay[3].diet, dinoDisplay[3].where, dinoDisplay[3].when, dinoDisplay[3].fact));
                createUserTile(UICtrl.getAvatarIcon(), input.name, input.bkgColor, `Greetings ${input.name}, your height is ${input.feet} feet and ${input.inches} inches, and you weigh ${input.pounds} pounds. You're also and ${input.diet}, see how you compare with these reptilien beasts.`);
                createDinoTile(dinoDisplay[4].image, dinoDisplay[4].species, randomizeFact(dinoDisplay[4].species, dinoDisplay[4].weight, dinoDisplay[4].height, dinoDisplay[4].diet, dinoDisplay[4].where, dinoDisplay[4].when, dinoDisplay[4].fact));
                createDinoTile(dinoDisplay[5].image, dinoDisplay[5].species, randomizeFact(dinoDisplay[5].species, dinoDisplay[5].weight, dinoDisplay[5].height, dinoDisplay[5].diet, dinoDisplay[5].where, dinoDisplay[5].when, dinoDisplay[5].fact));
                createDinoTile(dinoDisplay[6].image, dinoDisplay[6].species, randomizeFact(dinoDisplay[6].species, dinoDisplay[6].weight, dinoDisplay[6].height, dinoDisplay[6].diet, dinoDisplay[6].where, dinoDisplay[6].when, dinoDisplay[6].fact));
                createDinoTile(dinoDisplay[7].image, dinoDisplay[7].species, dinoDisplay[7].fact);
            } else {
                modal.style.display = 'block';
                messagePara.textContent = 'No biggie, stuff like this happens. Please resubmit your imperial units. Thanks.';
            }
        }
        if (metricWrapper.classList.contains('active')){
            if (input.name !== "" && input.cm !== "" && input.km !== "") {
                imperialFlag = false;
                dinoContainer.style.display = 'block';
                createDinoTile(dinoDisplay[0].image, dinoDisplay[0].species, randomizeFact(dinoDisplay[0].species, dinoDisplay[0].weight, dinoDisplay[0].height, dinoDisplay[0].diet, dinoDisplay[0].where, dinoDisplay[0].when, dinoDisplay[0].fact));
                createDinoTile(dinoDisplay[1].image, dinoDisplay[1].species, randomizeFact(dinoDisplay[1].species, dinoDisplay[1].weight, dinoDisplay[1].height, dinoDisplay[1].diet, dinoDisplay[1].where, dinoDisplay[1].when, dinoDisplay[1].fact));
                createDinoTile(dinoDisplay[2].image, dinoDisplay[2].species, randomizeFact(dinoDisplay[2].species, dinoDisplay[2].weight, dinoDisplay[2].height, dinoDisplay[2].diet, dinoDisplay[2].where, dinoDisplay[2].when, dinoDisplay[2].fact));
                createDinoTile(dinoDisplay[3].image, dinoDisplay[3].species, randomizeFact(dinoDisplay[3].species, dinoDisplay[3].weight, dinoDisplay[3].height, dinoDisplay[3].diet, dinoDisplay[3].where, dinoDisplay[3].when, dinoDisplay[3].fact));
                createUserTile(UICtrl.getAvatarIcon(), input.name, input.bkgColor, `Greetings ${input.name}, your height is ${input.cm} centimeters and you weigh ${input.kg} kilograms. You're also and ${input.diet}, see how you compare with these reptilien beasts.`);
                createDinoTile(dinoDisplay[4].image, dinoDisplay[4].species, randomizeFact(dinoDisplay[4].species, dinoDisplay[4].weight, dinoDisplay[4].height, dinoDisplay[4].diet, dinoDisplay[4].where, dinoDisplay[4].when, dinoDisplay[4].fact));
                createDinoTile(dinoDisplay[5].image, dinoDisplay[5].species, randomizeFact(dinoDisplay[5].species, dinoDisplay[5].weight, dinoDisplay[5].height, dinoDisplay[5].diet, dinoDisplay[5].where, dinoDisplay[5].when, dinoDisplay[5].fact));
                createDinoTile(dinoDisplay[6].image, dinoDisplay[6].species, dinoDisplay[6].fact);
                createDinoTile(dinoDisplay[7].image, dinoDisplay[7].species, dinoDisplay[7].fact);
            } else {
                modal.style.display = 'block';
                messagePara.textContent = 'No biggie, stuff like this happens. Please resubmit your metric units. Thanks.';
            }
        }
        closeBtn.addEventListener('click', ()=>{
            modal.style.display = 'none';
        });
    }
    const randomizeFact = function (name, weight, height, diet, where, when, fact){
        let random = Math.floor(Math.random() * 5) + 1;
        const convertUserInchesToCentimeters = UICtrl.getConvertInchesToCentimeters();
        const convertUserPoundsToKilograms = UICtrl.getConvertPoundsToKilograms();
        if (name === 'Pteranodon'){
            if (random === 2) { return 'The ' + name + ' diet was a/an ' + diet + '.' }
            if (random === 3) { return 'The ' + name + ' roamed the ' + where + ' territory.' }
            if (random === 4) { return 'The ' + name + ' lived during the ' + when + ' time period.'; }
        }
        if (random === 1) {
            if (imperialFlag === false){
                return 'The ' + name + ' weighs approximately ' + Math.round(weight/UICtrl.getUserInput().kg) + ' times and it\'s height or mass is around ' + Math.round(height/UICtrl.getUserInput().cm) + ' times greather than you.'; 
            } else {
                return 'The ' + name + ' weighs approximately ' + Math.round(weight/convertUserPoundsToKilograms) + ' times and it\'s height or mass is around ' + Math.round(height/convertUserInchesToCentimeters) + ' times greather than you.'; 
            }
        }
        if (random === 2) { return 'The ' + name + ' diet was a/an ' + diet + '.' }
        if (random === 3) { return 'The ' + name + ' roamed the ' + where + ' territory.' }
        if (random === 4) { return 'The ' + name + ' lived during the ' + when + ' time period.'; }
        else { return fact; }
    }

    return {
        init: function(){
            loadEventListeners();
        }
    }

})(ItemCtrl, UICtrl);

App.init();

