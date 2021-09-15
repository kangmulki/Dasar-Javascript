function tampilkanangka(n){
    

    if(n === 0){
        return
    }
    console.log(n);
    return tampilkanangka(n-1);
}

tampilkanangka(10);