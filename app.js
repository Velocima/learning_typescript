console.log('Hello World!');
const printHello = () => {
    console.log('Hello World!');
    console.log('Hello Typescript!');
};
printHello();
let age = 5;
const mocha = {
    name: 'Mocha',
    color: 'Dark brown',
    age: 1,
};
const chai = {
    name: 'Chai',
    color: 'Light brown',
    age: 1,
};
const java = {
    name: 'Java',
    color: 'Black',
    age: 1,
};
const cats = [mocha, java, chai];
function getCatNames() {
    let names = '';
    for (let cat of cats) {
        names += `${cat.name}, `;
    }
    return names.substring(0, names.length - 2);
}
console.log(`I have ${cats.length} cats. Their names are ${getCatNames()}.`);
