let yourName = "Dominic Dongell" // HINT: Replace this with your own name!



// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle





// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

function updateQuantity(displayGb){
    let gb = document.querySelector('#qty-gb')
    gb.innerHTML = displayGb
}



const quantity = document.querySelector('#qty-gb');
document.getElementById('add-gb').addEventListener('click', function(e) {
    gb++
    document.getElementById('qty-gb').textContent=gb
    document.getElementById('qty-total').textContent=gb+cc+sugar
    
    
})

document.getElementById('minus-gb').addEventListener('click', function(e) {
    if (gb > 0) {
    gb--
    document.getElementById('qty-gb').textContent=gb
    document.getElementById('qty-total').textContent=gb+cc+sugar   
    }
})

let displayGb = document.querySelector('#qty-total');

function updateQuantity(displayCc){
    let cc = document.querySelector('#qty-cc')
    cc.innerHTML = displayCc
}



const quantityCc = document.querySelector('#qty-cc');
document.getElementById('add-cc').addEventListener('click', function(e) {
    cc++
    document.getElementById('qty-cc').textContent=cc
    document.getElementById('qty-total').textContent=gb+cc+sugar
    
    
})

document.getElementById('minus-cc').addEventListener('click', function(e) {
    if (cc > 0) {
    cc--
    document.getElementById('qty-cc').textContent=cc
    document.getElementById('qty-total').textContent=gb+cc+sugar   
    }
})

let displayCc = document.querySelector('#qty-total');

function updateQuantity(displaySugar){
    let sugar = document.querySelector('#qty-cc')
    sugar.innerHTML = displaySugar
}



const quantityS = document.querySelector('#qty-sugar');
document.getElementById('add-sugar').addEventListener('click', function(e) {
    sugar++
    document.getElementById('qty-sugar').textContent=sugar
    document.getElementById('qty-total').textContent=gb+cc+sugar
    
    
})

document.getElementById('minus-sugar').addEventListener('click', function(e) {
    if (sugar > 0) {
    sugar--
    document.getElementById('qty-sugar').textContent=sugar
    document.getElementById('qty-total').textContent=gb+cc+sugar   
    }
})

let displaySugar = document.querySelector('#qty-total');

//document.getElementById('qty-total').innerHTML + document.querySelector('#qty-gb')









    