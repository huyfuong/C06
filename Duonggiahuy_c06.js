function letKeUocSo() {
    console.log("Bài 1: Liệt kê ước số");
    let soNhapVao = Number(prompt("Nhap vao 1 so nguyen duong: "));
    for (let i = 1; i <= soNhapVao; i++) {
        if (soNhapVao % i === 0) {
            console.log(i)
        }
    }
}

letKeUocSo();

function letKeUocSoChan() {
    console.log("Bài 2: Liệt kê ước số chẵn");
    let soNhapVao = Number(prompt("Nhap vao 1 so nguyen duong: "));
    for (let i = 2; i <= soNhapVao; i += 2) {
        if (soNhapVao % i === 0) {
            console.log(i)
        }
    }
}

letKeUocSoChan();

function tongUocSo() {
    console.log("Bài 3: Tổng ước số");
    let s = 0;
    let soNhapVao = Number(prompt("Nhap vao 1 so nguyen duong: "));
    for (let i = 0; i <= soNhapVao; i++) {
        if (soNhapVao % i === 0) {
            s = s + i;
        }
    }
    return s
}

console.log(tongUocSo());

function tichUocSoChan() {
    console.log("Bài 4: Tích ước số chẵn");
    let p = 1;
    let soNhapVao = Number(prompt("Nhap vao 1 so nguyen duong: "));
    for (let i = 2; i <= soNhapVao; i +=2) {
        if (soNhapVao % i === 0) {
            p *= i;
        }
    }
    return p
}

console.log(tichUocSoChan());

function demUocSo() {
    console.log("Bài 5: Đếm ước số");
    let soNhapVao = Number(prompt("Nhap vao 1 so nguyen duong: "));
    let count = 0;
    for (let i = 1; i <= soNhapVao; i++) {
        if (soNhapVao % i === 0) {
            count++;
        }
    }
    return {
        'ket qua' : count
    }
}

console.log(demUocSo());

function soNguyenTo(soNhapVao) {
    console.log("Bài 6: Số nguyên tố")
    let a = soNhapVao;
    if (a < 2) {
        console.log(soNhapVao,"không phai la so nguyen to");
    } 
    else {
        let demUocSo = 1;
        for ( let i = 2; i <= Math.sqrt(soNhapVao); i++) {
            if ( a % i === 0) {
                demUocSo = 0;
                break;
            }
        }
        if (demUocSo === 1) {
            console.log(soNhapVao,"la so nguyen to");
        }
        else {
            console.log(soNhapVao,"khong phai la so nguyen to")
        }
    }
}

soNguyenTo(9);

function lietKeSoChan(array) {
    console.log("Bài 7: Liệt kê số chẵn");
    for (let i = 0; i < array.length -1; i++) {
        if (array[i] % 2 === 0) {
            console.log(array[i]);
        }
    }
}

lietKeSoChan([5, 10, 15, 20, 26, 31, 40]);

function lietKeSoDuong(array) {
    console.log("Bài 8: Liệt kê số dương");
    for (let i = 0; i < array.length -1; i++) {
        if (array[i] > 0) {
            console.log(array[i]);
        }
    }
}

lietKeSoDuong([5, 10, 15, 20, 26, 31, 40, -1, -5, -8]);

function kTraSoNguyenTo(a) {
    if (a < 2) {
        return false;
    }
    else {
        let demUocSo = 1;
        for (let i = 2; i <= Math.sqrt(a); i++) {
            if ( a % i === 0) {
                demUocSo = 0;
                break;
            }
        }
        if (demUocSo === 1) {
            return true;
        }
        else {
            return false;
        }
    }
}


function lietKeSoNguyenTo(array) {
    console.log("Bài 9: Liệt kê số nguyên tố");
    for (let i = 0; i <= array.length -1; i++) {
        if (kTraSoNguyenTo(array[i]) == true) {
            console.log(array[i]);
        }
    }
}

lietKeSoNguyenTo([5, 10, 15, 20, 26, 31, 40, -1, -5, -8, 97]);



function tongAm(array) {
    console.log("Bài 10: Tổng Âm");
    let x = 0;
    for (let i = 0; i <= array.length -1; i++) {
        if (array[i] < 0) {
            x = x + array[i];
        }
    }
    return x;
}


function tichSoNguyenTo(array) {
    console.log("Bài 11: Tích số nguyên tố");
    let y = 1;
    for (let i = 1; i <= array.length - 1; i++) {
        if (kTraSoNguyenTo(array[i]) == true) {
            y *= array[i];
        }
    }
    return y;
}

console.log(tichSoNguyenTo([5, 10, 15, 20, 29, 31, 40, 97, 98]))


function demLe(array) {
    console.log("Bài 12: Đếm lẻ");
    let count = 0;
    for (let i = 0; i <= array.length - 1; i++) {
        if (array[i] % 2 === 1) {
            count++;
        }
    }
    return {
        'ket qua' : count
    }
}

console.log(demLe([5, 10, 15, 20, 29, 31, 40, 97, 1]));

function demSoNguyenTo(array) {
    console.log("Bài 13: Đếm số nguyên tố");
    let count = 0;
    for (let i = 0; i <= array.length - 1; i++) {
        if (kTraSoNguyenTo(array[i]) == true) {
            count++;
        }
    }
    return {
        'ket qua' : count
    }
}

console.log(demSoNguyenTo([5, 10, 15, 20, 29, 31, 40, 97, 1]));

function timAmDauTien(array) {
    console.log("Bài 14: Tìm Âm đầu tiên");
    for (let i = 0; i <= array.length -1 ; i++) {
        if (array[i] < 0) {
            return array[i];
        }
    }
    return false;
}

console.log(timAmDauTien([5, -10, 15, 20, 26, 31, 40, -1, -8, 97]));


function timSinhVien() {
    console.log("Bài 15: Tìm Sinh Viên")
    let nhapSo = String(prompt("Nhập mã sinh vien: "));
    let array = ['SV1', 'SV14',  'SV20', 'SV15', 'SV80'];
    let index = 0;
    for (let i = 0; i <= array.length -1; i++) {
        if (array[i] === nhapSo) {
            index = i + 1
        }
    }
    return index
    
}
console.log("Vị trí thứ: ",timSinhVien());