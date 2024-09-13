const sayur = [
    {id: 1, name: "Sayur Hijau", harga: 2000, image: "img/sayurh.jpg", jumlah: 0},
    {id: 2, name: "Cabai", harga: 1500, image: "img/cabai.jpg", jumlah: 0},
    {id: 3, name: "Jagung", harga: 1000, image: "img/jagung.jpg", jumlah: 0},
    {id: 4, name: "Wortel", harga: 3000, image: "img/wortel.jpg", jumlah: 0},
    {id: 5, name: "Semangka", harga: 5000, image: "img/semangka.jpg", jumlah: 0}
]

let cart = []

// ini untuk simpen item nya ke local storage
function simpanKeranjang() {
    localStorage.setItem("keranjang", JSON.stringify(cart))
}

// load sayur yang ada di cart
function loadKeranjang() {
    const listKeranjang = localStorage.getItem('keranjang')
    if(listKeranjang){
        cart = JSON.parse(listKeranjang)
    } else {
        console.error("Data tidak ada di keranjang!");
    }
}


// show sayur di page utama
function tampilProduk() {
    const sayurList = document.getElementById("product__list");
    sayur.forEach(sayur => {
        sayurList.innerHTML += 
        `
        <div class="text-center">
                <img
                  src="${sayur.image}"
                  class="rounded product__image"
                  alt="..."
                />
                <h6 class="product__image--title mt-3">${sayur.name}</h6>
                <p>Rp. ${sayur.harga}</p>
                <button class="btn btn-primary" onclick="keranjang(${sayur.id})">Masukkan Keranjang <i class="fa-solid fa-plus"></i></button>
        </div>
        `
    }); 
}


// add sayur ke cart
function keranjang(id) {
    loadKeranjang()
    const cartSayur = cart.find(itemSayur => itemSayur.id === id)
    if(cartSayur){
        cartSayur.jumlah += 1;
    } else {
        const newSayur = sayur.find(itemSayur => itemSayur.id === id)
        if(newSayur){
            cart.push({...newSayur, jumlah:1})
        } else {
            console.error("Produk tidak ada, id: ",id);
        }
    }
    simpanKeranjang()
}




tampilProduk()