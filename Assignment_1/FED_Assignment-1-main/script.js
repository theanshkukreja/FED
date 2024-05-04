document.addEventListener('DOMContentLoaded', function () {
    const container = document.createElement('div');
    container.classList.add('container');

    const leftDiv = document.createElement('div');
    leftDiv.classList.add('left');

    const lHead = document.createElement('h1');
    lHead.classList.add('lhead');
    lHead.textContent = 'AnshKukreja.com';
    leftDiv.appendChild(lHead);

    const itemsDiv = document.createElement('div');
    itemsDiv.classList.add('items');

    const item1Div = document.createElement('div');
    item1Div.classList.add('item');
    const item1Img = document.createElement('img');
    item1Img.src = 'images/img1.png';
    item1Img.alt = 'Nutrabay-Creatine';
    const item1Button = document.createElement('button');
    item1Button.classList.add('atcart');
    item1Button.id = 'atc1';
    item1Button.textContent = 'Add to Cart';
    item1Div.appendChild(item1Img);
    item1Div.appendChild(item1Button);

    const item2Div = document.createElement('div');
    item2Div.classList.add('item');
    const item2Img = document.createElement('img');
    item2Img.src = 'images/img2.png';
    item2Img.alt = 'Airpods Max';
    const item2Button = document.createElement('button');
    item2Button.classList.add('atcart');
    item2Button.id = 'atc2';
    item2Button.textContent = 'Add to Cart';
    item2Div.appendChild(item2Img);
    item2Div.appendChild(item2Button);

    itemsDiv.appendChild(item1Div);
    itemsDiv.appendChild(item2Div);

    leftDiv.appendChild(itemsDiv);

    const rightDiv = document.createElement('div');
    rightDiv.classList.add('right');

    const rTitleDiv = document.createElement('div');
    rTitleDiv.classList.add('rtitle'); 

    const rHead = document.createElement('h1');
    rHead.classList.add('rhead');
    rHead.textContent = 'Cart';
    rTitleDiv.appendChild(rHead);

    const cartImg = document.createElement('img');
    cartImg.src = 'images/cart.png';
    cartImg.alt = 'cart';
    rTitleDiv.appendChild(cartImg);

    rightDiv.appendChild(rTitleDiv);

    const separatorDiv = document.createElement('div');
    separatorDiv.classList.add('separator');
    rightDiv.appendChild(separatorDiv);

    const cartItemsContainerDiv = document.createElement('div');
    cartItemsContainerDiv.classList.add('cartItemsContainer');

    const cartItem1Div = document.createElement('div');
    cartItem1Div.classList.add('cartItem');
    cartItem1Div.id = 'cartItem1';

    const cardStructDiv1 = document.createElement('div');
    cardStructDiv1.classList.add('cardStruct');

    const item1ImgCart = document.createElement('img');
    item1ImgCart.src = 'images/img1.png';
    item1ImgCart.alt = 'img1';
    item1ImgCart.id = 'item1Img';
    cardStructDiv1.appendChild(item1ImgCart);

    const cardInfoDiv1 = document.createElement('div');
    cardInfoDiv1.classList.add('cardInfo');

    const item1Head = document.createElement('h1');
    item1Head.id = 'item1head';
    item1Head.textContent = 'Nutrabay Creatine Monohydrate';
    cardInfoDiv1.appendChild(item1Head);

    const qtyDiv1 = document.createElement('div');
    qtyDiv1.classList.add('qty');

    const item1Qty = document.createElement('p');
    item1Qty.id = 'item1qty';
    item1Qty.textContent = 'Qty : ';
    qtyDiv1.appendChild(item1Qty);

    const decreaseButton1 = document.createElement('button');
    decreaseButton1.classList.add('indecbutton');
    decreaseButton1.id = 'decrease1';
    decreaseButton1.textContent = '-';
    const countDiv1 = document.createElement('div');
    countDiv1.classList.add('count');
    countDiv1.id = 'count1';
    countDiv1.textContent = '1';
    const increaseButton1 = document.createElement('button');
    increaseButton1.classList.add('indecbutton');
    increaseButton1.id = 'increase1';
    increaseButton1.textContent = '+';

    qtyDiv1.appendChild(decreaseButton1);
    qtyDiv1.appendChild(countDiv1);
    qtyDiv1.appendChild(increaseButton1);

    cardInfoDiv1.appendChild(qtyDiv1);

    cardStructDiv1.appendChild(cardInfoDiv1);

    cartItem1Div.appendChild(cardStructDiv1);

    const cartItem2Div = document.createElement('div');
    cartItem2Div.classList.add('cartItem');
    cartItem2Div.id = 'cartItem2';

    const cardStructDiv2 = document.createElement('div');
    cardStructDiv2.classList.add('cardStruct');

    const item2ImgCart = document.createElement('img');
    item2ImgCart.src = 'images/img2.png';
    item2ImgCart.alt = 'img2';
    item2ImgCart.id = 'item2Img';
    cardStructDiv2.appendChild(item2ImgCart);

    const cardInfoDiv2 = document.createElement('div');
    cardInfoDiv2.classList.add('cardInfo');

    const item2Head = document.createElement('h1');
    item2Head.id = 'item2head';
    item2Head.textContent = 'Airpods Max';
    cardInfoDiv2.appendChild(item2Head);

    const qtyDiv2 = document.createElement('div');
    qtyDiv2.classList.add('qty');

    const item2Qty = document.createElement('p');
    item2Qty.id = 'item2qty';
    item2Qty.textContent = 'Qty : ';
    qtyDiv2.appendChild(item2Qty);

    const decreaseButton2 = document.createElement('button');
    decreaseButton2.classList.add('indecbutton');
    decreaseButton2.id = 'decrease2';
    decreaseButton2.textContent = '-';
    const countDiv2 = document.createElement('div');
    countDiv2.classList.add('count');
    countDiv2.id = 'count2';
    countDiv2.textContent = '1';
    const increaseButton2 = document.createElement('button');
    increaseButton2.classList.add('indecbutton');
    increaseButton2.id = 'increase2';
    increaseButton2.textContent = '+';

    qtyDiv2.appendChild(decreaseButton2);
    qtyDiv2.appendChild(countDiv2);
    qtyDiv2.appendChild(increaseButton2);

    cardInfoDiv2.appendChild(qtyDiv2);

    cardStructDiv2.appendChild(cardInfoDiv2);

    cartItem2Div.appendChild(cardStructDiv2);

    cartItemsContainerDiv.appendChild(cartItem1Div);
    cartItemsContainerDiv.appendChild(cartItem2Div);

    rightDiv.appendChild(cartItemsContainerDiv);

    container.appendChild(leftDiv);
    container.appendChild(rightDiv);

    document.body.appendChild(container);









    var countDisplay1 = document.getElementById("count1");
    var count1 = 1;
    var count2 = 1;
    var item1removed = false;

    document.getElementById("increase1").addEventListener('click', function(){
    count1++;
    countDisplay1.textContent = count1;
    })

    document.getElementById("decrease1").addEventListener('click', function(){
    
    count1--;
    if(count1 <= 0){
        if(window.confirm("Remove Item from Cart")){
        item1removed = true;
        document.getElementById("cartItem1").classList.add("removeItem");
        document.getElementById("item1head").textContent = "";
        document.getElementById("item1qty").textContent = "";
        document.getElementById("increase1").style.display = 'none';
        document.getElementById("decrease1").style.display = 'none';
        document.getElementById("count1").textContent = "";
        document.getElementById("item1Img").style.display = 'none';
        }
    }
    else{
        countDisplay1.textContent = count1;
    }
    })

    document.getElementById("atc1").addEventListener('click', function(){
    
        if(item1removed){
            if(window.confirm("Add Item to Cart")){
            item1removed = false;
            document.getElementById("cartItem1").classList.remove("removeItem");
            document.getElementById("item1head").textContent = "Nutrabay Creatine Monohydrate";
            document.getElementById("item1qty").textContent = "Qty : ";
            document.getElementById("increase1").style.display = 'block';
            document.getElementById("decrease1").style.display = 'block';
            document.getElementById("count1").textContent = 1;
            document.getElementById("item1Img").style.display = 'block';
            }
            
        }
        else{
            alert("Item is Already in Cart!")
        }
    })

    var countDisplay2 = document.getElementById("count2");
    var count2 = 1;
    var item2removed = false;

    document.getElementById("increase2").addEventListener('click', function(){
        count2++;
        countDisplay2.textContent = count2;
    })

    document.getElementById("decrease2").addEventListener('click', function(){
        
        count2--;
        if(count2 <= 0){
            if(window.confirm("Remove Item from Cart")){
            item2removed = true;
            document.getElementById("cartItem2").classList.add("removeItem");
            document.getElementById("item2head").textContent = "";
            document.getElementById("item2qty").textContent = "";
            document.getElementById("increase2").style.display = 'none';
            document.getElementById("decrease2").style.display = 'none';
            document.getElementById("count2").textContent = "";
            document.getElementById("item2Img").style.display = 'none';
            }
        }
        else{
            countDisplay2.textContent = count2;
        }
    })

    document.getElementById("atc2").addEventListener('click', function(){

        if(item2removed){
            if(window.confirm("Add Item to Cart")){
            item2removed = false;
            document.getElementById("cartItem2").classList.remove("removeItem");
            document.getElementById("item2head").textContent = "Airpods Max";
            document.getElementById("item2qty").textContent = "Qty : ";
            document.getElementById("increase2").style.display = 'block';
            document.getElementById("decrease2").style.display = 'block';
            document.getElementById("count2").textContent = 1;
            document.getElementById("item2Img").style.display = 'block';
            }
            
        }
        else{
            alert("Item is Already in Cart!")
        }
    })
    });



