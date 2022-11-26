var image = document.getElementById('land-image-div')
var name = document.getElementById('land-title-h1')
var rate = document.getElementById('land-show-rate')


var newProduct = JSON.parse(localStorage.getItem('product'));
console.log(newProduct)
image.src = newProduct.image
name.innerText = newProduct.name
rate.innerText = newProduct.rate
localStorage.clear()


window.addtocart = function () {
    window.location.replace('login.html')
    var namid = name.innerText
    var ratid = rate.innerText
    console.log(ratid)
    var obj = {
        name: namid,
        rate: ratid,
    }
    localStorage.setItem('product', JSON.stringify(obj))
}

