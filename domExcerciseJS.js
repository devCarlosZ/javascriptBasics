// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);


const para1 = document.createElement('p');
para1.textContent = 'Hey I\'m red!';
para1.style.color = 'red';
container.appendChild(para1);

const headline3 = document.createElement('h3');
headline3.textContent  = 'I\'m a blue h3!';
headline3.style.color = 'blue';
container.appendChild(headline3);


const pinkDiv = document.createElement('div');
pinkDiv.style.backgroundColor = 'pink';
pinkDiv.style.border = '1px solid black';

const headline1 = document.createElement('h1');
headline1.textContent = 'I\'m a div'
pinkDiv.appendChild(headline1);

const para2 = document.createElement('p');
para2.textContent = ('ME TOO!');
pinkDiv.appendChild(para2);

container.appendChild(pinkDiv);

console.log("You've made it to line 35 so far.");


const button1 = document.querySelector('#btn1');
const btn1 = document.createElement('button');
btn1.textContent = 'I\'m a button';
btn1.addEventListener('click', () => { 
    alert("Hello World");
});
button1.appendChild(btn1);

const button2 = document.querySelector('#btn2');
const btn2 = document.createElement('button');
btn2.textContent = 'Button calls event type w/ function on console.log';
btn2.addEventListener('click', function(e) {
    console.log(e);
});
button2.appendChild(btn2);

const button3 = document.querySelector('#btn3');
const btn3 = document.createElement('button');
btn3.textContent = 'Button calls event target w/ function on console.log';
btn3.addEventListener('click', function (e) {
    console.log(e.target);
});
button3.appendChild(btn3);

const button4 = document.querySelector('#btn4');
const btn4 = document.createElement('button');
btn4.textContent = 'Button calls target and changes background color';
btn4.addEventListener('click', function (e) {
    e.target.style.background = 'aqua';
});
button4.appendChild(btn4);

// Attaching listeners to a group of nodes
const buttons = document.querySelectorAll('#container1>button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', (e) => {
    alert("I am button " + button.id);
  });
});