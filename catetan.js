// let harga = 6000; //rupioh

// if(harga > 10000) {
//     console.log('mahal itu')
// } else if (harga > 5000 && harga < 10000) {
//     console.log('lumayan')
// } else {
//     console.log('itu murah ');
// }


// let jam = 6; 

// if (jam <= 5 || jam >= 18 ) {
//     console.log('Di luar gelap')
// } else if (jam >! 6 && jam < 11)  {
//     console.log('Selamat Pagi')
// } else {
//     console.log('Masih Terang');
// }

// let myName = prompt('Enter your name','');

// if (!(myName == '')) {
//     alert(`Hello, ${myName}`);
// } else {
//     alert('You didn\'t enter your name !');
// }

// let a = 10 ;

// switch (a) {
//     case 9 :
//         console.log('Too small');
//         break;
//     case 10 :
//         console.log('Exactly!');
//         break;
//     case 11 :
//         console.log('Too big');
//         break;
//     default : 
//     console.log('I don\'t know such values');
// }

// let a = 5; 

// switch (a) {
//     case 4: 
//         console.log('Right!');
//         break;
    
//     case 3: // (*) grouped two cases
//     case 5: 
//         console.log('Wrong!');
//         console.log('Why don\'t you take a math class?')
//         break;

//     default:
//         console.log('The result is strange. Really?!');
// }

// let arg = prompt ('Enter a value');

// switch (arg) {
//     case '0':
//     case '1':
//         console.log('One or Zero');
//         break;

//     case '2': 
//         console.log('Two');
//         break;

//     case 3: 
//         console.log('Never executes!');
//         break;
//     default:
//         console.log('An unknown value');
// }

// let browser = prompt('What browser you used for ?');

// if (browser === 'Edge') {
//     console.log('You\'ve got the edge!');
// } else if (browser === 'Firefox' || 
//             browser === 'Chrome' || 
//             browser === 'Safari' || 
//             browser === 'Opera') {
//     console.log('Okay, we support these browsers too');
// } else {
//     console.log('We hope that this page looks ok!');
// }


// let a = +prompt('a?', ''); // +prompt() converts the value from string to a number

// switch (a) {
//     case 0 :
//         console.log(0);
//         break;
    
//     case 1 :
//         console.log(1);
//         break;

//     case 2 :
//     case 3 :2
//         console.log('2,3');
// }

// function namiKucing () {
//     console.log('Halo, name saye Nami')
// }
// namiKucing();


// function showMessage () {
//     let message = 'Hello, I \'am JavaScript'; 
//     console.log(message);
// }
// showMessage();

// let userName = 'Nami';
// function masukanNama() {
//     userName = 'Ludo';

//     let pesan = `Hello, ${userName}`;
//     console.log(pesan); 
// }

// console.log(userName); //Nami

// masukanNama(); //Hello, Ludo

// console.log(userName); //Ludo


// let namaKucing = 'NamiBon';
// function kucingSaya() {
//     let namaKucing = 'Luna';
//     let sms = `Halo, ${namaKucing}`;
//     console.log(sms);
// }

// kucingSaya(); 
// console.log(namaKucing);



// function pesanNami(dari, kalimat) {
//     console.log(`${dari}: ${kalimat}`)
// }

// pesanNami('Nami', 'Hawow~');
// pesanNami('Nami', 'bagi momo dong!');


// function showMessage(from, text = 'Hewow, bagi momo dong!') {
//     from = `*${from}*`;
//     alert(`${from}: ${text}`); 
// }

// let from = 'Nami';

// showMessage(from)

// console.log(from);

// function jumlah (a, b) {
//     return a + b;
// }

// let hasil = jumlah (1, 2);
// console.log(hasil); 


// function cekUmur (umur) {
//     if (umur >= 18 ) {
//         return true;
//     } else {
//         return confirm('Lu udah bilang ama bapak lu blm ?');
//     }
// } 

// let umur = prompt('Umur berapa lu?', 18);

// if (cekUmur (umur)) {
//     alert('sayangi dengkul mu kawan')
// } else {
//     alert('Lu gua bilangin bapak lu ya!')
// }


// function sayHalo() {
//     console.log('Hello');
// }
// console.log(sayHalo());

// function sayHi() {
//     console.log('Hello');
// }

// let func = sayHi;

// func();
// console.log(sayHi());

// function nanya(pertanyaan, iyo, idak) {
//     if (confirm(pertanyaan)) iyo()
//     else idak();
// }

// function benar() {
//     alert('ado nian')
// }

// function tidak() {
//     alert('mano ado')
// }

// nanya('Setuju dak kau men aku ganteng?', benar, tidak);

// function nanyo (pertanyaan, iyo, idak) {
//     if (confirm(pertanyaan)) iyo()
//     else idak()
// }

// nanyo(
//     'Setuju dak?',
//     function() {alert('Setuju')},
//     function() {alert('idak Setuju')}
// );

let age = prompt("What is your age?", '18');

let welcome = (age < 18) ?
    function() { alert("masih kicil kau!"); } :
    function() { alert("Selamat kopong!"); };

welcome();