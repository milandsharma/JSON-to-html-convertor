//jshint esversion: 6
let Name = document.querySelector('.name');
let email = document.querySelector('.mail');
let number = document.querySelector('.number');
let btn = document.querySelector('button');
let con = document.querySelector('.result');
let JSONcontainor = document.querySelector('.JSONcontainor');
let JSONbtn = document.querySelector('.JSONbutton');

let jsonArray = [{
    "name": "John",
    "email": "milandsharma24@gmail.com",
    "number": "1234567890"
}];

btn.addEventListener('click', function(){
    let obj = {
        name: Name.value,
        email: email.value,
        number: number.value
    };
    jsonArray.push(obj);
    jsonArray.forEach(function(item){
        let p = document.createElement('p');
        p.innerHTML = `${JSON.stringify(item)}`;
        con.appendChild(p);

        
    });
});
JSONbtn.addEventListener('click', function(){

console.log(jsonArray[0].name)

    let NAME = document.createElement('p');
    NAME.innerHTML = `Name : ${jsonArray[0].name}`;
    JSONcontainor.appendChild(NAME);

    let EMAIL = document.createElement('p');
    EMAIL.innerHTML = `+91 : ${jsonArray[0].email}`;
    JSONcontainor.appendChild(EMAIL);

    let NUMBER = document.createElement('p');
    NUMBER.innerHTML = `Phone : ${jsonArray[0].number}`;
    JSONcontainor.appendChild(NUMBER);
});


