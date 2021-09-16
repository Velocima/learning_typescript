console.log('Hello World!');

const printHello = () => {
	console.log('Hello World!');
	console.log('Hello Typescript!');
};

printHello();

let age: number = 5;

interface Cat {
	name: string;
	color: string;
	age: number;
}

const mocha: Cat = {
	name: 'Mocha',
	color: 'Dark brown',
	age: 1,
};

const chai: Cat = {
	name: 'Chai',
	color: 'Light brown',
	age: 1,
};

const java: Cat = {
	name: 'Java',
	color: 'Black',
	age: 1,
};

const cats: Cat[] = [mocha, java, chai];

function getCatNames() {
	let names: string = '';
	for (let cat of cats) {
		names += `${cat.name}, `;
	}
	return names.substring(0, names.length - 2);
}

console.log(`I have ${cats.length} cats. Their names are ${getCatNames()}.`);
