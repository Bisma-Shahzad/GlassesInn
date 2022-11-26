var cartTableBody = document.getElementById('cartTableBody');
var name;
var rate;
var subTotalShow = document.getElementById('subTotalShow')
var deliveryCharges = document.getElementById('deliveryCharges')
var totalPaymentShow = document.getElementById('totalPaymentShow')

var cartnewProduct = JSON.parse(localStorage.getItem('product'));
console.log(cartnewProduct)
name = cartnewProduct.name
rate = cartnewProduct.rate
var rateShow = rate.slice(3)
// localStorage.clear()




cartTableBody.innerHTML += `<tr>
<td id="remove"><button onclick="removeCart(this)" id="crossbut"><i class="fa-solid fa-xmark"></i></button></td>
<td id="product">${name}</td>
<td id="price"><span id="priceShow">${rateShow}</span></td>
<td id="quantity"><input type="number" min="1" id="quantityNum" value="1"></td>
<td id="total"><span id="totalShow"></span></td>
</tr>
`

var price = document.getElementById('priceShow').innerText
var quantity = document.getElementById('quantityNum').value
console.log(quantity)
var total = document.getElementById('totalShow')
total.innerText = parseInt(price * quantity)
console.log(total.innerText)
subTotalShow.innerText = total.innerText
console.log(subTotalShow)
var s = parseInt(subTotalShow.innerText)
var d = parseInt(deliveryCharges.innerText)
// console.log(deliveryCharges.innerText)
totalPaymentShow.innerText = s+d
console.log(totalPaymentShow.innerText)


window.removeCart = function (e) {
    e.parentNode.parentNode.remove()
}

window.addressDirect = function () {
    window.location.replace('address.html')
    var subtotalDown = s
    var deliveryChargesDown = d
    var totalPaymentShowDown = totalPaymentShow.innerText
    // console.log(subtotalDown)
    var obj = {
        subtotal: subtotalDown,
        deliveryCharges: deliveryChargesDown,
        totalPayment: totalPaymentShowDown
    }
    localStorage.setItem('details', JSON.stringify(obj))
}
