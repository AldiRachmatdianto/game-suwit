let h1 = document.getElementById("h1");
let nama = document.getElementById("nama");

nama.innerHTML = prompt("Siapa Nama Anda?");
let gantiNama = nama.textContent;
gantiNama = gantiNama.toUpperCase();




let main = confirm("Ingin Bermain Suwit?");

while (main) {

        let player = prompt("Pilih: \n- Gunting \n- Batu \n- Kertas");
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
         else if (player == "Batu" || player == "batu"){

            hasil = (lawan == "Kertas") ? "NT NT" : "MENANGG";

        } else if (player == "Kertas" || player == "kertas") {

            hasil = (lawan == "Gunting") ? "NT NT" : "MENANGG";

        } else if (player == "Gunting" || player == "gunting"){
            hasil = (lawan == "Batu") ? "NT NT" : "MENANGG";
        } else {
            hasil = "YA GAK TAU MAKANYA YANG BENER MASUKINNYA KONTOL";
        }
        alert(`Anda Memilih: ${player} \nLawan Memilih: ${lawan} \nHasil: ${hasil}`);
        main = confirm("Coba lagi?");
        
        if (main === false) {

            h1.innerHTML = `SEMOGA BERJUMPA LAGI ${gantiNama}!!!!!!`
        }
    
}
alert("Terima kasih telah bermain");


