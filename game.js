var tanya =true;
while(tanya){
//manangkap pilihan player
var pilih = prompt("Pilih : Gajah, Semut, Orang");

//Menakap pilihan komputer

var computer = Math.random();

if(computer < 0.34){
    computer = "Gajah";
}
else if(computer >= 0.34 && computer < 0.67){
    computer = "Orang";
}
else{
    computer = "Semut";
}
// console.log(computer);

//Rules
var hasil = "";
    if(pilih == computer){
        hasil = "seri !";
    }
    else if(pilih == "Gajah"){
            // if(computer == "Orang"){
            //     hasil = "Menang";
            // }
            // else{
            //     hasil = "Kalah";
            // }
            hasil = (computer == 'Orang' ? 'Menang' : 'Kalah');
    }
    else if(pilih == "Orang"){
            // if(computer == "Gajah"){
            //     hasil = "Kalah";
            // }
            // else{
            //     hasil = "Menang";
            // }
            hasil = (computer == 'Gajah' ? 'Kalah' : 'Menang');
    }
    else if(pilih == "Semut"){
        // if(computer == "Gajah"){
        //     hasil = "Kalah";
        // }
        // else{
        //     hasil = "Menang";
        // }
        hasil = (computer == 'Orang' ? 'Kalah' : 'Menang');
    }
    else{
        hasil = "Memasukkan Pilihan yang Salah !!";
    }

    //Menampilkan Hasil

    alert("Kamu memilih : "+pilih+" dan Komputer memilih "+ computer +" \nMaka Hasilnya Kamu : "+hasil);

    tanya = confirm("Lagi ?? ");
}
alert("Terima Kasih Telah Bermain");