"use strict";

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




// const myKucing = [
//   {
//     firstName: 'Nami',
//     lastName: 'Bontet',
//     email: 'nami@bontet@gmail.com',
//     whatsapp: 081372837888,
//     likes:['Momo', 'Ayam', 'Cicak', 'Kadal'],
//     imut: true,
//     nakal: false,
//   },
//   {
//     firstName: 'Ludo',
//     lastName: 'Sudo',
//     email: 'ludo@sudo@gmail.com',
//     whatsapp: 081262147887,
//     likes: ['Nami', 'Tulang', 'ikan'],
//     imut: false,
//     nakal: false,
//   },
//   {
//     firstName: 'Luna',
//     lastName: 'lini',
//     email: 'luna@lini@gmail.com',
//     whatsapp: 088878899867,
//     likes: ['Nangis', 'mewek', 'berak sembarangan ketika ketakutan'],
//     imut: true,
//     nakal: false,
//   },
//   {
//     firstName: 'Pongki',
//     lastName: 'Nurhadi',
//     email: 'pongki_brandalz_coretz@gmail.com',
//     whatsapp: 08976778123,
//     likes: ['Merusuh', 'Gangguin kucing lain', 'meong2 berisik', 'mencuri lauk', 'kawin', 'pipis sembarangan', 'ngawinin kucing tetangga'],
//     imut: false,
//     nakal: true
//   },
// ];

// const kucingImut = myKucing.filter(function(kucing) {
//   return kucing.imut === true;
// }).map(function(kucing) {
//   return `Kucing imut: ${kucing.firstName} ${kucing.lastName}`;
// })
// console.log(kucingImut);

// const kucingNakal = myKucing.filter(function(kucing) {
//   return kucing.nakal === true;
// }).map(function(kucing) {
//   return `Kucing Nakal: ${kucing.firstName} ${kucing.lastName}`;
// });
// console.log(kucingNakal);



//---------------------------------------------------------------//



