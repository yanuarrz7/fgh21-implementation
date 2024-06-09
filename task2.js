const kata = 'Saya Belajar Javascript';
const panjangKata = kata.length;
let hasil = '';
let hasilAkhir = '';

for (let i = 0; i < panjangKata; i++) {
    if (kata[i] == ' ' || i == panjangKata - 1) {
        if (i == panjangKata - 1 && kata[i] != ' ') {
            hasilAkhir += kata[i];
        }
        if (hasil.length > 0) {
            hasil = hasilAkhir + ' ' + hasil;
        } else {
            hasil = hasilAkhir;
        }
        hasilAkhir = '';
    } else {
        hasilAkhir += kata[i];
    }
}
console.log(hasil);