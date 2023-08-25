"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// // function body 1
// const greetings: Function = (message: string)=> {
//     console.log(message);
// };
// // function call 1
// greetings("Hello World parameter");
// // function body 2
// const func1: Function = (param: number)=> {
//     console.log('param is : ', param);
// };
// // function call 2
// func1(154);
// // Variables.
// let name: string = 'Dhairya';
// let age: number = 23;
// let single: boolean = true;
// let arr: Array<number> = [1,2,3];
// let arr2: number[] = [4,5,6];
// console.log({name, age, single, arr, arr2}); 
// let tup1: [number, string];
// console.log(tup1);
// tup1 = [1, 'Sunil'];
// console.log(tup1);
// enum Status {Online, Offline};
// let status: Status = Status.Offline;
// console.log(status);
// let apiResponse: any[] = ['name', age, 'address', 1.01];
// console.log(apiResponse);
// let newFn = (message: string): number => {
//     console.log(message);
//     return message.length;
// }
// let newFnRes = newFn('Hare Krishna');
// console.log(newFnRes);
// // Aliases.
// type list = Array<number>;
// let newList: list = [1,2,3];
// console.log({newList});
// type unionList = Array<string | number>;
// let newList2: unionList = ['Dhairya', 24, 'Harsh', 55];
// console.log({newList2});
// type objectList = (number | Array<string>)[];
// let newList3 : objectList = [['Dhairya', 'Komal'], 25, 56, ['Vikas']];
// console.log({newList3});
// // Functions with optional argument.
// let func2 = (name: string, age?: number): void => {
//     if(age){
//         console.log('We have the age as well: ', age);
//     }
//     console.log('The name is: ', name);
//     console.log('Exiting the function now.');
//     return ;
// };
// func2('Dhairya', 23);
// func2('Vikas');
// // Function with arguments in spread.
// const func3 = (captain: string, ...team: string[]): void => {
//     console.log('Name of the captain is: ', captain);
//     console.log('The team mates are: ');
//     for(let player of team) {
//         console.log(player);
//     }
//     console.log('Ending the function.');
//     return ;
// };
// func3('Rohit', 'Virat', 'Dhoni', 'Sachin');
// // Function returning a function.
// const func4 = (name: string): Function => {
//     const n: string = name;
//     return (): void => {
//         console.log('Inside the returned function. It accesses the passed value.', n);
//     };
// };
// const func4Res: Function = func4('Dhairya');
// func4Res();
// // Function returning object of functions.
// const lineUp = (): any => {
//     let nowBatting : number = 0;
//     return {
//         nextBatter: (): void => { 
//             ++nowBatting; 
//         },
//         currentBatter: (): void => {
//             console.log({nowBatting});
//         }
//     };
// };
// const batter = lineUp();
// batter.currentBatter();
// batter.nextBatter();
// batter.currentBatter();
// // Classes
// class Invoice {
//     companyProfile: string;
//     constructor(public name, public city, public state){
//         this.companyProfile = name + ' ' + city + ' ' + state;
//     };
// };
// let googleInvoice = new Invoice("Google", "Gurugram", "Harayana");
// let zomatoInvoice = new Invoice('Zomato', 'Bangaluru', 'Karnataka');
// console.log(googleInvoice.companyProfile);
// console.log(zomatoInvoice.companyProfile);
// // Inheritance
// class Report {
//     companyProfile: string;
//     constructor(public name: string){
//         this.companyProfile = name;
//     };
// };
// class Invoice extends Report{
//     // parameters of the constructor become the class members.
//     constructor(public name: string, public total: number){ 
//         super(name);
//     };
//     printInvoice = (): string => {
//         return this.name + ' ' + this.total;
//     };
// };
// let invoice = new Invoice("Tata Sons", 200);
// console.log(invoice.name);
// console.log(invoice.total);
// class LandingBill extends Report {
//     constructor(public name: string, private city: string, public state: string){
//         super(name);
//     };
//     printLandingBill = (): string => {
//         return this.name + ' ' + this.city + ' ' + this.state;
//     };
// };
// let landBill = new LandingBill('Atlassian', 'Banglore', 'Karnataka');
// console.log(landBill.companyProfile, landBill.printLandingBill());
// // Interfaces
// interface User {
//     email: string,
//     name: string,
//     age: number
// };
// const getProfile = (user: User): string => {
//     return `Welcome in getProfile method, ${user.name} => {${user.age}, ${user.email}}`;
// };
// let dummyUser= {
//     email: 'dummy@gmail.com',
//     name: 'dummy kumar',
//     age: 90
// };
// console.log(getProfile(dummyUser));
// interface InvoiceFn {
//     (name: string, total: number): void;
// };
// let myInvoice: InvoiceFn = (name: string, total: number): void => {
//     console.log(name);
//     console.log(total);
// };
// myInvoice('MMT', 25);
// interface User {
//     email: string;
//     name?: string;
// };
// class Admin {
//     role: string;
//     constructor(email: string) {
//         this.role = 'Admin';
//     }
// };
// const getprofile = (user: User): string => {
//     return 'Welcome '+user.email;
// };
// let joe = new Admin('joe@example.com');
// console.log({joe});
// interface IPost {
//     title: string;
//     body: string;
// };
// class Post implements IPost {
//     title: string;
//     body: string;
//     constructor(post: IPost) {
//         this.title = post.title;
//         this.body = post.body;
//     };
//     printPost = (): void => {
//         console.log(this.title);
//         console.log(this.body);
//     };
// };
// const post = new Post({title: 'New Title', body: 'New Body'});
// console.log(post.title);
// console.log(post.body);
// post.printPost();
// High order functions
var dbQuery = function () {
    setTimeout(function () {
        console.log('Console log query results.');
    }, 3000);
};
var loadPage = function (fn) {
    console.log('Header');
    fn();
    console.log('Sidebar');
    console.log('Footer');
};
loadPage(dbQuery);
