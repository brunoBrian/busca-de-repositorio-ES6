// class List {
// 	constructor() {
// 		this.data = [];
// 	}

// 	add(data) {
// 		this.data.push(data);
// 		console.log(this.data);
// 	}
// }

// class TodoList extends List {
// 	constructor() {
// 		super();

// 		this.usuario = 'Bruuno Sousa';
// 		this.profissao = 'Web Developer';
// 	}

// 	mostraUsuario() {
// 		console.log(this.usuario);
// 	}

// 	mostraProfissao() {
// 		console.log(this.profissao);
// 	}
// }

// const MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function() {
// 	MinhaLista.add('Outro ToDo');
// }

// MinhaLista.mostraUsuario();
// MinhaLista.mostraProfissao();



// // class OutroTodo {
// // 	constructor() {
// // 		this.todos = []
// // 	}

// // 	static addTodos(todos) {
// // 		this.todos.push(todos);
// // 		console.log(this.todos);
// // 	}

// // 	addAnotherTodos(todos) {
// // 		this.todos.push(todos);
// // 		console.log(this.todos);
// // 	}
// // }

// // const OutroToddo = new OutroTodo();

// // // OutroToddo.addTodos('/ llll');
// // OutroToddo.addAnotherTodos('Outro Todo');



// // class Matematica {
// // 	static soma(a, b) {
// // 		return a + b;
// // 	}
// // }

// // console.log(Matematica.soma(10,10));


// //Funções do ES6
// // const arr = [3, 5, 2, 7, 9, 5, 2, 8, 20];

// // console.log(arr);

// // const newArr = arr.map(function(item, index) {
// // 	return item * index;
// // });

// // console.log(newArr);


// // const sum = arr.reduce(function(total, next) {
// // 	return total + next;
// // });

// // console.log(sum);


// // const filter = arr.filter(function(item) {
// // 	return item % 2 === 0;
// // });

// // console.log(filter);


// // const find = arr.find(function(item) {
// // 	return item === 2;
// // });

// // console.log(find);




// //Arrow Function
// const arr = [3, 5, 2, 7, 9, 5, 2, 8, 20];
// console.log(arr);

// const newArr = arr.map( (item, index) => item * index);
// console.log(newArr);


// const teste = () => {
// 	return 'Testando...';
// }
// console.log(teste());

// const teste2 = () => 'Bruno';
// console.log(teste2());

// const teste3 = () => ['Bruno', 7, 6, 53];
// console.log(teste3());

// const teste4 = () => ({nome: 'Bruno', Idade: 24});
// console.log(teste4());


// const soma = (a = 9, b = 3) => a + b;
// console.log(soma()); 



// const user = {
// 	"nome": "Bruno",
// 	"idade": 24,
// 	"endereco": {
// 		"cidade": "Mauá",
// 		"estado": "São Paulo"
// 	}
// }

// const { nome, idade, endereco: { estado } } = user;

// console.log(nome);
// console.log(idade);
// console.log(estado);

// function MostraNome({ nome, idade }) {
// 	console.log('O nome é ' + nome + ' e a idade é ' + idade );
// }

// MostraNome(user);



// //Para usar, tem que adicionar no yarn o @babel/plugin-proposal-object-rest-spread
// //REST - pega o restante dos valores
// const usuario = {
// 	name: "Francielly Sales",
// 	idade: 21,
// 	profissao: 'Advogada Linda'
// }

// const { name, ...resto_objeto } = usuario;

// console.log(name);
// console.log(resto_objeto);


// const arra = [3,6,7,2,56];

// const [a,b, ...rest] = arra;

// console.log(a);
// console.log(b);
// console.log(rest);

// function Somando(...params) {
// 	return params.reduce((total, next) => total + next);
// }

// console.log(Somando(4,6,8,6,1));


// // SPREAD - une arrays
// const arr1 = [1,2,3,9];
// const arr2 = [4,5,6,7];

// const arr3 = [...arr1, ...arr2];

// console.log(arr3);


// const usuario1 = {
// 	nome: "Pretinha",
// 	idade: 15,
// 	dono: 'Geraldo'
// }

// const usuario2 = {...usuario1, nome: 'Belinha da Silva'};

// console.log(usuario2);



// // Template literals
// const nomes = 'Bruno';
// const idades = 24;

// console.log('Meu nome é ' + nomes + ' e minha idade é ' + idades + ' anos.');
// console.log(`Meu nome é ${nomes} e minha idade é ${idades} anos.`);

// // Sintaxe curta de objeto - object short syntax
// const nomed = 'Francielly';
// const profissaod = 'Advogada';

// const usered = {
// 	nomed,
// 	profissaod,
// 	sexo: 'Mulher'
// }

// console.log(usered);


// class Usuario {
// 	constructor (email, senha) {
// 		this.email = email;
// 		this.senha = senha;
// 	}

// 	isAdmin(isAdmin = false) {
// 		return this.admin = isAdmin;
// 	}
// }

// class Admin extends Usuario {

// 	isAdmin(isAdmin = true) {
// 		return this.admin = isAdmin;
// 	}
// }

