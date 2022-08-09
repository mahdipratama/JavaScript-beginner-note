
//  --------GOLF---------- 

/*
Strokes	     Return
1	          "Hole-in-one!"
<= par - 2	"Eagle"
par - 1	    "Birdie"
par	        "Par"
par + 1	    "Bogey"
par + 2	    "Double Bogey"
>= par + 3	"Go Home!"
*/
/*
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    if (strokes == 1 ) {
        return names[0];
    } else if (strokes <= par - 2 ) {
        return names[1];
    } else if (strokes == par -1 ) {
        return names[2];
    } else if (strokes == par ) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par +2) {
        return names[5];
    } else if (strokes >= par +3) {
        return names[6];
    }

    return "Change Me";
}

console.log(golfScore(0, 1));
*/



/*-------SWITCH-------

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
      case 1: 
      answer = 'alpha';
        break;
      case 2: 
      answer = 'beta';
        break
      case 3: 
      answer = 'gamma';
        break
      case 4: 
      answer = 'delta';
        break
    }  

    // Only change code above this line
    return answer;
  }

  console.log(caseInSwitch(4));
*/



/* --------Black Jack --------

let count = 0;

function cc(card) {
  // Only change code below this line
  if (card <= 6 ) {
    count++;
  }
  

  switch (card) {
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }

  let holdbet = 'Hold';
  if (count > 0) {
    holdbet = 'Bet'
  };

  // count + ' ' + holdbet 
  return `${count} ${holdbet}`;
  // Only change code above this line
}

cc('K'); cc('J'); cc('A'); cc(7); cc(8);
console.log(cc(2)) */




//-------Object Data Structure---------- 

/*
function iDontKnow(phone) {
  let hasil = '';

const lookup = {
  alpha: 'Adams',
  bravo: 'Boston',
  charlie: 'Chicago',
  delta: 'Denver',
  echo: 'Easy',
  foxtrot: 'Frank'
};

hasil = lookup[phone];

return hasil;
}

console.log(iDontKnow('alpha')); 
*/


//---------Checking Object Properties------- 

/*
let obj = {
  name: 'John',
  age: 35,
  birthday: '1984-12-25',
  gender: 'male',
  phone: '555-555'
}


function checkObj(checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return 'Not Found';
  }
}

console.log(checkObj('cat'));
*/


//-------EXAMPLE OF A COMPLEX DATA STRUCTURE-----

/*
const myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: [
      "CD",
      "8T",
      "LP"
    ],
    gold: true

  },
  {
    artist: 'Eminem',
    title: 'The Marshal Mathers LP',
    release_year: 2000,
    formats: 
    [
      'CD',
      'Cassette',
      'LP'
    ],

    Diamond: true
  }
];

console.log(myMusic[0].formats);
*/



//--------RECORD COLLECTION-------

/*
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
}; 

// let collection = JSON.parse(JSON.stringify(recordCollection));

// Only change code below this line
function updateRecords(records, id, prop, value) {
  const album = records[id];
  if (value === '') {
    delete album[prop];
  }

  else if (prop !== 'tracks') {
    album[prop] = value;
  } else {
    album['tracks'] = album['tracks'] || [];
    album['tracks'].push(value);
  }
  
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
*/


//---------WHILE LOOP--------
/*
const myArray = [];

let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
} 
console.log(myArray); */



//--------FOR LOOP--------- 
/*
const myArray = [];

// Only change code below this line
for (let i = 1; i <= 5; i++) {
  myArray.push(i);
}

console.log(myArray) 

----------------------------------------------------

const myArray = [];

for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}
console.log(myArray);
*/




//-----ITERATE THROUGH AN ARRAY WITH A FOR LOOP----
/*
const myArr = [2, 3, 5, 4, 2];

let total = 0;

for ( let i = 0; i < myArr.length; i++ ) {
  total += myArr[i]; 
}

console.log(total); //total = 16
*/



//----------NESTING FOR LOOPS---------
/*
function kalian(arr) {
  let product = 1; 
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

let product = kalian([[5, 2], [2], [2]])
console.log(product); // product = 40;
*/

// const myArray = [];
// let i = 10;

// // Only change code below this line
// do {
//   myArray.push(i);
//   i++;
// } while (i < 5) 

// console.log(i, myArray);




//--------PROFILE LOOKUP------

/*
const myKucing = [
  {
    firstName: 'Nami',
    lastName: 'Bontet',
    email: 'nami@bontet@gmail.com',
    whatsapp: 081372837888,
    likes:['Momo', 'Ayam', 'Cicak', 'Kadal'], 
    imut: true,
    nakal: false,
  },
  {
    firstName: 'Ludo',
    lastName: 'Sudo',
    email: 'ludo@sudo@gmail.com',
    whatsapp: 081262147887,
    likes: ['Nami', 'Tulang', 'ikan'],
    imut: false,
    nakal: false,
  },
  {
    firstName: 'Luna',
    lastName: 'lini',
    email: 'luna@lini@gmail.com',
    whatsapp: 088878899867,
    likes: ['Nangis', 'mewek', 'berak sembarangan ketika ketakutan'],
    imut: true,
    nakal: false,
  },
  {
    firstName: 'Pongki',
    lastName: 'Nurhadi',
    email: 'pongki_brandalz_coretz@gmail.com',
    whatsapp: 08976778123,
    likes: ['Merusuh', 'Gangguin kucing lain', 'meong2 berisik', 'mencuri lauk', 'kawin', 'pipis sembarangan', 'ngawinin kucing tetangga'],
    imut: false,
    nakal: true
  },
];
*/

//-----FOR...OF LOOP-----
/*
for (let kucing of myKucing) {
  console.log(kucing.firstName);
}*/


//-------forEach------
/*
myKucing.forEach(function(kucing) {
  console.log(kucing.firstName);
}) */


//-------map-------
/*
const kucingName = myKucing.map(function(kucing) {
  return kucing.firstName;
});
console.log(kucingName);
*/

//------filter------
/*
const kucingImut = myKucing.filter(function(kucing) {
  return kucing.imut === true;
}).map(function(kucing) {
  return `Kucing imut: ${kucing.firstName} ${kucing.lastName}`;
})
console.log(kucingImut);

const kucingNakal = myKucing.filter(function(kucing) {
  return kucing.nakal === true;
}).map(function(kucing) {
  return `Kucing Nakal: ${kucing.firstName} ${kucing.lastName}`;
});
console.log(kucingNakal);const kucingImut = myKucing.filter(function(kucing) {
  return kucing.imut === true;
}).map(function(kucing) {
  return `Kucing imut: ${kucing.firstName} ${kucing.lastName}`;
})
console.log(kucingImut);

const kucingNakal = myKucing.filter(function(kucing) {
  return kucing.nakal === true;
}).map(function(kucing) {
  return `Kucing Nakal: ${kucing.firstName} ${kucing.lastName}`;
});
console.log(kucingNakal);
*/


// function lookuUpProfile(nama, prop) {
//   for (let i = 0; i < myKucing.length; i++) {
//     if (myKucing[i].firstName === nama) {
//       return myKucing[i][prop] || 'Data Kucing tidak ada';
//     }
//   }
//   return 'Kucing tidak di temukan'
// }

// let data = lookuUpProfile('Nami', 'likes')
// console.log(data);
