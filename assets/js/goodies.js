Items = [
    {
        name:"Wonder Sac",
        img:"assets/img/sac-goodies.jpg",
        price:5,
        number:1
    },
    {
        name:"Wonder collier",
        img:"assets/img/bijoux-goodies.jpg",
        price:15,
        number:1
    },
    {
        name:"Wonder cape",
        img:"assets/img/cape-goodies.jpg",
        price:12,
        number:1
    },
    {
        name:"Wonder figurine",
        img:"assets/img/figurine-goodies.jpg",
        price:35,
        number:1
    },
    {
        name:"Wonder Sac",
        img:"assets/img/sac2-goodies.jpg",
        price:89,
        number:1
    },
    {
        name:"Wonder Sac",
        img:"assets/img/sac3-goodies.jpg",
        price:72,
        number:1
    },
    {
        name:"Wonder Sac",
        img:"assets/img/sac4-goodies.jpg",
        price:150,
        number:1
    },
    {
        name:"Wonder Sac",
        img:"assets/img/sac5-goodies.jpg",
        price:22,
        number:1
    },
    {
        name:"Wonder Sac",
        img:"assets/img/top-goodies.jpg",
        price:68,
        number:1
    }
]


var shopModalItemContainer = document.getElementById("shopModalItemContainer");
var addToCart = document.querySelectorAll(".add-to-cart");
var shopModal = document.getElementById("shopModal");
var elemTotal = document.getElementById("totalShopModal");
var shopModalWrapper = document.getElementById("shopModalWrapper");
var total = 0;
var fraisLivraison = document.getElementById("fraisLivraison");
var titleEmpty = document.getElementById("panierVide");
fraisLivraison.innerHTML ="0";
elemTotal.innerHTML = total;

function injectItems(){
    var placeItems = document.querySelector(".shop .card-group");
    for(var i = 0; i < Items.length; i++ ){
        var domString = '<div class="col-xs-6 col-sm-6 col-md-4" ><div class="card"><img src="'+ Items[i].img +' "alt="" class="card-img-top img-fluid"><div class="card-body"><div class="shop-title-wrapper"><h5 class="card-title">' + Items[i].name + '</h5><span class="item-price"><span>' + Items[i].price + '</span>euros</span></div><div class="shop-card"><form class="shop-form"><input type="number" placeholder="How many ?"><button class="add-to-cart" type="button" onclick="addPriceToCart(this)"><span>Add</span><i class="fas fa-cart-plus"></i></button></form></div></div></div></div>';

        placeItems.innerHTML += domString;
    }
}


injectItems();
function addFrais(){
    if(elemTotal.innerHTML >= 16 && elemTotal.innerHTML <= 30  ){
        fraisLivraison.innerHTML ="7";
    }
    if(elemTotal.innerHTML <=  15){
        fraisLivraison.innerHTML ="10";
    }
    else{
        fraisLivraison.innerHTML ="0";
    }
}

function addPriceToCart(elem){
    titleEmpty.remove();
    var valueInput = elem.previousSibling.value;
    var valueName = elem.parentElement.parentElement.parentElement.children[0].children[0].textContent;
    var valuePrice = elem.parentElement.parentElement.parentElement.children[0].children[1].children[0].textContent;
    
    var currentTotal = valuePrice * valueInput;
    for(var i =0; i<valueInput;i++){
        var newItem = '<div class="shop-modal-item"><h3>'+ valueName +'</h3><span><span>'+valuePrice+'</span> euros </span><div class="delete-item" onclick="deleteElement(this)"><i class="fas fa-times"></i></div></div>';
        shopModalItemContainer.innerHTML += newItem;
    }
    elemTotal.innerHTML = parseInt(elemTotal.innerHTML) + currentTotal;
    addFrais();
        
    }



function displayCart(){
    shopModal.style.visibility =    "visible";
    
}

function closeModal(){
    shopModal.style.visibility="hidden";
    
}

function deleteElement(elem){
    var elemToDelete = elem.parentElement.remove();
    var priceToDelete = elem.parentElement.children[1].children[0].textContent;
    elemTotal.innerHTML = parseInt(elemTotal.innerHTML) - priceToDelete;
    addFrais();
    checkIfEmpty()

}

var shopModalClicked = document.getElementById('shopModal');
var shopModalWrapper = document.getElementById('shopModalWrapper');


document.addEventListener('click', function(event) {

  var isClickOutside = shopModalClicked.contains(event.target);
  var isClickWrapper = shopModalWrapper.contains(event.target);
  var isClickItemInside = shopModalItemContainer.contains(event.target);

    if(window.getComputedStyle(shopModal).getPropertyValue("visibility")==="visible"){
        if (isClickOutside &&  !isClickItemInside && !isClickWrapper) {
            shopModal.style.visibility="hidden";
        }
  }
});

function checkIfEmpty(){
    if(shopModalItemContainer.children.length === 0){
    shopModalItemContainer.innerHTML = "<h4>Votre panier est vide :(</h4>"
    }
    
}

//frais de livraison