// const User1 = new Usuario('email@teste.com', 'senha123875');
// const Adm1 = new Admin('email@teste.com.br', 'senha123');

// console.log(User1.isAdmin()) // false
// console.log(Adm1.isAdmin()) // true


// const usuarios = [
//   { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//   { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//   { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
// ];

// const idades = usuarios.map(function(item, index) {
// 	return item.idade;
// });
// console.log(idades);


// const rockseat = usuarios.filter(function(item) {
// 	return item.empresa == 'Rocketseat';
// });
// console.log(rockseat);


// const google = usuarios.find(function(item) {
// 	return item.empresa == 'Google';
// });
// console.log(google);


// const mult = usuarios.map(function(item, index) {
// 	item.idade = item.idade * 2;
// 	return item;
// });
// console.log(mult);


// const maior50 = mult.filter(function(item) {
// 	return item.idade < 50;
// });
// console.log(maior50);



// Importanto funcao de outro arquivo utilizando o webpack
// import mult, { soma, sub } from './funcoes'; //mult é default, e para mudar o valor das dentro das chaves é só colocar soma as somaFunction

// console.log(soma(4,7));
// console.log(sub(54,7));
// console.log(mult(54,7));


// import * as funcoes from './funcoes'; //atribuindo todas as funcoes a variavel funcoes, virando um objeto que contem as variaveis

// console.log(funcoes.soma(98,7));
// console.log(funcoes.sub(54,27));
// console.log(funcoes.mult(75,3));






















// Promisse
// const minhaPromise = ( ) => new Promise((resolve, reject) => {
// 	setTimeout(() => { resolve('OK') }, 3000);
// });


// minhaPromise().then(response => {
// 	console.log(response);
// });




// async function executaPromise() {

// 	console.log(await minhaPromise());
// 	console.log(await minhaPromise());
// 	console.log(await minhaPromise());
// }

// or with arrow function

// const executaPromises = async () => {

// 	console.log(await minhaPromise());
// 	console.log(await minhaPromise());
// 	console.log(await minhaPromise());
// }

// executaPromise();
// executaPromises();





// import axios from 'axios';

// class api {
// 	static async gerUserInfo(username) {

// 		try {
// 			const response = await axios.get(`https://api.github.com/users/${username}`);
// 			console.log(response);
// 		} catch(err) {
// 			console.warn('Erro na API: ' + err);
// 		}

// 	}
// }

// api.gerUserInfo('brunoBrian');
// api.gerUserInfo('junhokjdkh');


// class Github {
//   static async getRepositories(repo) {

//   	try {
//   		const response = await axios.get(`https://api.github.com/repos/${repo}`);
//   		console.log(response.data);
//   		console.log('Existe');
//   	} catch (err) {
//   		console.log('Repositório não existe');
//   	}

//   }
// }

// Github.getRepositories('brunoBrian/Layout-Quatro-Rodas');
// Github.getRepositories('brunoBrian/La-Rodas');










// recebendo endereço para acessar a API
import api from './api';

class App {
	constructor() {
		this.repositories = [];

		this.formEl = document.getElementById('repo-form');
		this.inputEl = document.querySelector('input[name=repository]');
		this.listEl = document.getElementById('repo-list');

		this.registerHandlers();
	}

	registerHandlers() {
		this.formEl.onsubmit = event => this.addRepository(event);
	}

	async addRepository() {
		event.preventDefault();

		const repoInput = this.inputEl.value;

		if (repoInput.length === 0) {
			return;
		}

		this.setLoadin();

		try {
			const response = await api.get(`/repos/${repoInput}`);

			const { name, description, html_url, owner: { avatar_url } } = response.data;

			this.repositories.push({
				name,
				description,
				avatar_url,
				html_url,
			});

			this.inputEl.value = '';

			this.render();

		}catch (err) {
			alert('Repositório não encontrado');
		}

		this.setLoadin(false);
	}

	setLoadin(loading = true) {
		if(loading === true) {
			let loadingEl = document.createElement('span');
			loadingEl.appendChild(document.createTextNode('Carregando ...'));
			loadingEl.setAttribute('id', 'loading');

			this.formEl.appendChild(loadingEl);
		} else {
			document.getElementById('loading').remove();
		}
	}

	render() {
		this.listEl.innerHTML = '';

		this.repositories.forEach(repo => {
			let imgEl = document.createElement('img');
			imgEl.setAttribute('src', repo.avatar_url);

			let titleEl = document.createElement('strong');
			titleEl.appendChild(document.createTextNode(repo.name));

			let descriptionEl = document.createElement('p');
			descriptionEl.appendChild(document.createTextNode(repo.description));

			let linkEl = document.createElement('a');
			linkEl.setAttribute('target', '_blank');
			linkEl.setAttribute('href', repo.html_url);
			linkEl.appendChild(document.createTextNode('Acessar'));

			let listItemEl = document.createElement('li');
			listItemEl.appendChild(imgEl);
			listItemEl.appendChild(titleEl);
			listItemEl.appendChild(descriptionEl);
			listItemEl.appendChild(linkEl);

			this.listEl.appendChild(listItemEl);
		});
	}
}


new App();













