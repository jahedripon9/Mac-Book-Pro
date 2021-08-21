// update Total Cost Function

function updateTotalCost(){
    const totalBestPrice = Number(bestPrice.innerText);
    const memoryCost = Number(extraMemoryCost.innerText);
    const storageCost = Number(extraStorageCost.innerText);
    const deliveryCharge = Number(deliveryCost.innerText);
    const totalCost = totalBestPrice + memoryCost + storageCost + deliveryCharge ;
    totalPrice.innerText = totalCost;
    inTotalPrice.innerText = totalCost;

    
}


// <!--------Memory Purchase Area Starting -------->

const memory8gb = document.getElementById('memory8gb');

memory8gb.addEventListener('click', function(){
    extraMemoryCost.innerText = '0';
    updateTotalCost()
})


const memory16gb = document.getElementById('memory16gb');

memory16gb.addEventListener('click', function(){
    extraMemoryCost.innerText = '180';
    updateTotalCost()
})


// <!--------Storage Purchase Area  Starting-------->


const storage256gb = document.getElementById('storage256gb');

storage256gb.addEventListener('click', function(){
    extraStorageCost.innerText = '0';
    updateTotalCost()
})

const storage512gb = document.getElementById('storage512gb');

storage512gb.addEventListener('click', function(){
    extraStorageCost.innerText = '100';
    updateTotalCost()
})

const storage1tb = document.getElementById('storage1tb');

storage1tb.addEventListener('click', function(){
    extraStorageCost.innerText = '180';
    updateTotalCost()
})
// <!--------Storage Purchase Area Ending -------->


// <!--------Delivery Area Starting -------->
const freeDelivery = document.getElementById('freeDelivery');
const chargeDelivery = document.getElementById('chargeDelivery');

const deliveryCost = document.getElementById("deliveryCost");



freeDelivery.addEventListener('click', function(){
    deliveryCost.innerText = '0';
    updateTotalCost()
})
chargeDelivery.addEventListener('click', function(){
    deliveryCost.innerText = '20';
    updateTotalCost()
})
// <!--------Delivery Area Ending-------->

// <!--------Total Price Area Starting-------->

const totalPrice = document.getElementById('totalPrice')

totalPrice.addEventListener('click', function(){
    totalPrice.innerText = '1299';
    updateTotalCost()
})
// <!--------Total Price Area Ending-------->

// <!--------Best Price Area Starting-------->

const bestPrice = document.getElementById('bestPrice')

bestPrice.addEventListener('click', function(){
    bestPrice.innerText = '1299';
    updateTotalCost()
})

// <!--------Best Price Area Ending-------->


// <!--------Intotal Price Area Starting-------->

const inTotalPrice = document.getElementById('inTotalPrice')

inTotalPrice.addEventListener('click', function(){
    inTotalPrice.innerText = '1299';
})

// <!--------Intotal Price Area Ending-------->








