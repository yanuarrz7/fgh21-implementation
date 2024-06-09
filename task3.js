function FazzFood(harga, voucher, jarak, pajak) {
    
    const harga = 60000;
    const voucher = 'FAZZFOOD50';
    const jarak = 5;
    const pajak = true;

    if (pajak) {
        harga += harga * 0.05;
    }
    let diskon = 0;
    if (voucher === 'FAZZFOOD50' && harga >= 50000) {
        let hargaSementara = harga * 0.5;
        if (hargaSementara > 50000) {
            diskon = 50000;
        } else {
            diskon = hargaSementara;
        }
    } else if (voucher === 'DITRAKTIR60' && harga >= 25000) {
        let hargaSementara = harga * 0.6;
        if (hargaSementara > 30000) {
            diskon = 30000;
        } else {
            diskon = hargaSementara;
        }
    }
    let biayaPengiriman;
    if (jarak <= 2) {
        biayaPengiriman = 5000;
    } else {
        biayaPengiriman = 5000 + (jarak - 2) * 3000;
    }

    let totalBiaya = hargaSetelahDiskon + biayaPengiriman;

    return totalBiaya;
}

let totalBiaya = FazzFood(harga, voucher, jarak, pajak);
console.log(`Total biaya: Rp` + totalBiaya);
