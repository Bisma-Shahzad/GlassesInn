var addSub = document.getElementById('addSub')
var addDel = document.getElementById('addDel')
var addTot = document.getElementById('addTot')


var newProduct = JSON.parse(localStorage.getItem('details'));
console.log(newProduct)
addSub.innerText = newProduct.subtotal
addDel.innerText = newProduct.deliveryCharges
addTot.innerText = newProduct.totalPayment

console.log(addSub)

window.orderPlace = function () {
    localStorage.clear()
    window.location.replace('index.html')
    
    
}

