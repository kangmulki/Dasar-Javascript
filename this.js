// this = mengembalikan object global

// cara1 - function declaration
// function halo(){
//     console.log(this);
//     console.log("Hallo");
// } 
// halo();

// cara 2 -  object literal
// var obj = {a : "ujang",b : "dadang"};
// obj.halo = function(){
//     console.log(this);
//     console.log("Hallo2");
// }
// obj.halo();
// this = mengembalikan object yang bersangkutan

// cara 3 - constructor
function halo(){
    console.log(this);
    console.log("Hallo3");
}

new halo();
var obj = new halo();
//this = mengembalikan object yang baru dibuat

//membuat Object

// cara1 - function declaration
// function halo(){
//     console.log("Hallo");
// } 

// halo();

// cara 2 -  object literal
// var obj = {};
// obj.halo = function(){
//     console.log("Hallo2");
// }
// obj.halo();

//cara 3 - constructor
// function halo(){
//     console.log("Hallo3");
// }

// new halo();

