// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. 
// (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

// let person = {
//     name: 'Andy',
//     married: false,
//     profesion: 'player'
// }

// let tester = {
//     login: 'Taras',
//     age: 25,
//     driver: true,
// }

// let cousin = {
//     nik: 'Kenny',
//     weight: 75,
//     height: 170,
// }

// let vehicle =  {
//     nickname: 'Dolly',
//     car: 'ford',
//     speaker: 'English',
// }

// let town = {
//     city: 'Lviv',
//     rich: false,
//     blue_eyes: true,
// }


// - создать 5 объектов с полностью разным набором полей. 
// В каждом объекте должен присутсвовать массив и внутренний объект. 
// Опишите что угодно, машину, картину, болт... 
// Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };


// let car = { brand: 'toyota' , model: ['RAV4', 'Outlander', 'Cruser'] , year: 2014 , created: {country: 'JAPAN'} , price: 30000 };

// let dog = { name: ['Betman'], breed: 'Bulldog', years: 2 , eyes: { left: 'brown', right: 'black'} , price: 1000};

// let cat = { name: ['konny'], breed: {asian: 'Main_kun'} , years: 4 , eyes: 'black', price: 400};

// - При помощи for in вывести все ключи всех объектов из задания 1 и 2


// for(key in person) {
// }
// console.log(person); 


// for(key in tester) {
// }
// console.log( tester); 


// for(key in cousin) {
// }
// console.log( cousin); 


// for(key in tester) {
// }
// console.log( tester); 


// for(key in vehicle) {
// }
// console.log( vehicle); 


// for(key in town) {
// }
// console.log( town); 


// for(key in car) {
//     console.log('key', key); 
// }

// for(key in dog) {
//     console.log('key', key); 
// }

// for(key in cat) {
//     console.log('key', key); 
// }


// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// console.log(Object.keys(person)); 

// console.log(Object.keys(tester)); 

// console.log(Object.keys(cousin)); 

// console.log(Object.keys(tester)); 

// console.log(Object.keys(vehicle)); 

// console.log(Object.keys(town)); 

// console.log(Object.keys(car)); 

// console.log(Object.keys(dog)); 

// console.log(Object.keys(cat)); 

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. 
// (Значаения полей могу быть выдуманными)

// let cars = [
//     {model: 'rav4', year:'2000', power:'55' , color:'yellow'},
//     {model: 'lanser', year:'2014', power:'70' , color:'green'},
//     {model: 'skoda', year:'2010', power:'100' , color:'red'},
//     {model: 'q7', year:'2017', power:'110' , color:'black'},
//     {model: 'rapid', year:'2000', power:'130' , color:'silver'},
//     {model: 'pajero', year:'1900', power:'65' , color:'pink'},
//     {model: 'lender', year:'2013', power:'110' , color:'orange'},
//     {model: 'golf', year:'2001', power:'77' , color:'blue'},
//     {model: 'sonata', year:'2012', power:'120' , color:'lightblue'},
//     {model: 'x7', year:'2019', power:'200' , color:'brown'},
// ];

// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. 
// (Значаения полей могу быть выдуманными)

// let cities = [
//     {name: 'lviv', population: '1000000', country: 'Ukraine', district:'Lviv'},
//     {name: 'Kiyv', population: '900000', country: 'Ukraine', district:'Lviv'},
//     {name: 'Rivne', population: '12313124', country: 'Ukraine', district:'Rivne'},
//     {name: 'Mykolaiv', population: '12312431', country: 'Ukraine', district:'Lviv'},
//     {name: 'Bila_Cerkva', population: '2343432', country: 'Ukraine', district:'Kyiv'},
//     {name: 'Lysc', population: '23452423', country: 'Ukraine', district:'Volun'},
//     {name: 'Kropivnisk', population: '786867', country: 'Ukraine', district:'Kropivnisk'},
//     {name: 'Odessa', population: '123137', country: 'Ukraine', district:'Odessa'},
//     {name: 'Izmail', population: '2465743', country: 'Ukraine', district:'Odessa'},
//     {name: 'Xerson', population: '653453', country: 'Ukraine', district:'Xerson'},
// ];

// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
//  Водитель является отдельным объектом с полями имя, возраст, пол, стаж.