const companies= [
    {
      name: 'Company One',
      category: 'Finance',
      start: 1981,
      end: 2004 },
    {
      name: 'Company Two',
      category: 'Retail',
      start: 1992, 
      end: 2008 },
    {
      name: 'Company Three',
      category: 'Auto',
      start: 1999,
      end: 2007,
    },
    {
      name: 'Company Four',
      category: 'Retail',
      start: 1989,  
      end: 2010
    },
    {
      name: 'Company Five',
      category: 'Technology',
      start: 2009,
      end: 2014
    },
    {
      name: 'Company Six',
      category: 'Finance',
      start: 1987,
      end: 2010
    },
    {
      name: 'Company Seven',
      category: 'Auto',
      start: 1986,
      end: 1996
    },
  
    {
      name: 'Company Eight',
      category: 'Technology',
      start: 2011,
      end: 2016
    },
  
    {
      name: 'Company Nine',
      category: 'Retail',
      start: 1981,
      end: 1989
    },
  ];
  
  let ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]
  
  
  // for (let i = 0; i < companies.length; i++) {
  //   console.log (companies[i]);}
  
  /* ^^^^ instead of using this (For loop)^^^^,
        it's better to use this
                |
                |
                |
                V
  
  -----------For Each------------ 
  *//*
  companies.forEach(function(company) {
    console.log(company.name);
  }) */
  
  
  
  //-------------------------------------------------
  
  
  
  // let canDrink = [];
  // for(let i = 0; i < ages.length; i++){
  //   if(ages[i] >= 21) { 
  //     canDrink.push(ages[i])
  //     }
  //   }
  //   console.log(canDrink);
  
  /* ^^^^ instead of using that (For loop)^^^^,
        it's better to use this
                |
                |
                |
                V
  
  ----------FILTER------------
  ----------Get 21 and older----*/
  // const canDrink = ages.filter(function(age) {
  //   if(age >= 21) {
  //     return true ; 
  //   }
  // })
  // console.log(`Boleh Minum: ${canDrink}`);
  
  
  //----------OR FILTER ES6(ARROW FUNCTION)-----------
  
  // const canDrink = ages.filter(age => age >= 21);
  
  // console.log(`Boleh Minum: ${canDrink}`);
  
  
  
  //-------------------------------------------------
  
  //-------------------FILTER-----------------------
  
  //------------Get Retail companies----------------
  
  // const retailCompanies = companies.filter (function(company) {
  //   if (company.category === 'Retail') {
  //     return true;
  //   }
  // })
  
  //----------OR FILTER ES6(ARROW FUNCTION)-----------
  
  // const retailCompanies = companies.filter(company => company.category === 'Retail');
  
  // console.log(retailCompanies);
  
  
  //------------Get 80's companies----------------
  
  // const eightiesCompanies = companies.filter (function(company) {
  //   if (company.start >= 1980 && company.start <= 1990 ) {
  //     return true
  //   }
  // }) 
  
  //----------OR FILTER ES6(ARROW FUNCTION)-----------
  
  // const eightiesCompanies = companies.filter (company => company.start >= 1980 && company.start < 1990)
  
  // console.log(eightiesCompanies);
  
  
  //------------Get companies lasted 10 years or more-------------
  
  // const lastedTenYears = companies.filter(function(company) {
  //   if (company.end - company.start > 10) {
  //     return true;
  //   }
  // })
  
  //----------OR FILTER ES6(ARROW FUNCTION)-----------
  
  // const lastedTenYears = companies.filter(company => company.end - company.start >= 10)
  
  // console.log(lastedTenYears);
  
  
  
  //-----------------------------------------------------
  
  
  
  //----------------------------MAP----------------------
  
  //---------------Create Array of Company names---------
  
  // const companyNames = companies.map(function (company){
  //   return company.name;
  // })
  
  // const testMap = companies.map(function (company){
  //   return `${company.name} [${company.end} - ${company.start}]`;
  // }) 
  
  //----------MAP ES6(ARROW FUNCTION)-----------
  
  // const testMap = companies.map(company => `${company.name} [${company.end} - ${company.start}]`
  // );
  
  // console.log(testMap);
  
  
  
  // const squareMap = ages.map(age => Math.sqrt(age))
  // console.log(squareMap);
  
  // const timesMap = ages
  //   .map(age => Math.sqrt(age))
  //   .map(age => age * 2 );
  
  // console.log(timesMap);
  
  //------------Sort Companies by start year------------- 
  
  // const sortedCompanies = companies.sort(function(c1, c2){
  //   if(c1.start > c2.start ) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // });
  
  //--------------------ES6-------------------------
  
  // const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1))
  
  // console.log(sortedCompanies);
  
  
  //------------------Sort Ages--------------------
  
  // const sortAges = ages.sort((a, b) => a - b);
  
  // console.log(sortAges);
  
  
  //----------------REDUCE--------------------
  
  // let ageSum = 0;
  // for(let i = 0; i< ages.length; i++) {
  //   ageSum += ages[i];
  // }
  
  /* ^^^^ instead of using that (For loop)^^^^,
        it's better to use this
                |
                |
                |
                V
  */
  // const ageSum = ages.reduce(function(total, age) {
  //   return total + age;
  // }, 0)
  
  // const ageSum = ages.reduce((total, age) => total + age
  // , 0)
  
  // console.log(ageSum);
  
  // const totalYears = companies.reduce(function(total, company) {
  //   return total + (company.end - company.start);
  // }, 0)
  
  
  // const totalYears = companies.reduce((total, company) =>
  //   total + (company.end - company.start)
  // , 0)
  
  
  // console.log(totalYears);
  
  
  //------------------COMBINE METHOD---------------
  
  const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a- b)
    .reduce((a, b) => a+ b, 0 );


    console.log(combined);