const btn=document.querySelectorAll("button")
//console.log(btn)
btn.forEach(function(button,index){
    //console.log(button,index)
    button.addEventListener("click",function(event){{
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("H1").innerText
        var productPrice = product.querySelector("span").innerText
        //console.log(productImg,productName,productPrice)
        addcart(productImg,productName,productPrice)

    }})
})

function addcart(productImg,productName,productPrice){//Them gio hang
    var addtr = document.createElement("tr") 
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++)
    {
        var productT = document.querySelectorAll(".title")
        if(productT[i].innerHTML == productName){
            // alerE = "Sản phẩm của bạn đã có trong giỏ hàng"
            alert("Sản phẩm của bạn đã có trong giỏ hàng")
            return
        }
    }
    var trcontent = '<tr><td style="display:flex;align-items: center;"><img style="width:70px" src="'+productImg+'" alt=""><span class="title">'+productName+'</span></td><td><p><span class="prices">'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 30px; outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="cart-delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    //console.log(cartTable)
    cartTable.append(addtr) //Them the cho vao cuoi cung
    carttotal()
    DeletetCart()
    
}

// ------------------TotalPrice--------------------------
function carttotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC=0
    // console.log(cartItem.length)
    for (var i=0;i<cartItem.length;i++)
    {
        var inputValue = cartItem[i].querySelector("input").value
        // console.log(inputValue)
        var productPrice = cartItem[i].querySelector(".prices").innerHTML
        // console.log(productPrice)
        totalA = inputValue*productPrice*1000 //SL* don gia
        totalC = totalC + totalA
        // totalD = totalC.toLocaleString('de-DE')
        
    }
    var cartTotalA = document.querySelector(".price-total span") //Thay gia tri total vao the span
    var cartPrice = document.querySelector(".cart-icon span")
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE')//Xu ly dau cham
    cartPrice.innerHTML = totalC.toLocaleString('de-DE')
    // console.log(cartTotalA)
    inputchange()
}   

//-------------------Deletet cart-------------
function DeletetCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++)
    {
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartitemR = cartDelete.parentElement.parentElement
            cartitemR.remove()
            carttotal()
            // console.log(cartitemR)
        })
    }
}

function inputchange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++)
    {
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            carttotal()
        })
    }
}

// -----------------------------------------------
const cartbtn = document.querySelector(".fa-xmark")
const cartshow = document.querySelector(".fa-cart-plus")
cartshow.addEventListener("click",function(){
    document.querySelector(".cart").style.right = "0"
})

cartbtn.addEventListener("click",function(){
    document.querySelector(".cart").style.right = "-100%"
})


// --------------------------------------------------
function filterProducts() {
    var selectedPrice = document.getElementById("chongiaTien").value;
    var selectedCategory = document.getElementById("thechon").value;
    var productItems = document.querySelectorAll(".product-item");

    productItems.forEach(function(item) {
        var price = parseFloat(item.querySelector(".product-item-text span").innerText);
        var category = item.getAttribute("data-category");

        var priceInRange = true;
        if (selectedPrice !== "Mọi loại giá") {
            if (selectedPrice === "tamgia1" && !(price >= 20 && price <= 50)) {
                priceInRange = false;
            } else if (selectedPrice === "tamgia2" && !(price > 50 && price <= 70)) {
                priceInRange = false;
            }
        }

        var categoryMatch = true;
        if (selectedCategory !== "Chonmonan" && selectedCategory !== category) {
            categoryMatch = false;
        }

        if (priceInRange && categoryMatch) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

document.getElementById("chongiaTien").addEventListener("change", filterProducts);
document.getElementById("thechon").addEventListener("change", filterProducts);


// // Lắng nghe sự kiện khi người dùng thay đổi loại món ăn
// document.getElementById("select-category").addEventListener("change", filterFood);

// function filterFood() {
//     var category = document.getElementById("select-category").value; // Lấy giá trị của loại món ăn được chọn

//     var productItems = document.querySelectorAll(".product-item"); // Chọn tất cả các sản phẩm

//     productItems.forEach(function(item) {
//         var foodType = item.getAttribute("data-food-type"); // Lấy loại món ăn của từng sản phẩm

//         if (category === "all" || category === foodType) { // Hiển thị sản phẩm nếu loại món ăn được chọn là "Tất cả" hoặc trùng với loại của sản phẩm
//             item.style.display = "block";
//         } else {
//             item.style.display = "none"; // Ẩn sản phẩm nếu không trùng khớp
//         }
//     });
// }