// let cars = [
//     {model: 'rav4', year:'2000', power:'55' , color:'yellow', driver:{name:'Andy', years: '1990', sex: 'male', skills:'1'}},
//     {model: 'lanser', year:'2014', power:'70' , color:'green', driver:{name:'Ira', years: '1993', sex: 'famale', skills:'3'}},
//     {model: 'skoda', year:'2010', power:'100' , color:'red', driver:{name:'Serhii', years: '1995', sex: 'male', skills:'5'}},
//     {model: 'q7', year:'2017', power:'110' , color:'black', driver:{name:'Igor', years: '1870', sex: 'male', skills:'6'}},
//     {model: 'rapid', year:'2000', power:'130' , color:'silver', driver:{name:'Taras', years: '1967', sex: 'male', skills:'10'}},
//     {model: 'pajero', year:'1900', power:'65' , color:'pink', driver:{name:'Roman', years: '1970', sex: 'male', skills:'16'}},
//     {model: 'lender', year:'2013', power:'110' , color:'orange', driver:{name:'Nazar', years: '1980', sex: 'male', skills:'19'}},
//     {model: 'golf', year:'2001', power:'77' , color:'blue', driver:{name:'Anna', years: '1973', sex: 'famale', skills:'20'}},
//     {model: 'sonata', year:'2012', power:'120' , color:'lightblue', driver:{name:'Mykola', years: '1989', sex: 'male', skills:'10'}},
//     {model: 'x7', year:'2019', power:'200' , color:'brown', driver:{name:'Ura', years: '1984', sex: 'male', skills:'17'}},
// ];

// - проитерировать каждый массив из задания 5,6,7 при помощи while.


// let i = 0;
// while ( i < cars.length){
    // console.log(cars[i]);
//     i++;
// }

// let i = 0;
// while ( i < cities.length){
//     console.log(cities[i]);
//     i++;
// }

// let i = 0;
// while ( i < cars.length){
//     console.log(cars[i]);
//     i++;
// }


// - проитерировать каждый массив из задания 5,6,7 при помощи for .

// for (i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }


// for (i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

// for (i = 0; i < cities.length; i++){
//         console.log(cities[i]);
//}


// for (i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }


// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// for ( keys  of cars){
//     console.log(keys);
// }


// for ( keys  of cities){
//     console.log(keys);
// }

// for ( keys  of cars){
//     console.log(keys);
// }


// - взять объекты из задания 1 и превратить каждый в json.

// let person = {
//         name: 'Andy',
//         married: false,
//         profesion: 'player'
//     }
    
//     let tester = {
//         login: 'Taras',
//         age: 25,
//         driver: true,
//     }
    
//     let cousin = {
//         nik: 'Kenny',
//         weight: 75,
//         height: 170,
//     }
    
//     let vehicle =  {
//         nickname: 'Dolly',
//         car: 'ford',
//         speaker: 'English',
//     }
    
//     let town = {
//         city: 'Lviv',
//         rich: false,
//         blue_eyes: true,
//     }
    
//    let personEl = JSON.stringify(person);
//    console.log(personEl);

// let testerEl = JSON.stringify(tester);
// console.log(testerEl);

// let cousinEl = JSON.stringify(cousin);
// console.log(cousinEl);

// let vehicleEl = JSON.stringify(vehicle);
// console.log(vehicleEl);

// let townEl = JSON.stringify(town);
// console.log(townEl);


// - взять json из задания 11 и превратить их обратно в объекты.


// let personOld = JSON.parse(personEl);
// console.log(personOld);

// let testerOld = JSON.parse(testerEl);
// console.log(personOld);

// let cousinOld = JSON.parse(cousinEl);
// console.log(personOld);

// let vehicleOld = JSON.parse(vehicleEl);
// console.log(personOld);

// let townOld = JSON.parse(townEl);
// console.log(personOld);

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

// let cars = [
//     {model: 'rav4', year:'2000', power:'55' , color:'yellow'},
//     {model: 'lanser', year:'2014', power:'70' , color:'green'},
//     {model: 'skoda', year:'2010', power:'100' , color:'red'},
//     {model: 'q7', year:'2017', power:'110' , color:'black'},
//     {model: 'rapid', year:'2000', power:'130' , color:'silver'},
//     {model: 'pajero', year:'1900', power:'65' , color:'pink'},
//     {model: 'lender', year:'2013', power:'110' , color:'orange'},
//     {model: 'golf', year:'2001', power:'77' , color:'blue'},
//     {model: 'sonata', year:'2012', power:'120' , color:'lightblue'},
//     {model: 'x7', year:'2019', power:'200' , color:'brown'},
// ];


// let carsEl = JSON.stringify(cars);
// console.log(carsEl);

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// let city = [
//     {name: 'lviv', population: '1000000', country: 'Ukraine', district:'Lviv'},
//     {name: 'Kiyv', population: '900000', country: 'Ukraine', district:'Lviv'},
//     {name: 'Rivne', population: '12313124', country: 'Ukraine', district:'Rivne'},
//     {name: 'Mykolaiv', population: '12312431', country: 'Ukraine', district:'Lviv'},
//     {name: 'Bila_Cerkva', population: '2343432', country: 'Ukraine', district:'Kyiv'},
//     {name: 'Lysc', population: '23452423', country: 'Ukraine', district:'Volun'},
//     {name: 'Kropivnisk', population: '786867', country: 'Ukraine', district:'Kropivnisk'},
//     {name: 'Odessa', population: '123137', country: 'Ukraine', district:'Odessa'},
//     {name: 'Izmail', population: '2465743', country: 'Ukraine', district:'Odessa'},
//     {name: 'Xerson', population: '653453', country: 'Ukraine', district:'Xerson'},
// ];


