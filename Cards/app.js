let container = document.createElement('div');
let names=['Ahmed','Ali','Gamal','Mohamed','Kareem','Mahmoud','Hazem','Gamal','John','Hazem','Mahmoud','Ali'];
let ages=['23 years old','33 years old','40 years old','22 years old','12 years old','34 years old','10 years old','55 years old','23 years old','22 years old','43 years old','20 years old'];
document.body.appendChild(container);
container.style.textAlign = 'center';

function elements(n , a) {
    //create elements
    let card = document.createElement('div');
    let title = document.createElement('h1');
    let age = document.createElement('p');
    let img = document.createElement('img');

    //create data
    let head = document.createTextNode(n);
    let agecontent = document.createTextNode(a);
    img.src = "images/photo-1570612861542-284f4c12e75f.jpeg";


    //assign data to elements
    title.appendChild(head);
    age.appendChild(agecontent);

    //assign tags to card
    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);
    //styling 
    card.style.width = '210px';
    img.style.width = '100%';
    img.style.borderRadius = '6px';
    card.style.border = '2px solid #BCB6B6';
    card.style.background = '#555';
    age.style.color = '#04aa6d';
    age.style.fontSize = '17px';
    card.style.padding = '5px';
    card.style.margin = '13px';
    card.style.display='inline-block';
    container.style.background="url('images/mainBcg.jpeg')";

    //assign card to main container
    container.appendChild(card);

}

for (let i = 0; i < 12; i++) {
    elements(names[i],ages[i]);
}