//      S T Y L I N G
const style = document.createElement('style');
style.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

* {
    margin: 0;
    padding: 0;
}

.container {
    display: flex;
    flex-direction: row;
}

.left {
    width: 60vw;
    height: 100vh;
    background-color: rgb(6, 74, 99);
    color: white;
}

.lhead {
    font-size: 24px;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    margin-left: 2vw;
    margin-top: 7px;
    color: rgb(224, 224, 224);
}

.rhead {
    font-size: 19px;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    margin-left: 2vw;
    margin-top: 7px;
    color: rgb(255, 255, 255);
}

.right {
    width: 40vw;
    height: 100vh;
    background-color: rgb(129, 141, 147);
    color: white;
}

.item {
    height: 254px;
    width: 269px;
    background-color: rgba(44, 211, 236, 0.299);
    border-radius: 7px;
    margin-top: 49px;
}

.items {
    margin-top: 4vw;
    margin-left: 14.9vw;
}

.item > img {
    height: 209px;
    width: 269px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
}

.atcart {
    font-family: "Montserrat", sans-serif;
    font-size: 17px;
    font-weight: 500;
    width: 269px;
    height: 40px;
    background-color: #ffffff00;
    color: rgb(180, 226, 241);
    border: none;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
}

.atcart:hover {
    background-color: rgba(44, 210, 236, 0.422);
    color: white;
}

