const divideAndSort = (angka)=>{

    let str = angka + ''
    let segment = []
    let hasilSementara = ''

    for(let i = 0; i < str.length; i++){
        if(str[i] === '0'){
            if (hasilSementara.length !== 0) {
                segment[segment.length] = hasilSementara
                hasilSementara = ''
        }
        }else{
            hasilSementara += str[i]
        }
        
    }
    if (hasilSementara.length !== 0) {
            segment[segment.length] = hasilSementara
    }
    for (let i = 0; i < segment.length; i++) {
        segment[i] = sorting(segment[i])
    }
    let hasil = ''
    for (let i = 0; i < segment.length; i++) {
        hasil += segment[i] 
    }
    console.log(hasil)
} 

const sorting = (segment)=>{
    let arr = []
    for (let i = 0; i < segment.length; i++) {
        arr[arr.length] = segment[i]
        return
    }
}


divideAndSort(5956560159466056)