// let cityEl = JSON.stringify(city);
// console.log(cityEl);

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// let newArray = [];
// let cars = [
//     {model: 'rav4', year:'2000', power:'55' , color:'yellow', driver:{name:'Andy', years: '1990', sex: 'male', skills:'1'}},
//     {model: 'lanser', year:'2014', power:'70' , color:'green', driver:{name:'Ira', years: '1993', sex: 'famale', skills:'3'}},
//     {model: 'skoda', year:'2010', power:'100' , color:'red', driver:{name:'Serhii', years: '1995', sex: 'male', skills:'5'}},
//     {model: 'q7', year:'2017', power:'110' , color:'black', driver:{name:'Igor', years: '1870', sex: 'male', skills:'6'}},
//     {model: 'rapid', year:'2000', power:'130' , color:'silver', driver:{name:'Taras', years: '1967', sex: 'male', skills:'10'}},
//     {model: 'pajero', year:'1900', power:'65' , color:'pink', driver:{name:'Roman', years: '1970', sex: 'male', skills:'16'}},
//     {model: 'lender', year:'2013', power:'110' , color:'orange', driver:{name:'Nazar', years: '1980', sex: 'male', skills:'19'}},
//     {model: 'golf', year:'2001', power:'77' , color:'blue', driver:{name:'Anna', years: '1973', sex: 'famale', skills:'20'}},
//     {model: 'sonata', year:'2012', power:'120' , color:'lightblue', driver:{name:'Mykola', years: '1989', sex: 'male', skills:'10'}},
//     {model: 'x7', year:'2019', power:'200' , color:'brown', driver:{name:'Ura', years: '1984', sex: 'male', skills:'17'}},
// ];

// for (i = 0; i < cars.length; i++){
//     newArray.push(JSON.stringify(cars));
// }
// console.log(newArray);


// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. 
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.

// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, 
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo']}, 
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
//     {name: 'max', age: 30, status: true, skills: ['mysql', 'mongo']}];



// for ( const user of users){
//     console.log(user.name);
//     for (const skill of user.skills){
//         console.log(skill);
//     } 
// }


 
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.


// const newArray = [];

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];


// for ( const user of users){
//     newArray.push(user.address);
//     console.log(newArray);
// }
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// for ( i = 0; i < users.length; i++) {
//     const user = users[i];
//     const div = document.createElement("div");
//     let address = [];
//     for ( const address1EL in user.address) {
//         address = address + " " + user.address[address1EL];
//         div.innerText = `${user.name}  ${user.age}  ${user.status}  ${address}`;
//         document.body.appendChild(div);
//     }
//     console.log(div);
// }


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, 
// розділивши всі властивості по своїм блокам (div>div*4)


// for ( i = 0; i < users.length; i++) {
//     const user = users[i];
//     const div = document.createElement("div");
//     const h1 = document.createElement("h1");
//     const h2 = document.createElement("h2");
//     const h3 = document.createElement("h3");
//     const h4 = document.createElement("h4");

//     let address = [];
//     for ( const address1EL in user.address) {
//         address = address + " " + user.address[address1EL];
        
//         h1.innerText = user.name;
//         h2.innerText = user.age;
//         h3.innerText = user.status;
//         h4.innerText = address;
        
        
        
//         document.body.appendChild(div);
//         div.appendChild(h1);
//         div.appendChild(h2);
//         div.appendChild(h3);
//         div.appendChild(h4);
//     }
        

// }


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//  розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості


// for ( i = 0; i < users.length; i++) {
//     const user = users[i];
//     const div = document.createElement("div");
//     const name = document.createElement("h1");
//     const age = document.createElement("h2");
//     const status = document.createElement("h3");
//     const address = document.createElement("h4");


//     for ( const keys  in user.address) {
//         const elements = document.createElement("h4");
//         elements.innerText = user.address[keys];
//         address.appendChild(elements);
//          }


//         name.innerText = user.name;
//         age.innerText = user.age;
//         status.innerText = user.status;    
                
//         document.body.appendChild(div);
//         div.appendChild(name);
//         div.appendChild(age);
//         div.appendChild(status);
//         div.appendChild(address);

// }    


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true},
// {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
 // {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]


// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false}, 
//     {id: 2, name: 'petya', age: 30, status: true}, 
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'}, 
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
//     {user_id: 2, country: 'Poland', city: 'Krakow'}, 
//     {user_id: 4, country: 'USA', city: 'Miami'},];


