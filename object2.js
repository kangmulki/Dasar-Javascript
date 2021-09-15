// membuat object
// object literal
 var mhs = {
     nama : "Mulki",
     nrp  : "0912837",
     email : "mulki@gmail.com",
     jurusan : "Informatika"
 };
 var mhs2 = {
    nama : "Candra",
    nrp  : "0468334",
    email : "bewok@gmail.com",
    jurusan : "Mesin"
};

// function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan){
    var mhs = {};
        mhs.nama = nama,
        mhs.nrp = nrp,
        mhs.email = email,
        mhs.jurusan = jurusan

        return mhs;
}

var mhs3 = buatObjectMahasiswa("Jejen","09843","jejen@gmail.com","Teknik Sipil");
var mhs4 = buatObjectMahasiswa("aldo","08934","aldo@gmail.com","Teknik Informatika");

// function constructor
function Mahasiswa(nama, nrp, email, jurusan){
    // var this
    this.nama = nama,
    this.nrp = nrp,
    this.email = email,
    this.jurusan = jurusan;
}
 
var mhs5 = new Mahasiswa("Bambang","0982347","Bmabamng@gmail.com","Multimedia");