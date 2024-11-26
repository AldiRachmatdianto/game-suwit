let main = true;
while (main) {

        let player = prompt("Pilih: \n1. Gunting \n2. Batu \n3. Kertas");
        let lawan = Math.random();
        if (lawan < 0.36) {

            lawan = "Batu";
            
        }
        else if (lawan >= 0.37 && lawan < 0.96) {

            lawan = "Gunting";
        }
        else {

            lawan = "Kertas";
        }
// ============================================================================
        let hasil = "";
        if (player == lawan) {
            hasil = "SERI COYYYYYYYY";
            
        }
         else if (player == "Batu"){

            hasil = (lawan == "Kertas") ? "NT NT" : "MENANGG";

        } else if (player == "Kertas") {

            hasil = (lawan == "Gunting") ? "NT NT" : "MENANGG";

        } else if (player == "Gunting"){
            hasil = (lawan == "Batu") ? "NT NT" : "MENANGG";
        } else {
            hasil = "YA GAK TAU MAKANYA YANG BENER MASUKINNYA KONTOL";
        }
        alert(`Anda Memilih: ${player} \nLawan Memilih: ${lawan} \nHasil: ${hasil}`);
        main = confirm("Coba lagi?");
    
}
alert("Terima kasih telah bermain");
