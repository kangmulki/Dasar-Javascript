// method pada array
// 1. JOIN
// var arr = ['Sandhika','Galih','Nofa','jamrud'];
//     console.log(arr.join(' - '));

// 2. PUSH(menambahkan elemen diakhir) & POP (menghapus elemen akhir)
// arr.push('Doddy');
// arr.pop();
// console.log(arr.join(' - '));

// 3. unshift(menambahkan elemen diakhir) & shift (menghapus elemen akhir)
// arr.unshift('Ujang');
// arr.shift();
// console.log(arr.join(' - '));

// 4. splice & slice
// splice(indexAwal, mau DihapusBerapa, elemenbaru1, ...)
// // arr.splice(2,0,'Ujang');
// console.log(arr.join(' - '));
// slice(awal, akhir);
// var arr2 = arr.slice(1,3);
// console.log(arr2.join(' - '));

// 5. forEachs
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['Sandhika','Galih','Nofa','jamrud'];
//  for(i = 0; i<angka.length; i++){
//      console.log(angka[i]);
//  }
// angka.forEach(function(e){
//     console.log(e);
// })
//     nama.forEach(function(e){
//         console.log("Nama ke - 1 : "+e);
//     })

// 6. map (mengembalikan nilai array)

// var angka = [1,2,3,6,5,7,8];
// var angka2 = angka.map(function(e){
//     return e;
// });

// console.log(angka2.join(" - "));

// 7. Filter (mencari nilai dalam bentuk array & mengembalikain nilai kedalama bentuk array) && find (menghasilkan 1 nilai)
// var angka = [1,2,3,6,5,7,8];
// var angka2 = angka.filter(function(x){
//     return x == 5;
// });

// console.log(angka2);
var angka = [1,2,3,6,5,7,8];
var angka2 = angka.find(function(x){
    return x > 5;
});

console.log(angka2);