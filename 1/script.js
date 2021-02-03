let a = 0;
console.log(a);

let obj = {
    number: 5,
    sayNumber: function () {
        say = () => {
            console.log(this)
        }
        say();
    }
}

obj.sayNumber();

let names = ['Ivan', 'Ann', 'Ksenia', 'ALEKSEY BLYAT'];

let shortNames = names.filter((name) => {
    return name.length < 5;
});

console.log(shortNames);

let answers = ['IvAn', 'AnnA', 'SUKABLYAd'];

answers = answers.map((item) => item.toLowerCase());

console.log(answers);

// console.log(`Пользователь ${name}, ${names} лет`);

function fetchData(data, count = 0) {
    console.log(`Данные: ${data} в количестве ${count}`);
}

fetchData('something');

function max(a, b, ...numbers) {
    console.log(numbers);
}

max(3, 4, 67);

const arr1 = [1, 2, 5],
    arr2 = [43, 2, 6];

const res = Math.max(1, ...arr1, 300, ...arr2);
console.log(res);


const avatar = 'Photo';
const user = {
    name: 'default',
    pass: 'qwerty',
    rights: 'user'
};

const admin = {
    name: 'admin',
    pass: 'root'
}
// const res = Object.assign({}, user, admin);
const resolution = {...user, ...admin, avatar};
console.log(resolution);

const x = 25, y = 10;

// const coords = {
//     x: x,
//     y: y
// }
const coords = {
    x,
    y,
    calcSq() {
        console.log(this.x * this.y);
    }
}

coords.calcSq();
console.log(coords);

// const userReference = {
//     name: 'default',
//     pass: 'qwerty',
//     rights: 'user'
// };
const userReference = {
    name: {
        first: 'Aleksey',
        second: 'Olshevsky'
    },
    pass: 'qwerty',
    rights: 'user'
};

console.log(userReference.name);

// const {name, pass, rights} = user;
const {name: {first, second}, pass, rights} = user;

console.log(first, second);

function connect({
                     host = 'localhost',
                     port = 3000,
                     user = 'default'} = {}) {
    console.log(`host: ${host}, port: ${port}, user: ${user}`)
}

// connect({
//     host: 'localhost',
//     port: 3000,
//     user: 'default'
// })

connect({
    port: 232,
    host: 'sdsd'
})

const numbersOfSlaves = [3, 5, 6, 6];

const [, , JABRONI] = numbersOfSlaves;
// const [VAN, BILLY, JABRONI] = numbersOfSlaves;
// console.log(VAN, BILLY, JABRONI);
console.log(JABRONI);

const numberOfMasters = [[3, 5], [6, 6]];
// number[0][0];

const [[iVan,BillyHerrington], [DownForMeBoy, AAAHHH]] = numberOfMasters;
console.log(iVan, BillyHerrington, DownForMeBoy, AAAHHH);

const country = {
    name: 'England',
    population: 2000000,
    gender: {
        male: ['15%', '40%'],
        female: ['16%', '29%']
    }
}

// country.gender.male[0];

const {gender: {male: [maleUnder18, maleAdult], female: [femaleUnder18, femaleAdult]}} = country;

console.log(maleUnder18, maleAdult, femaleUnder18, femaleAdult);