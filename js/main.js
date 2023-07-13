// DOM - Document Object Model

// первый способ взаимодействия
// id
// let title = document.getElementById('main_title');
// console.log(title);

// tag name
// let items = document.getElementsByTagName('li');
// console.log(items);

// class
// let titles = document.getElementsByClassName('title');
// console.log(titles);

// name
// let inp = document.getElementsByName(['inp-name']);
// console.log(inp);

// второй способ взаимодействия
// let title = document.querySelector('#main_title');
// console.log(title);

// let titles = document.querySelectorAll('.title');
// console.log(titles);

// let list = document.querySelector('ul');
// console.log(list);

// let items = document.querySelectorAll('li');
// console.log(items);

// NodeList VS HTMLCollection
// 1. 
// let list = document.getElementsByTagName('ul');
// console.log(list[0].children); //HTMLCollection

// let list = document.querySelector('ul');
// console.log(list.childNodes); //NodeList

// 2. 
// let items = document.querySelectorAll('li');
// items[0].style.color = 'red';
// console.log(items[3]);
// console.log(items.length);

// let items2 = document.getElementsByTagName('li');
// console.log(items2[0]);
// console.log(items2.length);

// 3.
// let items = document.querySelectorAll('li');
// let items2 = document.getElementsByTagName('li');

// for(let i of items2) {
//     console.log(i);
// };

// 4. forEach доступен только для NodeList
// let items = document.querySelectorAll('li');
// let items2 = document.getElementsByTagName('li');
// items.forEach(item => {
//     console.log(item);
// });
// console.log(Object.entries(items2));

// 5.
// const ul = document.querySelector('ul');
// const button = document.querySelector('button');
// const li = document.querySelectorAll('li');
// const li = document.getElementsByTagName('li');

// button.addEventListener('click', () => {
//     const newLi = document.createElement('li');
//     newLi.innerText = 'New Text';
//     ul.append(newLi);
//     console.log(li);
// })

// 6.
// let items = document.querySelectorAll('li');
// let items2 = document.getElementsByTagName('li');
// let res = Array.from(items);
// let res2 = Array.from(items2);
// console.log(res, res2);

// innerHTML
// let list = document.querySelector('ul');
// console.log(list.innerHTML);
// console.log();
// list.innerHTML = '<li>New Elem</li>';
// list.innerHTML += '<li>New Elem</li>';

// let block = document.querySelector('#block');
// console.log(block);
// block.innerText = 'New Block';
// block.innerText = '<h1>Hello, JS!</h1>';
// block.innerHTML = '<h1>Hello, JS!</h1>';

// let titles = document.querySelectorAll('.title');
// console.log(titles);
// titles.forEach((title, index) => {
//     let prevText = title.innerText;
//     title.innerText = `Hello, ${prevText}!`;
    
//     if(index % 2 === 0) {
//         title.style.color = 'green';
//     };
// });

// let newTitle = document.createElement('h1');
// let ol = document.createElement('ol');
// console.log(newTitle);
// newTitle.innerText = 'Hello, world!';
// newTitle.style.color = 'yellow';
// let block = document.querySelector('#block');
// block.appendChild(newTitle, ol);
// block.append(newTitle, ol);
// block.appendChild('<li>Hello</li>');

// let block = document.querySelector('#block');
// let newTitle = document.createElement('h1');
// newTitle.innerText = 'Hello, world!';
// newTitle.style.color = 'yellow';
// block.append(newTitle);
// block.prepend(newTitle);
// block.before(newTitle);
// block.after(newTitle);

// classList
// let block = document.querySelector('#block');
// block.classList.add('block_style');
// block.classList.remove('text_style');
// block.classList.toggle('text_style');
// console.log(block.classList.contains('text_style'));

// let block = document.querySelector('#block');
// block.setAttribute('style',
//     'width: 200px; height: 200px; background: green;');
// block.setAttribute('class', 'block_style');
// block.classList.remove('block_style');
// block.removeAttribute('class');