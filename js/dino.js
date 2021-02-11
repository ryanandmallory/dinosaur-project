const dinoWrapper = document.querySelector('.dino-wrapper');
const dinoRow = document.querySelector('.dino-row');
const dinoMainModal = document.querySelector('.dino-main-modal');

const createDinoTile = function(image, species, fact){
    
    const divTile = document.createElement('div');
    const img = document.createElement('img');
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const para = document.createElement("p");
    const button = document.createElement('button');

    divTile.setAttribute("class", "dino-display");

    img.src = image;
    img.alt = species;
    img.setAttribute("class", "dino-img");
    
    div.setAttribute("class", "dino-content");
    
    h3.setAttribute("class", "dino-head");
    const h3Txt = document.createTextNode(species);
    
    para.setAttribute("class", "dino-desc");
    const paraTxt = document.createTextNode(fact);

    button.setAttribute("class", "dino-btn");
    const btnTxt = document.createTextNode("Learn More");

    h3.appendChild(h3Txt)
    div.appendChild(h3);
    para.appendChild(paraTxt);
    div.appendChild(para);
    button.appendChild(btnTxt);
    div.appendChild(button);
    divTile.appendChild(img);
    divTile.appendChild(div);
    dinoRow.appendChild(divTile);
    dinoWrapper.appendChild(dinoRow);
}

const createUserTile = function(avatar, name, color, fact){
    const divTile = document.createElement('div');
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const para = document.createElement("p");

    divTile.setAttribute("class", "dino-display user");
    divTile.style.backgroundColor = color;

    if (avatar === 'Dad'){ img.src = '../img/dad.svg'; }
    if (avatar === 'Mom'){ img.src = '../img/mom.svg'; }
    if (avatar === 'Boy'){ img.src = '../img/boy.svg'; }
    if (avatar === 'Girl'){ img.src = '../img/girl.svg'; }
    if (avatar === 'Person'){ img.src = '../img/person.svg'; }
    if (avatar === ''){ img.src = '../img/person.svg'; }

    img.alt = name;
    img.setAttribute("class", "dino-img");
        
    h3.setAttribute("class", "dino-head");
    const h3Txt = document.createTextNode(name);
    
    para.setAttribute("class", "dino-desc");
    const paraTxt = document.createTextNode(fact);

    divTile.appendChild(img);
    h3.appendChild(h3Txt);
    divTile.appendChild(h3);
    para.appendChild(paraTxt);
    divTile.appendChild(para);
    dinoRow.appendChild(divTile);
    dinoWrapper.appendChild(dinoRow);
}

const createDinoMainDisplay = function (name) {
    //  Create modal display variables
    const innerDiv = document.createElement('div');
    const dinoImg = document.createElement('img');
    const dinoH2 = document.createElement('h2');
    const dinoSummary = document.createElement('p');
    const dinoDesc = document.createElement('p');
    const dinoStats1 = document.createElement('p');
    const dinoStats2 = document.createElement('p');
    const dinoStats3 = document.createElement('p');
    const dinoStats4 = document.createElement('p');
    const dinoStats5 = document.createElement('p');
    const dinoClose = document.createElement('span');

    // Establish modal display classes
    innerDiv.setAttribute("class", "dino-inner-div");
    dinoImg.setAttribute("class", "dino-main-img");
    dinoH2.setAttribute("class", "dino-head-h2");
    dinoSummary.setAttribute("class", "dino-summary-p");
    dinoDesc.setAttribute("class", "dino-desc-p");
    dinoStats1.setAttribute("class", "dino-stats");
    dinoStats2.setAttribute("class", "dino-stats");
    dinoStats3.setAttribute("class", "dino-stats");
    dinoStats4.setAttribute("class", "dino-stats");
    dinoStats5.setAttribute("class", "dino-stats");
    dinoClose.setAttribute("class", "dino-close-span");

    // Place content in modal display
    dinoImg.alt = name;
    dinoImg.src = name.image
    const h2Txt = document.createTextNode(name.species);
    const summaryTxt = document.createTextNode(name.fact);
    const descTxt = document.createTextNode('Here are some staggering specs:');
    const dinoStatsTxt1 = document.createTextNode(`Weight: ${name.weight}`);
    const dinoStatsTxt2 = document.createTextNode(`Height: ${name.height}`);
    const dinoStatsTxt3 = document.createTextNode(`Diet: ${name.diet}`);
    const dinoStatsTxt4 = document.createTextNode(`Where: ${name.where}`);
    const dinoStatsTxt5 = document.createTextNode(`When: ${name.when}`);
    const closeSpan = document.createTextNode('X');

    // Append content to element
    dinoH2.appendChild(h2Txt);
    dinoSummary.appendChild(summaryTxt);
    dinoDesc.appendChild(descTxt);
    dinoStats1.appendChild(dinoStatsTxt1);
    dinoStats2.appendChild(dinoStatsTxt2);
    dinoStats3.appendChild(dinoStatsTxt3);
    dinoStats4.appendChild(dinoStatsTxt4);
    dinoStats5.appendChild(dinoStatsTxt5);
    dinoClose.appendChild(closeSpan);

    // Append element to div containers
    innerDiv.appendChild(dinoImg);
    innerDiv.appendChild(dinoH2);
    innerDiv.appendChild(dinoSummary);
    innerDiv.appendChild(dinoDesc);
    innerDiv.appendChild(dinoStats1);
    innerDiv.appendChild(dinoStats2);
    innerDiv.appendChild(dinoStats3);
    innerDiv.appendChild(dinoStats4);
    innerDiv.appendChild(dinoStats5);

    dinoMainModal.appendChild(dinoClose);
    dinoMainModal.appendChild(innerDiv);
}