// for ( const user of usersWithId) {
//     for ( const city of citiesWithId){
//         if( user.id === city.user_id){
//             user.adress = city;
//         }
//     }
// }

// console.log(usersWithId);


// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// - змінити цей текст використовуючи селектори id, class,  tag
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// const element = document.getElementById('content');
// element.innerText = "Седьмое правило Бойцовского клуба.";
// element.style.height = '300px';
// element.style.width = '300px';

// console.log(element);

// const elements = document.getElementsByClassName('rules');

// for ( const element of elements) {
//     element.innerText = "Новичок обязан принять бой.";
//     element.style.height = '300px';
//     element.style.width = '300px';
//     console.log(element);
// }

// const elements = document.getElementsByTagName('p');

// for ( const element of elements) {
//     element.innerText = "правило Бойцовского клуба."
//     element.style.height = '300px';
//     element.style.width = '300px';
//     console.log(element);
// }

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

// const table = document.createElement('table');
// const tr = document.createElement('tr');
// const td1 = document.createElement('td1');
// const td2 = document.createElement('td2');
// const td3 = document.createElement('td3');

// tr.appendChild(td1);
// tr.appendChild(td2);
// tr.appendChild(td3);

// table.appendChild(tr);

// document.body.appendChild(table);


// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені


//     const table = document.createElement('table');

//     for ( let i = 0; i < 10; i++){
//     const tr = document.createElement('tr');
//     for ( let i = 0 ; i < 3; i++){
//         const td = document.createElement('td'); 
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }

// document.body.appendChild(table);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені

//     const table = document.createElement('table');

//     for ( let i = 0; i < 10; i++){
//     const tr = document.createElement('tr');
//     for ( let i = 0 ; i < 5; i++){
//         const td = document.createElement('td'); 
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }

// document.body.appendChild(table);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

//     const table = document.createElement('table');
//     result1 = prompt('Number',);
//     result2 = prompt('Number',);
//     for ( let i = 0; i < result1; i++){
//     const tr = document.createElement('tr');
//     for ( let i = 0 ; i < result2; i++){
//         const td = document.createElement('td'); 
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }

// document.body.appendChild(table);



// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
//  - знайти всі div та змінити ім колір на червоний


// const element = document.getElementsByTagName('*');
// for ( const tag of element ) {
//     if (tag.getAttribute('id')){
//         console.log(tag);
//     }
// }

// const element = document.getElementsByTagName('p');
// for ( const tag of element ) {
//         tag.innerText = 'hello oktenweb!'
//         console.log(tag);
    
// }


// const element = document.getElementsByTagName('div');
// for ( const tag of element ) {
//     tag.style.background = 'red';
//     console.log(tag);

// }


// 
// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.



// const array = document.getElementsByTagName('h2');
// const wrap = document.getElementById('wrap');
// const ul = document.createElement('ul');

// for ( const h2 of array){
//    const li = document.createElement('li');
//    li.innerText = h2.innerText;
//    ul.appendChild(li);
// }
// wrap.appendChild(ul);

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// let rules = [
    //     {
    //         title: 'Первое правило Бойцовского клуба.',
    //         body: 'Никому не рассказывать о Бойцовском клубе.'
    //     },
    //     {
    //         title: 'Второе правило Бойцовского клуба.',
    //         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    //     },
    //     {
    //         title: 'Третье правило Бойцовского клуба.',
    //         body: 'В схватке участвуют только двое.'
    //     },
    //     {
    //         title: 'Четвертое правило Бойцовского клуба.',
    //         body: 'Не более одного поединка за один раз.'
    //     },
    //     {
    //         title: 'Пятое правило Бойцовского клуба.',
    //         body: 'Бойцы сражаются без обуви и голые по пояс.'
    //     },
    //     {
    //         title: 'Шестое правило Бойцовского клуба.',
    //         body: 'Поединок продолжается столько, сколько потребуется.'
    //     },
    //     {
    //         title: 'Седьмое правило Бойцовского клуба.',
    //         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    //     },
    //     {
    //         title: 'Восьмое и последнее правило Бойцовского клуба.',
    //         body: 'Новичок обязан принять бой.'
    //     },
    
    // ];
    

// const wrap = document.createElement('div');
// wrap.id = 'wrap';
// for ( let i = 0; i < rules.length; i++) {
//     const rule = rules[i];
//     const div = document.createElement('div');
//     const h2 = document.createElement('h2');
//     const p = document.createElement('p');
//     div.className = `rules rule${i+1}`;
//     h2.innerText = rule.title;
//     p.innerText = rule.body;
//     div.appendChild(h2);
//     div.appendChild(p);
//     wrap.appendChild(div);
// }
// document.body.appendChild(wrap);