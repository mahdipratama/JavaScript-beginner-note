// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123; //can only number
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);


// GET ELEMENT BY ID //

// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title')
// let header = document.getElementById('main-header')
// console.log(headerTitle);
// headerTitle.textContent = 'hawow'
// headerTitle.innerText = 'baybay'
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h4>Hello</h4>';
// header.style.borderBottom = 'solid 3px #000'


// GET ELEMENT BY CLASS NAME //

// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello two';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'lightpink';

// // Causes error
// // items.style.backgroundColor = 'lightgray'

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = '#f4f4f4'
// }


// GET ELEMENT BY TAG NAME //

// let li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'hello two';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'lightpink';

// // Causes error
// // items.style.backgroundColor = 'lightgray'

// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = '#f4f4f4'
// }


// QUERY SELECTOR //

// let header = document.querySelector('#main-header')
// header.style.borderBottom = 'solid 4px black'

// let input = document.querySelector('input');
// input.value = 'Hello input'

// let submit = document.querySelector('input[type="submit"]');
// submit.value = 'KIRIM';

// let itemsBold = document.querySelector
// ('.list-group') 
// itemsBold.style.fontWeight = '500'

// let firstItem = document.querySelector('.list-group-item')
// firstItem.style.color = 'red';

// let secondItem = document.querySelector
// ('.list-group-item:nth-of-type(2)')
// secondItem.style.color = 'green'

// let lastItem = document.querySelector
// ('.list-group-item:nth-of-type(4)');
// lastItem.style.color = 'blue';


let titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'Masukan Item';

let ganjil = document.querySelectorAll('li:nth-child(odd)');
let genap = document.querySelectorAll('li:nth-child(even)');


for (let i = 0; i < ganjil.length; i++) {
  ganjil[i].style.backgroundColor = '#f4f4f4'
  genap[i].style.backgroundColor = '#ccc'
}