.rtitle {
    display: flex;
    gap: 9px;
    margin-left: 16vw;
    margin-top: 14px;
}

.rtitle img {
    width: 29px;
}

.rtitle h1 {
    font-size: 24px;
}

.separator {
    width: 40vw;
    height: 2.9px;
    background-color: rgb(192, 196, 198);
    margin-top: 19px;
}

.cartItemsContainer {
    border: 2px solid rgb(192, 196, 198);
    border-radius: 7px;
    height: 74vh;
    width: 37vw;
    margin-top: 4vh;
    margin-left: 1.7vw;
    padding-top: 4vw;
}

.cartItem {
    width: 29vw;
    height: 10vw;
    background-color: white;
    border-radius: 7px;
    margin-left: 4vw;
    margin-top: 2vw;
}

.removeItem {
    width: 0vw;
    height: 0vw;
    background-color: rgba(255, 255, 255, 0);
    margin-left: 0vw;
}

.cardStruct {
    display: flex;
    gap: 14px;
}

.cardStruct img {
    width: 12vw;
    height: 10vw;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
}

.cardStruct h1 {
    color: rgba(10, 10, 10, 0.731);
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 22px;
    margin-top: 9px;
}

.qty {
    display: flex;
    color: black;
    margin-top: 40px;
    align-items: center;
}

