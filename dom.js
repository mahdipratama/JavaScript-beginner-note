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


// let titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Masukan Item';

// let ganjil = document.querySelectorAll('li:nth-child(odd)');
// let genap = document.querySelectorAll('li:nth-child(even)');


// for (let i = 0; i < ganjil.length; i++) {
//   ganjil[i].style.backgroundColor = '#f4f4f4'
//   genap[i].style.backgroundColor = '#ccc'
// }



//---------------------------PART 2----------------------




// TRAVERSING THE DOM //

let itemList = document.querySelector('#items');
// //parentNode

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentNode.parentNode.parentNode);


// parentElement //

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentElement.parentElement.parentNode)


// childNodes (Not Suggested by brad) //

// console.log(itemList.childNodes);


// children (Suggested by Brad) //

// console.log(itemList.children);
// console.log(itemList.children[2]);
// itemList.children[2].style.backgroundColor = 'lightBlue'


// FirstChild (Not Suggested by Brad) //

// console.log(itemList.firstChild);


// first Element Child (Suggested by Brad) //

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello there!'
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello there!'


// nextSibling (Not Suggested by Brad) //
// console.log(itemList.nextSibling);


// nextELementSibling (Suggested by Brad) //
// console.log(itemList.nextElementSibling);


// previousSibling (Not suggested by Brad) //
// console.log(itemList.previousSibling);


// previousElementSibling (Suggested by Brad) //
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'limegreen'
// itemList.previousElementSibling.style.textTransform = 'uppercase'


// Create Element //

// // create a div //
// let newDiv = document.createElement('div');

// // Add class //
// newDiv.className = 'hello'

// // Add id //
// newDiv.id = 'hello1'

// // Add attr
// newDiv.setAttribute('title', 'Hello Div');

// // Create text node //
// let newDivText = document.createTextNode('Hello World');

// // Add text to div //
// newDiv.appendChild(newDivText);

// let container = document.querySelector('header .container')
// let h1 = document.querySelector('header h1')

// console.log(newDiv);

// newDiv.style.fontSize = '1.5em';

// container.insertBefore(newDiv, h1);



//---------------------------PART 3----------------------

// EVENTS // 

// let button = document.getElementById('button').addEventListener('click', buttonClick)

// function buttonClick(e) {
//   //console.log('Button Clicked');
//   // document.getElementById('header-title').textContent = 'Items Entered';
//   // document.querySelector('#main').style.backgroundColor = '#f4f4f4'
//   // console.log(e);

//   // console.log(e.target);
//   // console.log(e.target.id);
//   // console.log(e.target.className);
//   // console.log(e.target.classList); 
//   // let output = document.getElementById('output');
//   // output.innerHTML = `<h3> ${e.target.id} </h3>`

//   // console.log(e.type);
//   // console.log(e.clientX);
//   // console.log(e.clientY);

//   // console.log(e.offsetX);
//   // console.log(e.offsetY);

//   //   console.log(e.altKey);
//   //   console.log(e.shiftKey);
//   //   console.log(e.ctrlKey);
// }

let button = document.getElementById('button'); 
let box = document.getElementById('box'); 

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mouseup', runEvent);
// button.addEventListener('mousedown', runEvent);

// box.addEventListener('mouseenter', runEvent)
// box.addEventListener('mouseleave', runEvent)

// box.addEventListener('mouseover', runEvent)
// box.addEventListener('mouseout', runEvent)

// box.addEventListener('mousemove', runEvent)

let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');
let select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent)
// itemInput.addEventListener('keyup', runEvent)
// itemInput.addEventListener('keypress', runEvent)

// itemInput.addEventListener('focus', runEvent)
// itemInput.addEventListener('blur', runEvent)

// itemInput.addEventListener('cut', runEvent)
// itemInput.addEventListener('paste', runEvent)

// itemInput.addEventListener('input', runEvent)

// select.addEventListener('change', runEvent)
// select.addEventListener('input', runEvent)

form.addEventListener('submit', runEvent);


function runEvent(e) {
  e.preventDefault();
  console.log(`EVENT TYPE: ${e.type}`);

  
  // console.log(e.target.value);


  // console.log(e.target.value);
  // document.getElementById('output').innerHTML = `<h3>${e.target.value}</h3>`

  // output.innerHTML = `<h3>MouseX: ${e.offsetX} </h3> <h3>MouseY: ${e.offsetY} </h3>`

  // box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)"
  // document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)"
}

