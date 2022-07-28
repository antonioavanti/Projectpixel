//testing code performance

for (let i = 1; i <= 100; i++) {
  for (let j = 1; j <= 100; j++) {
    console.log('i and j are ', i, j);
  }
}

const startingTime = performance.now();

for (let i = 1; i <= 100; i++) {
  for (let j = 1; j <= 100; j++) {
    console.log('i and j are ', i, j);
  }
}

const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');

//document fragment

const fragment = document.createDocumentFragment();  // ← uses a DocumentFragment instead of a <div>

for (let i = 0; i < 2; i++) {
    const newElement = document.createElement('p');
    newElement.innerText = 'This is paragraph number ' + i;

    fragment.appendChild(newElement);
}

document.body.appendChild(fragment); // reflow and repaint here -- once!

// hide #comments
//document.getElementById("comments").style.display = "none";

// delete spam comments

// show #comments
//document.getElementById("comments").style.display = "block";

function addParagraph() {
    const para = document.createElement('p');
    para.textContent = 'JavaScript is single threaded!';
    document.body.appendChild(para);
}

function appendNewMessage() {
    const para = document.createElement('p');
    para.textContent = "Isn't that cool?";
    document.body.appendChild(para);
}

addParagraph();
appendNewMessage();