.qty p {
    font-family: "Montserrat", sans-serif;
    font-size: 14;
    font-weight: 700;
    color: rgba(10, 10, 10, 0.731);
}

.indecbutton {
    font-size: 19px;
    color: black;
    font-weight: 700;
    padding: 0 12px;
    border-radius: 9px;
    margin-left: 9px;
    margin-right: 9px;
}
`;
document.head.appendChild(style);    






// var countDisplay1 = document.getElementById("count1");
// var count1 = 1;
// var count2 = 1;
// var item1removed = false;

// document.getElementById("increase1").addEventListener('click', function(){
//     count1++;
//     countDisplay1.textContent = count1;
// })

// document.getElementById("decrease1").addEventListener('click', function(){
    
//     count1--;
//     if(count1 <= 0){
//         if(window.confirm("Remove Item from Cart")){
//         item1removed = true;
//         document.getElementById("cartItem1").classList.add("removeItem");
//         document.getElementById("item1head").textContent = "";
//         document.getElementById("item1qty").textContent = "";
//         document.getElementById("increase1").style.display = 'none';
//         document.getElementById("decrease1").style.display = 'none';
//         document.getElementById("count1").textContent = "";
//         document.getElementById("item1Img").style.display = 'none';
//         }
//     }
//     else{
//         countDisplay1.textContent = count1;
//     }
// })

// document.getElementById("atc1").addEventListener('click', function(){
//     // count1++;
//     // countDisplay.textContent = count1;
//     if(item1removed){
//         if(window.confirm("Add Item to Cart")){
//         item1removed = false;
//         document.getElementById("cartItem1").classList.remove("removeItem");
//         document.getElementById("item1head").textContent = "Nutrabay Creatine Monohydrate";
//         document.getElementById("item1qty").textContent = "Qty : ";
//         document.getElementById("increase1").style.display = 'block';
//         document.getElementById("decrease1").style.display = 'block';
//         document.getElementById("count1").textContent = 1;
//         document.getElementById("item1Img").style.display = 'block';
//         }
        
//     }
//     else{
//         alert("Item is Already in Cart!")
//     }
// })




// var countDisplay2 = document.getElementById("count2");
// var count2 = 1;
// var item2removed = false;

// document.getElementById("increase2").addEventListener('click', function(){
//     count2++;
//     countDisplay2.textContent = count2;
// })

// document.getElementById("decrease2").addEventListener('click', function(){
    
//     count2--;
//     if(count2 <= 0){
//         if(window.confirm("Remove Item from Cart")){
//         item2removed = true;
//         document.getElementById("cartItem2").classList.add("removeItem");
//         document.getElementById("item2head").textContent = "";
//         document.getElementById("item2qty").textContent = "";
//         document.getElementById("increase2").style.display = 'none';
//         document.getElementById("decrease2").style.display = 'none';
//         document.getElementById("count2").textContent = "";
//         document.getElementById("item2Img").style.display = 'none';
//         }
//     }
//     else{
//         countDisplay2.textContent = count2;
//     }
// })

// document.getElementById("atc2").addEventListener('click', function(){
//     // count1++;
//     // countDisplay.textContent = count1;
//     if(item2removed){
//         if(window.confirm("Add Item to Cart")){
//         item2removed = false;
//         document.getElementById("cartItem2").classList.remove("removeItem");
//         document.getElementById("item2head").textContent = "Airpods Max";
//         document.getElementById("item2qty").textContent = "Qty : ";
//         document.getElementById("increase2").style.display = 'block';
//         document.getElementById("decrease2").style.display = 'block';
//         document.getElementById("count2").textContent = 1;
//         document.getElementById("item2Img").style.display = 'block';
//         }
        
//     }
//     else{
//         alert("Item is Already in Cart!")
//     }
// })