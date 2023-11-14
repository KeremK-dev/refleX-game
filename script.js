//yapimci(ben)
let yapimci = document.getElementById("yapimci")
//oklar
let üst_ok = document.getElementById("üst_ok")
let sag_ok = document.getElementById("sag_ok")
let sol_ok = document.getElementById("sol_ok")
let alt_ok = document.getElementById("alt_ok")

let calisiyormi = false


let buttonlar = ["üst_ok","sag_ok","sol_ok","alt_ok"]

//sayı artım
function ok_bilgi(){
    sayac +=1
    console.log(this.id)
    puan.textContent=sayac
    hight_skor()
    puan_sec()
}

function yanlis(){
    console.log(this.id)
    sayac -=1
    puan.textContent=sayac
    hight_skor()
    skr_kyt()
}

function hight_skor() {
    if(sayac >= h_sayac){
        h_sayac = sayac
    }
    h_skr.innerText = h_sayac
}
//sayaclar
let puan = document.getElementById("puan")
let h_skr = document.getElementById("h_hig")
let sayac = 0
let h_sayac = 0
puan.textContent = sayac
h_skr.textContent = h_sayac
//zaman
var geriSayimElementi = document.getElementById("geriSayim");
var geriSayimDegerElementi = document.getElementById("geriSayimDeger");
var baslatDurdurButonu = document.getElementsByClassName("baslatDurdur")[0];
var geriSayimZamani; 
var deger = 10;

function baslatGeriSayim() {
    geriSayimDegerElementi.textContent = deger;

    if (deger > 0) {
        geriSayimZamani = setTimeout(function() {
            deger--
            geriSayimElementi.value = deger
            baslatGeriSayim();
        }, 1000);
    } else {
        yapimci.textContent='Game Over'
        pasif()
        calisiyormi=false
    }
}

baslatDurdurButonu.addEventListener("click", function() {
    if (baslatDurdurButonu.textContent === "Başlat") {
        baslatGeriSayim();
        puan_sec()
        baslatDurdurButonu.textContent = "tekrar";
        baslatDurdurButonu.onclick=aktif
        calisiyormi=true
    } else {
        clearTimeout(geriSayimZamani);
        baslatDurdurButonu.textContent = "Başlat";
        deger = 10
    }
});

geriSayimElementi.addEventListener("input", function() {
    var yeniDeger = geriSayimElementi.value;
    geriSayimDegerElementi.textContent = yeniDeger;
});
//aktiflik pasiflik
function aktif(){
    alt_ok.disabled=false
    üst_ok.disabled=false
    sag_ok.disabled=false
    sol_ok.disabled=false
}
function pasif(){
    for (let i = 0; i < buttonlar.length; i++) {
        document.getElementById(buttonlar[i]).style.borderColor="blue"
        document.getElementById(buttonlar[i]).onclick=yanlis
    }
    alt_ok.disabled=true
    üst_ok.disabled=true
    sag_ok.disabled=true
    sol_ok.disabled=true
}

let bush = null
function puan_sec(){
    let random = Math.floor(Math.random()*(3-0+1))
    let eski = random
    while(random==eski) random =  Math.floor(Math.random()*(3-0+1))
    for (let i = 0; i < buttonlar.length; i++) {
        if(random==i){
            document.getElementById(buttonlar[i]).style.borderColor="pink"
            document.getElementById(buttonlar[i]).onclick=ok_bilgi
            bush = i
        }
        else{
            document.getElementById(buttonlar[i]).style.borderColor="blue"
            document.getElementById(buttonlar[i]).onclick=yanlis
        }
    }
}

window.addEventListener("keydown",muhammet)
function muhammet(event){
    if(calisiyormi)
    {const tiklanan = event.keyCode
    const bushlar = [38, 37, 39,40]  
    if(tiklanan == bushlar[bush]){
        ok_bilgi()
    }}
}