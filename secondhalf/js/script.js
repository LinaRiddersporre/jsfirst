// document.querySelectorAll('a')[3].setAttribute('class', 'active');

document.querySelector("a").classList.add("active");

// document.getElementById('img.logo')
document.querySelector('img').classList.remove('logo');

document.querySelectorAll('img')[2].style.width = '50%';
document.querySelectorAll('img')[3].style.width = '50%';
document.querySelectorAll('img')[4].style.width = '50%';


// var image = document.querySelectorAll('img')[2];
// image.style.width = '50%';

console.log(document.querySelectorAll('img'));

document.querySelector('nav').appendChild(document.createElement('a'));
document.querySelectorAll('a')[3].innerHTML = 'Test';

// let test = document.createElement('a');
// document.querySelector('#header-navigation').appendChild(test);
// test.innerHTML = 'Test';

console.log(document.querySelectorAll('a'));

document.querySelector('#header-navigation').removeChild(document.querySelectorAll('a')[2]);

//skapar en ny article i main
document.querySelector('main').appendChild(document.createElement('article'));
document.querySelectorAll('article')[3] = '.art-3';

document.querySelectorAll('article')[3].classList.add('art-4');

//skapar figure i den nya articlen
document.querySelectorAll('article')[3].appendChild(document.createElement('figure'));

//adderar bilden
document.querySelectorAll('figure')[3].appendChild(document.createElement('img'));
document.querySelectorAll('img')[5].setAttribute('src', 'img/hoodie-forest.png');

//ändrar bildstorleken
document.querySelectorAll('img')[5].style.width = '50%';

//skapar ett h2 element 
document.querySelectorAll('article')[3].appendChild(document.createElement('h2'));
document.querySelectorAll('h2')[3].setAttribute('h2', 'Sinus Hoodie');

//ger h2 text
document.querySelectorAll ('h2')[3].innerHTML = 'Sinus Hoodie';

//skapar ett h3 element
document.querySelectorAll('article')[3].appendChild(document.createElement('h3'));
document.querySelectorAll('h3')[3].setAttribute('h3', 'Forest');

//ger h3 text
document.querySelectorAll ('h3')[3].innerHTML = 'Forest';

//skapar ett p element
document.querySelectorAll('article')[3].appendChild(document.createElement('p'));
document.querySelectorAll('p')[3].setAttribute('p', 'Den nya produkten');

//ger p text
document.querySelectorAll ('p')[3].innerHTML = 'Den nya produkten';



document.querySelectorAll('a')[8].remove(document.querySelectorAll('a'));
document.querySelectorAll('a')[7].remove(document.querySelectorAll('a'));
document.querySelectorAll('a')[6].remove(document.querySelectorAll('a'));


document.querySelector('.art-1').appendChild(document.createElement('button'));
document.querySelectorAll('button')[1].innerHTML = 'Buy';
// document.querySelector('articel')style.add ('button')

document.querySelector('.art-2').appendChild(document.createElement('button'));
document.querySelectorAll('button')[3].innerHTML = 'Buy';

document.querySelector('.art-3').appendChild(document.createElement('button'));
document.querySelectorAll('button')[5].innerHTML = 'Buy';

console.log(document.querySelectorAll('button'));

console.log(document.querySelectorAll('h2'));

//skapar knappar
document.querySelector('.art-4').appendChild(document.createElement('button'));
document.querySelectorAll('button')[6].innerHTML = 'buy';

document.querySelector('.art-4').appendChild(document.createElement('button'));
document.querySelectorAll('button')[7].innerHTML = 'Buy';
