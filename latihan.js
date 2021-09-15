var a = 100;
       console.log("Selamat Datang");
       console.log("Hasilnya adalah " + a);
alert("Haiii");
alert("Nama Saya");
alert("Muhamad Mulki Sukmana");

penginputan
var nama = prompt("Masukkan Nama Anda : ");
alert("Nama Anda : "+nama);
alert("Selamat Datang");
var coba = true;

pengulangan
while(coba == true){
    var nama = prompt("Masukkan Nama : ");


    coba = confirm("Ulang ??");
}
// alert("Thnkyou");

pengulangan
alert("Mulai sekarang");
for(var i=0; i<5; i++){
    alert('Haii');
}
alert("Terima Kasih");

Perkondisian
var nilai = prompt("Masukkan Nilai Anda : ");

if(nilai % 2 === 0){
    alert(nilai+" adalah bilangan Genap");
}
else{
    alert(nilai+" adalah bilangan Ganjil");
}

var nilai = true;

while(nilai){
    console.log("hello world");

    nilai = confirm("apakah mau diulang lagi ??");
}

var nilai = prompt("Masukkan Jumlah Angkot : ");

for(angkot = 1; angkot<=nilai; angkot++ ){
    if(angkot < 7){
    console.log("Angkot No. "+angkot+" beroperasi dengan baik.");
    }
    else{
        console.log("Angkot No. "+angkot+" sedang tidak beroperasi.");
    }
    
}