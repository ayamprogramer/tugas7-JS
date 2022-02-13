function kondisi1() {
    for (var i = 1; i <= 20; i++) {
        console.log("Perulangan Ke " + i)
    }
}

function kondisi2() {
    for (var i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log("Bilangan Genap")
        } else console.log(i)
    }
}
kondisi2();