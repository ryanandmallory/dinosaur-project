const dinoWrapper = document.querySelector('.dino-wrapper');
const dinoRow = document.querySelector('.dino-row');

const createDinoTile = function(image, species){
    
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
    const paraTxt = document.createTextNode('Lorem ipsum dolor sit amet consectetur, adipisicing elit quam provident asperiores! Distinctio eaque fuga ratione');

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

const createUserTile = function(avatar, name, color){
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
    const paraTxt = document.createTextNode('Lorem ipsum dolor sit amet consectetur, adipisicing elit quam provident asperiores! Distinctio eaque fuga ratione');

    divTile.appendChild(img);
    h3.appendChild(h3Txt);
    divTile.appendChild(h3);
    para.appendChild(paraTxt);
    divTile.appendChild(para);
    dinoRow.appendChild(divTile);
    dinoWrapper.appendChild(dinoRow);
}