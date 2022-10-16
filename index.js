//Task 1
/*
    გვაქვს factory ობიექტი , რომელსაც აქვს რამდენიმე key-value წყვილი , 
    ასევე მეთოდი calculateWorkload - აბრუნებს მხოლოდ თანამშრომლის შესრულებული სამუშაოების მასივს (მაგალითის მიხედვით [40,25,28,30,31])
    და formatArray - რომელსაც გადაეცემა თანამშრომლის სახელი და აბრუნებს  ობიექტს თანამშრომლის სახელი  და ხელშეკრულების ამოწურვამდე
    დარჩენილი დროის მნშვნელობებით. ხელშეკრულების პერიოდი ყველა თანამშრომლისთვის არის 5 წელი. 
    მაგალითად ('John' ის შემთხვევაში დაგვიბრუნდება {name : "John", timeLeft : 4}) timeleft = 5 - timespent;
    გვაქვს 
    დალოგეთ calculateWorkload და formatArray შედეგები; 
    !!!აუცილებლად გამოიყენეთ bind მეთოდი
*/
const CONTRACT_VALUE = 5;

let factory = {
  facName: "Volkswagen Wolfsburg Plant",
  calculateWorkload: function () {
    let tempArr = this.employeeWeeklyWorkload;
    let result = [];
    if(tempArr){
      for (let i=0; i<tempArr.length; i++){
        result.push(tempArr[i].workload);
      }
    }
    return result;
  },
  formatArray: function (name) {
    let tempArr = this.employees;
    let resultObj = {};
    for (let i=0; i<tempArr.length; i++){
      if(tempArr[i].name === name){
        resultObj.name = name;
        resultObj.timeLeft = CONTRACT_VALUE - tempArr[i].timeSpent;
      }
    }
    return resultObj;
  }
};



let factoryEmployees = {
  employees: [
    { name: "John", timeSpent: 1 },
    { name: "Sam", timeSpent: 3 },
    { name: "Maria", timeSpent: 2 },
    { name: "Dan", timeSpent: 4 },
    { name: "Lorelai", timeSpent: 5 },
  ],

};

let checkEmployeeTimeLeft = factory.formatArray.bind(factoryEmployees, "Lorelai")();
console.log(checkEmployeeTimeLeft);

let workloadData = {
  employeeWeeklyWorkload: [
    { name: "John", workload: 40 },
    { name: "Sam", workload: 25 },
    { name: "Maria", workload: 28 },
    { name: "Dan", workload: 30 },
    { name: "Lorelai", workload: 31 },
  ],
};

let checkCalculateWorkload = factory.calculateWorkload.bind(workloadData);
console.log(checkCalculateWorkload());

//Task 2

/*
დაწერეთ ფუნქცია sumOfNumbers , რომელიც დააბრუნებს გადაცემული არგუმენტების ჯამს
აღნიშნული ფუნქცია გაუშვით applyს საშუალებით, შესაბამისად არგუმენტებიც applyს მეშვეობით უნდა გადაცეთ.

hint :  თუ კი ფუნქციაში არ გვაქვს this ქივორდის საჭიროება და შესაბამისად ობიექტი რომელსაც
thisმა უნდა მიუთითოს შეგიძლიათ apply call-ს პირველი არგუმენტად გადასცეთ null 
*/

function sumOfNumbers (...args){
  let sum = 0 ;
  for (let i = 0; i<args.length; i++){
    sum += args[i];
  }
  return sum;
  
}

let sum = sumOfNumbers.apply(null, [1,2,3,4,5,6,7])
console.log(sum);
//Task 3
/* 
    შექმენით ახალი ობიექტი car რომელსაც ექნება ორი key name და type , გამოიძახეთ start და stop მეთოდები 
    ამ ობიექტისთვის
*/

const Vehicle = {
  name: "Vehicle",
  type: "vehicle",
  start: function () {
    return `starting the ${this.name} ${this.type}`;
  },
  stop: function () {
    return `stopped the ${this.name} ${this.type}`;
  },
};

const car = {
  name: "Toyota",
  type: "Sedan",
};

console.log(Vehicle.start.bind(car)());
console.log(Vehicle.stop.bind(car)());


//Task 4

//გამოიყენეთ Math და apply მაქსიმალური მნიშვნელობის დასათვლელად მასივიდან


let arr = [1,2,4,5,632,5,21,1];

let max = Math.max.apply(null, arr);
console.log(max);

let min = Math.min.apply(null, arr);
console.log(min);