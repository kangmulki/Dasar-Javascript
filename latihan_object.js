// membuat Object Angkot
function Angkot(sopir,trayek,penumpang,khas){
    this.sopir = sopir,
    this.trayek = trayek,
    this.penumpang = penumpang,
    this.khas = khas;   

    // penumpang naik
    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);

        return penumpang;
    }
    // penumpang turun
    this.penumpangTurun = function(namaPenumpang, bayar){

        if (this.penumpang.length === 0 ){
            alert("angkot masih Kosong !!");
            return false;
        }

        for(var i = 0; i<this.penumpang.length; i++){
            
            if(this.penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined;
                this.khas += bayar;

                return this.penumpang;
            }
        }
    }
}

var angkot1 = new Angkot("Jajang",["Cicaheum","Cibiru"],[],0);  
var angkot2 = new Angkot("Aldo",["Ciroyom","Cibaduyut"],[],0);  