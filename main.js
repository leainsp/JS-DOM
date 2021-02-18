let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    //oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';
box.style.backgroundImage

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.display = 'block';
//     heart[i].style.margin = '0 auto';
// }

heart.forEach(function (item, i, hearts) {
    heart[i].style.display = 'block';
    heart[i].style.margin = '0 auto';
});

let div = document.createElement('div'),
    text = document.createTextNode('hello');

div.classList.add('black');
//document.body.appendChild(div);
//wrapper.appendChild(div);

//div.innerHTML = '<h4>hello world</h4>';
div.textContent = 'hello world';
document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);
document.body.replaceChild(btn[1], circle[1]);





