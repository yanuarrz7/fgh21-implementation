const text = "malam"
let panjangText = text.length

if(panjangText > 0){
    let hasil = ""
    for (let i = panjangText - 1; i >= 0; i--) {
        hasil += text[i]
    }if(hasil === text){
        console.log('Palindrom')
    }
}